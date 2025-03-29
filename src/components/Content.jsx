import React from 'react';

const Content = ({ subjects, classTitle }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[80vw] bg-gray-100 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 border-b pb-2">{classTitle}</h1>
        <div className="subjects text-gray-700 text-xl">
          {subjects && subjects.map((subject, index) => (
            <p className="text-gray-700 text-xl list-disc hover:text-blue-600 font-semibold hover:underline my-2" key={index}>{subject}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;