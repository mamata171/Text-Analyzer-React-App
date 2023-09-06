import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar(props) {

  
  return (
    <nav className  = {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <Link className = "navbar-brand" to="/">Navbar</Link>
    <button className = "navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className = "navbar-toggler-icon"></span>
    </button>
  
    <div className = "collapse navbar-edit navbar-collapse" id="navbarSupportedContent">
      <ul className = "navbar-nav mr-auto">
        <li className = "nav-item">
          <Link to="about" className = "nav-link">{props.about}</Link>
        </li> 
      </ul>

      <form action="">
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
</form>
    </div>  
  </nav>
    
  )
}
