import { useState } from 'react'
import Header from './components/Header';
import LiveScoreCard from './components/LiveScoreCard';
import TodayMatches from './components/TodayMatches';
import React from 'react';

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <section className="live-section">
        <h2>Live Moments</h2>
        <LiveScoreCard />
      </section>
      <section className="today-section">
        <h2>Today's Matches</h2>
        <TodayMatches />
      </section>
    </div>
  );
}

export default App
