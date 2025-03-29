import React, { useState } from 'react';
import "../index.css";

const Question = () => {
  const [showSolution, setShowSolution] = useState(false);
  const [Showvideo, setShowvideo] = useState(false);

  return (
    <>
     <main className='question-cont'>
      <section>
        <div id="headings">
          <h2 id="topic-name">newton ka niyam</h2>
          <h2 id="solution-head" onClick={() => setShowSolution(!showSolution)}>solution</h2>
          <h2 id="video-head" onClick={()=>{
            setShowvideo(!Showvideo);}}>video</h2>
        </div>
        <div id="content">
          <ol>
            <li>
              <h6>newton ka pehla niyam</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </li>
            <li>
              <h6>newton ka dusra niyam</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </li>
            <li>
              <h6>newton ka teesra niyam</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </li>
          </ol>
        </div>
        <div id="solution" style={{display: showSolution ? 'block' : 'none'}}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        </div>
        <div id="video" >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_pC6jmv_LUg?si=-oymP7_Hj1aNZXU1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
    </>
   
  );
};

export default Question;