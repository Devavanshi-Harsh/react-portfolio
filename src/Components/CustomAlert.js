import './CSS/Alert.css'
import React from 'react';
const CustomAlert = ({ color, title, msg, setFalse }) => {
  
  return (
    <div className='alert-box' >
      <div className='Custom-Alert' id={color}>
        <h2 className='alert-title'>{title}</h2>
        <p className='alert-description'>{msg}</p>
      </div>
      <button onClick={()=>setFalse(false)} className='alert-button'>X</button>

    </div>
  );
};
export default CustomAlert;