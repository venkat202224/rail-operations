import React, { useEffect, useRef } from 'react';
import './Modal.css'; // Import the CSS file



const Modal =({showModal})=> {
return ( <div className="modal-section">
          <div className="overlay">
            <div className="modal-content">
              <p className="close-btn" onClick={showModal}>
                ×
              </p>

              <h2>Hello World!</h2>
              <p color="Black">
                Hello world ! ,<br /> welcome to the web designg..............
              </p>
             
            </div>
          </div>
        </div>)

};

export default Modal;