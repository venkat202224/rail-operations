import React, { useEffect, useRef } from "react";
import "./Modal.css"; // Import the CSS file
import TableData from "./TableData.Component";
import Home from "./Home.Component";

const Modal = ({ showModal, sendData}) => {
  console.log(sendData)
  return (
    <div className="modal-section">
      <div className="overlay">
        <div className="modal-content">
          <p className="close-btn" onClick={showModal}>
            ×
          </p>

          <h2 className="modal-header">Hello World!</h2>
          <p className="para">
            Hello world ! ,<br /> welcome to the web designg..............
          </p>

          <br />
          <p className="train-section">Train Id : {sendData.trainid}</p>
          <p className="train-section">Train Status : {sendData.status}</p>
          <p className="train-section">Train Latitude : {sendData.latitude}</p>
          <p className="train-section">Train Longitude : {sendData.longitude}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
