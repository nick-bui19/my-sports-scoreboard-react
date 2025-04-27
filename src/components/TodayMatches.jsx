import React from 'react';

const matches = [
  { team1: 'Bayern', score1: 1, team2: 'Mainz 05', score2: 0, status: '1st • 03:13' },
  { team1: 'Germany', score1: 0, team2: 'Spain', score2: 0, status: 'FT' }
];

function TodayMatches() {
  return (
    <div className="today-matches">
      {matches.map((match, index) => (
        <div key={index} className="match-row">
          <p>{match.team1} {match.score1} - {match.score2} {match.team2}</p>
          <span>{match.status}</span>
        </div>
      ))}
    </div>
  );
}

export default TodayMatches;