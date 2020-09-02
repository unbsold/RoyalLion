import React from 'react';
import './sidebar.scss';

const Sidebar = () => {
  return(
    <aside>
      <div className="container">
        <nav className="category">
          <div className="row justify-content-around">
            <div className="col-lg-auto">
              <button className="btn-sort select">
                <i className="icon-football"></i>
              </button>
            </div>
            <div className="col-lg-auto">
              <button className="btn-sort">
                <i className="icon-tennis"></i>
              </button>
            </div>
            <div className="col-lg-auto">
              <button className="btn-sort">
                <i className="icon-hockey"></i>
              </button>
            </div>
            <div className="col-lg-auto">
              <button className="btn-sort">
                <i className="icon-basketball"></i>
              </button>
            </div>
            <div className="col-lg-auto">
              <button className="btn-sort">
                <i className="icon-volleyball"></i>
              </button>
            </div>
            <div className="col-lg-auto">
              <button className="btn-sort">
                <i className="icon-baseball"></i>
              </button>
            </div>
            <div className="col-lg-auto">
              <button className="btn-sort">
                <i className="icon-ping-pong"></i>
              </button>
            </div>
            <div className="col-lg-auto">
              <button className="btn-sort">
                <i className="icon-gandbol"></i>
              </button>
            </div>
            <div className="col-lg-auto">
              <button className="btn-sort">
                <i className="icon-american-football"></i>
              </button>
            </div>
            <div className="col-lg-auto">
              <button className="btn-sort">
                <i className="icon-badminton"></i>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
