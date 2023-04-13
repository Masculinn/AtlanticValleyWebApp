import React from "react";

import '../App.css'

const Footer = (props) => {
    return (
        <footer className="bg-black py-4 text-white" style={{display: props.on ? 'block' : 'none'}}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-center">
              <div className="text-gray-400 text-sm">
                &copy; 2023 Your Company. All Rights Reserved.
              </div>
              <div className="text-gray-400 text-sm">
                Made with <span className="text-red-500" id="section_font">&hearts;</span> by Atlantic Valley
              </div>
            </div>
          </div>
        </footer>
      );
}

export default Footer;