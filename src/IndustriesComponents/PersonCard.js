import React from "react";

const PersonCard = ({ name, jobTitle, image, explanation }) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-40 w-full object-cover md:w-48 hover:scale-105 transform transition-all duration-500" src={image} alt={`${name}'s profile`} />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold" id='section_font'>{jobTitle}</div>
                <h2 className="mt-2 text-2xl font-bold text-gray-800">{name}</h2>
                <p className="mt-2 text-gray-600" id='section_font'>{explanation}</p>
              </div>
            </div>
        </div>
    )
}

export default PersonCard;

