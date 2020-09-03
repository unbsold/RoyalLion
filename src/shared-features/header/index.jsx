import React from 'react';
import './index.scss';
import { NavLink } from "react-router-dom";

const Header = () => {
  return(
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2 col-auto brand">
            <NavLink to="/"><img src="img/logo.svg" alt="" /></NavLink>
          </div>
          <nav className="col-auto ml-auto mr-auto menu">
            <NavLink exact to="/">Линия</NavLink>
            <NavLink to="/live">Лайв</NavLink>
            <NavLink to="/result">Результаты</NavLink>
            <NavLink to="/contact">Контакты</NavLink>
          </nav>
          <div className="col-lg-3 col-auto user-nav">
            <button className="enter">
              Вход
            </button>
            <button className="btn btn-mini">
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
