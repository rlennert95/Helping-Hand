import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Dropdown(props) {
  return (
    <div className="form-group" >
      <select className="form-control" {...props} style={{ boxShadow: "1.75px 1.75px lightgray" }}>
        <option value="">--Please choose a job type--</option> 
        <option value="Assembly">Assembly</option>
        <option value="Electrical">Electrical</option>
        <option value="Handyman">Handyman</option>
        <option value="HVAC">HVAC (heating, ventilation, and air conditioning)</option>
        <option value="Moving">Moving</option>
        <option value="Painting">Painting</option>
        <option value="Plumbing">Plumbing</option>
        <option value="Tech">Tech</option>
        <option value="Yard and lawn">Yard/lawn</option>
      </select>
    </div>
  )
}

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} style={{ boxShadow: "1.75px 1.75px lightgray" }} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="10" {...props} style={{ boxShadow: "1.75px 1.75px lightgray" }}/>
    </div>
  );
}

export function Timeframe(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} style={{ boxShadow: "1.75px 1.75px lightgray" }} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ marginBottom: 10, backgroundColor: "#f6c90e", color: "black", borderWidth: "0px", boxShadow: "1.75px 1.75px lightgray" }} className="btn btn-success">
      {props.children}
    </button>
  );
}

