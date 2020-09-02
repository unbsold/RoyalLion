import React from 'react';
import './style.scss';

const Match = () => {
  return(
    <div className="match row">
      <div className="col-lg-1">
        <div className="time">
          23:30
        </div>
        <div className="date">
          26 авг
        </div>
      </div>
      <div className="col-lg-5">
        <div className="name">
          <div className="command">
            <div className="label">
              Барселона
            </div>
            <div className="logo">
              <img src="img/barselona.png" alt=""/>
            </div>
          </div>
          <div className="score">
            — : —
          </div>
          <div className="command">
            <div className="logo">
              <img src="img/barselona.png" alt=""/>
            </div>
            <div className="label">
              Барселона
            </div>
          </div>
        </div>

      </div>
      <div className="col-lg-6">
        <div className="coefficient">
          <button className="item">1x <span className="number">2.37</span></button>
          <button className="item">x <span className="number">2.37</span></button>
          <button className="item">2x <span className="number">2.37</span></button>
          <button className="item">Б <span className="number">2.37</span></button>
          <button className="item">Т <span className="number">2.37</span></button>
          <button className="item">М <span className="number">2.37</span></button>
          <button className="more">+16 событий</button>
        </div>
      </div>
    </div>
  )
}

export default Match
