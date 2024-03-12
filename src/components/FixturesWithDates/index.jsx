import React, { useContext } from 'react';
import "./index.css"
import { TeamContext } from '../../context/TeamContext';


const FixtureWithDates = () => {
  const { StandingsData } = useContext(TeamContext);

  // Function to shuffle the elements of an array
  const shuffleArray = (array) => {
    const shuffledArray = [...array]; // Create a copy of the original array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
    }
    return shuffledArray;
  };

  // Generate fixtures for both divisions
  const generateFixturesWithDates = (uptownTeams, eastlandsTeams) => {
    const fixtures = [];
    const weekends = getWeekendsOfYear(new Date().getFullYear());

    for (const weekend of weekends) {
      const weekendFixtures = [];
      const shuffledUptownTeams = shuffleArray([...uptownTeams]);
      const shuffledEastlandsTeams = shuffleArray([...eastlandsTeams]);

      for (let i = 0; i < shuffledUptownTeams.length; i++) {
        const homeTeam = shuffledUptownTeams[i];
        const awayTeam = shuffledEastlandsTeams[i % shuffledEastlandsTeams.length]; // Ensure each Uptown team plays an Eastlands team
        weekendFixtures.push({ homeTeam: homeTeam.name, awayTeam: awayTeam.name, date: weekend });
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

  // Check if StandingsData is defined
  if (!StandingsData || StandingsData.length < 2) {
    return <div>Error: Standings data is not available.</div>;
  }

  const uptownFixtures = generateFixturesWithDates(StandingsData[0].Uptown, StandingsData[1].Eastlands);

  return (
    <div>
      <h2>Uptown & Eastlands Fixtures</h2>
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
    </div>
  );
};

export default FixtureWithDates;
