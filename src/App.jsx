import { useState } from 'react'
import Header from './components/Header';
import LiveScoreCard from './components/LiveScoreCard';
import TodayMatches from './components/TodayMatches';
import React from 'react';

import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <section className="section">
          <h2>Live Moments</h2>
          <LiveScoreCard />
        </section>
        <section className="section">
          <h2>Today's Matches</h2>
          <TodayMatches />
        </section>
      </div>
    </>
  );
}

export default App
