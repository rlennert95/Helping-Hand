import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Dropdown(props) {
  return (
    <div className="form-group">
      <select className="form-control" {...props}>
        <option value="">--Please choose a job type--</option> 
        <option value="assembly">Assembly</option>
        <option value="electrical">Electrical</option>
        <option value="handyman">Handyman</option>
        <option value="hvac">HVAC (heating, ventilation, and air conditioning)</option>
        <option value="moving">Moving</option>
        <option value="painting">Painting</option>
        <option value="plumbing">Plumbing</option>
        <option value="tech">Tech</option>
        <option value="yardLawn">Yard/lawn</option>
      </select>
    </div>
  )
}

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function Timeframe(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
