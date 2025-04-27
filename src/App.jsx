import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';

import './App.css'

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="live-section">
        <h2>Live Moments</h2>
        <LiveScoreCard />
      </section>
    </div>
  );
}

export default App
