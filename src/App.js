import './styles/style.scss';
import React from 'react';

import Header from './components/includes/header/header';
import Footer from './components/includes/footer/footer';
import Sidebar from './components/includes/sidebar/sidebar';

import Content from './components/content';



const App = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
