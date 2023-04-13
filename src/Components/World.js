import createGlobe from "cobe";
import { useEffect, useRef} from "react";
import { useSpring } from 'react-spring';

import OfficeMap from '../extra_styles/Atlantic_Offices.png'
import '../App.css'

const GLOBE_CONFIG = {
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 3,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1.2, 1.2, 1.2],
  markers: [
    { location: [42.69744437111342, 23.323370269239742], size: 0.1},
    { location: [41.002448398192776,  29.053941082517355], size: 0.2},
    { location: [43.065193154206334,  -107.1578067176503], size: 0.1},
    { location: [52.225651199978536,  21.013623195334112], size: 0.1}        
  ]
};

export default function World(props) {
  const canvasRef = useRef();
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));
  
  useEffect(() => {
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      ...GLOBE_CONFIG,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        state.phi = r.get()
        state.width = width * 2
        state.height = width * 2
      }
    })

    setTimeout(() => canvasRef.current.style.opacity = '1')
    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [r])

  const OfficeWorld = () => {
    return (
        <img src={OfficeMap} alt="" className=" -mt-24 scale-50 transform transition-all duration-500 hover:bg-center rounded-full hover:shadow-xl" />
    )
  }


  return (
     <div className="text-black items-center justify-center bg-transparent w-full h-screen ">
         <OfficeWorld /> 

      <div className="hidden" style={{
        width: '100%',
        maxWidth: 600,
        aspectRatio: 1,
        margin: 'auto',
        position: 'relative',
      }}>
        <canvas className="hidden"
          ref={canvasRef}
          onPointerDown={(e) => {
            pointerInteracting.current =
              e.clientX - pointerInteractionMovement.current;
            canvasRef.current.style.cursor = 'grabbing';
          }}
          onPointerUp={() => {
            pointerInteracting.current = null;
            canvasRef.current.style.cursor = 'grab';
          }}
          onPointerOut={() => {
            pointerInteracting.current = null;
            canvasRef.current.style.cursor = 'grab';
          }}
          onMouseMove={(e) => {
            if (pointerInteracting.current !== null) {
              const delta = e.clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              api.start({
                r: delta / 200,
              });
            }
          }}
          onTouchMove={(e) => {
            if (pointerInteracting.current !== null && e.touches[0]) {
              const delta = e.touches[0].clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              api.start({
                r: delta / 100,
              });
            }
          }}
          style={{
            width: '100%',
            height: '100%',
            cursor: 'grab',
            contain: 'layout paint size',
            opacity: 0,
            transition: 'opacity 1s ease',
          }}
        />
      </div>
    </div>  
    )
}