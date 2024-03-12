import React from 'react';
import "./index.css"

const FixtureWithDates = ({ uptownTeams, eastlandsTeams }) => {
  // Generate fixtures for both divisions
  const generateFixturesWithDates = (teams) => {
    const fixtures = [];
    const weekends = getWeekendsOfYear(new Date().getFullYear());
    let weekendIndex = 0;
    let matchups = [];


    for (let i = 0; i < teams.length; i++) {
      for (let j = i + 1; j < teams.length; j++) {
        matchups.push({ homeTeam: teams[i].name, awayTeam: teams[j].name });
      }
    }

    
    for (const weekend of weekends) {
      const weekendFixtures = [];
      for (let i = 0; i < matchups.length; i++) {
        const fixture = matchups[i];
        weekendFixtures.push({ ...fixture, date: weekend });
        matchups.splice(i, 1);
        i--; 
      }
      fixtures.push(weekendFixtures);
    }

    return fixtures;
  };

  // Get weekends of the year
  const getWeekendsOfYear = (year) => {
    const weekends = [];
    const currentDate = new Date(year, 0, 1);
    while (currentDate.getFullYear() === year) {
      if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
        weekends.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return weekends;
  };

  const uptownFixtures = generateFixturesWithDates(uptownTeams);
  const eastlandsFixtures = generateFixturesWithDates(eastlandsTeams);

  return (
    <div>
      <h2>Uptown Fixtures</h2>
      {uptownFixtures.map((weekendFixtures, index) => (
        <div key={index}>
          <h3>Weekend {index + 1}</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Home Team</th>
                <th>Away Team</th>
              </tr>
            </thead>
            <tbody>
              {weekendFixtures.map((fixture, idx) => (
                <tr key={idx}>
                  <td>{fixture.date.toDateString()}</td>
                  <td>{fixture.homeTeam}</td>
                  <td>{fixture.awayTeam}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <h2>Eastlands Fixtures</h2>
      {eastlandsFixtures.map((weekendFixtures, index) => (
        <div key={index}>
          <h3>Weekend {index + 1}</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Home Team</th>
                <th>Away Team</th>
              </tr>
            </thead>
            <tbody>
              {weekendFixtures.map((fixture, idx) => (
                <tr key={idx}>
                  <td>{fixture.date.toDateString()}</td>
                  <td>{fixture.homeTeam}</td>
                  <td>{fixture.awayTeam}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default FixtureWithDates;
