import React from 'react'
// import Nav from "./Components/Nav/Nav";
import Nav from '../Nav/Nav'
import './DoYouKnow.css'

function DoYouKnow() {
  return (
    
    <div>
        <div className='content' > 
        <Nav/>
          <div className="rectangle">
                    <h1>Do You Know?</h1>  
          </div>    
          <div className="body-text">
              <p>By 2030, Over 2 Billion <br/>Jobs Will Disappear. </p>
          </div>
          <div className="button">
              <button className='btn'>Read More</button>
          </div>
        </div>
    </div>

  )
}

export default DoYouKnow