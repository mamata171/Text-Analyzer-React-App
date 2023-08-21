import React from 'react'

export default function Navbar(props) {
  return (
    <nav className  = {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <a className = "navbar-brand" href="#">Navbar</a>
    <button className = "navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className = "navbar-toggler-icon"></span>
    </button>
  
    <div className = "collapse navbar-collapse" id="navbarSupportedContent">
      <ul className = "navbar-nav mr-auto">
        <li className = "nav-item active">
          <a className = "nav-link" href="#">{props.title} </a>
        </li>
        <li className = "nav-item">
          <a className = "nav-link" href="#">{props.about}</a>
        </li>
        <li className = "nav-item dropdown">
          <a className = "nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className = "dropdown-menu" aria-labelledby="navbarDropdown">
            <a className = "dropdown-item" href="#">Action</a>
            <a className = "dropdown-item" href="#">Another action</a>
            <div className = "dropdown-divider"></div>
            <a className = "dropdown-item" href="#">Something else here</a>
          </div>
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
