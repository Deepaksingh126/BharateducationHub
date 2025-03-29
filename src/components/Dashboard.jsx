import React, { useState } from 'react';
import '../index.css'

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="dashboard w-50 absolute top-20">
      <div 
        className="bg-gray-100 w-20 h-10 flex items-center justify-center my-4 rounded cursor-pointer"
        onClick={handleOpen}
      >
        open
      </div>
      <div className={`class-grid ${isOpen ? 'translate-x-0' : 'translate-x-[-200px]'} transition-transform duration-300 backdrop-filter backdrop-blur-[4px] height-screen py-10`}> 
        <div className="class-card text-amber-50 bg-gray-700 p-2 rounded-2xl m-5">
          <a href="/study-material/class4">
            <h2>class 4</h2>
          </a>
        </div>
        <div className="class-card text-amber-50 bg-gray-700 p-2 rounded-2xl m-5">
          <a href="/study-material/class5">
            <h2>class 5</h2>
          </a>
        </div>
        <div className="class-card text-amber-50 bg-gray-700 p-2 rounded-2xl m-5">
          <a href="/study-material/class6">
            <h2>class 6</h2>
          </a>
        </div>
        <div className="class-card text-amber-50 bg-gray-700 p-2 rounded-2xl m-5">
          <a href="/study-material/class7">
            <h2>class 7</h2>
          </a>
        </div>
        <div className="class-card text-amber-50 bg-gray-700 p-2 rounded-2xl m-5">
          <a href="/study-material/class8">
            <h2>class 8</h2>
          </a>
        </div>
        <div className="class-card text-amber-50 bg-gray-700 p-2 rounded-2xl m-5">
          <a href="/study-material/class9">
            <h2>class 9</h2>
          </a>
        </div>
        <div className="class-card text-amber-50 bg-gray-700 p-2 rounded-2xl m-5">
          <a href="/study-material/class10">
            <h2>class 10</h2>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;