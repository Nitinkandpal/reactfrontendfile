import React from 'react';
import './OfferSection.css';
import { FaFile } from 'react-icons/fa';


const OfferSection = () => {
  return (
    
    <section className="offer-section" >
      <div className='outerdiv'>
      <h2 style={{textAlign:"start",  }}>  What We <span style={{color:"rgb(138,43,226)"}}>Offer</span>
      </h2>
      <div className="offer-cards">
        <div className="card">
          <div style={{backgroundColor:"	#EE82EE",height:"3rem",width:"3rem" ,padding:"10px",borderRadius:"10px",display:"inline",margin:"10px 0px"}}>
            
          <FaFile style={{fontSize:"1.8rem" ,color:"	#8A2BE2",}}></FaFile>
          
          
          
          </div>
          <h5>For Students</h5>
          <ul>
            <li >Good Services here...</li>
            <li>Good Services here...</li>
            <li>Good Services here...</li>
            <li>Good Services here...</li>
            <li>Good Services here...</li>
            
          </ul>
        </div>
        <div className="card">
          <div style={{backgroundColor:"	#EE82EE",height:"3rem",width:"3rem" ,padding:"10px",borderRadius:"10px",display:"inline",margin:"10px 0px"}}>
            
          <FaFile style={{fontSize:"1.8rem" ,color:"	#8A2BE2",}}></FaFile>
          </div>
          <h5>For Mentors</h5>
          <ul>
            <li >Good Services here...</li>
            <li>Good Services here...</li>
            <li>Good Services here...</li>
            <li>Good Services here...</li>
            <li>Good Services here...</li>
            
          </ul>
        </div>
        <div className="card">
          <div style={{backgroundColor:"	#EE82EE",height:"3rem",width:"3rem" ,padding:"10px",borderRadius:"10px",display:"inline",margin:"10px 0px"}}>
            
          <FaFile style={{fontSize:"1.8rem" ,color:"	#8A2BE2",}}></FaFile>
          </div>
          <h5>For Institutions</h5>
          <ul>
            <li >Good Services here...</li>
            <li>Good Services here...</li>
            <li>Good Services here...</li>
            <li>Good Services here...</li>
            <li>Good Services here...</li>
            
          </ul>
        </div>
        <div className="card">
          <div style={{backgroundColor:"	#EE82EE",height:"3rem",width:"3rem" ,padding:"10px",borderRadius:"10px",display:"inline",margin:"10px 0px"}}>
            
          <FaFile style={{fontSize:"1.8rem" ,color:"	#8A2BE2",}}></FaFile>
          </div>
          <h5>For Corporates</h5>
          <ul>
            <li >Good Services here...</li>
            <li>Good Services here...</li>
            <li>Good Services here...</li>
            <li>Good Services here...</li>
            <li>Good Services here...</li>
            
          </ul>
        </div>
      </div>

      </div>
    
    </section>
  );
}

export default OfferSection;
