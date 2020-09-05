import React from 'react';
import './index.scss';

const Footer = () => {
  return(
    <footer>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="brand">
              <img src="img/logo-footer.svg" alt=""/>
            </div>
          </div>
          <nav className="col-lg-6">
            <a href="#">Правила сайта</a>
            <a href="#">Пользовательское соглашение.</a>
          </nav>
          <div className="col-lg-3">
            <p className="copy">@ 1994-2020 All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
