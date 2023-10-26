import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './task7.css';
export default function Tech(){
  return(<div id='main'>
      <h1>Learn 4.0 Technologies</h1>

      <p id='head'>
Technology is the application of knowledge for achieving practical goals in a reproducible way. The word </p>
 
 <div className="card">
    <div className="card1">
       <h2>Data Scientist</h2>
       <p className='para'>A data scientist uses data to understand and explain </p>

       <img src="https://cdni.iconscout.com/illustration/premium/thumb/coder-3462295-2895977.png" height={100} />
    </div>

    <div className="card2">
    <h2>IOT Developer</h2>
       <p className='para'> professionals who can develop, manage, and monitor </p>

       <img src="https://cdni.iconscout.com/illustration/premium/thumb/girl-monitoring-house-through-futuristic-technology-8863538-7271538.png?f=webp" height={100} width={100}/>
    </div>

    <div className="card3">
    <h2>VR Developer</h2>
       <p className='para'>
VR programmers write the code for cutting-edge game development. </p>

       <img src="https://www.svgrepo.com/show/246659/augmented-reality-virtual-reality.svg"  height={100} alt="" />
    </div>

    <div className="card4">
    <h2>ML Engineer</h2>
       <p className='para'>A machine learning engineer (ML engineer) is a person in IT </p>

       <img src="https://img.freepik.com/premium-vector/machine-learning-using-svg-icons_960911-2219.jpg"  height={100}  alt="" />
    </div>
    </div>
      </div>
  )
}