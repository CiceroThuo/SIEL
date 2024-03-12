import { createContext } from "react";

const TeamContext = createContext()

const TeamProvider = ({ children }) =>{
    const StandingsData = [
        {
          Uptown: [{ name: 'Twende', played: 0, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, pointsDifference: 0, points: 0 },
          { name: 'Vikapu', played: 0, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, pointsDifference: 0, points: 0 },
          { name: 'Kibera Talibans', played: 0, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, pointsDifference: 0, points: 0 },
          { name: 'Qwetu', played: 0, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, pointsDifference: 0, points: 0 },
          { name: 'Bantu Sports', played: 0, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, pointsDifference: 0, points: 0 },
          { name: 'Moore Wright', played: 0, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, pointsDifference: 0, points: 0 },
          { name: 'Leos', played: 0, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, pointsDifference: 0, points: 0 },
          { name: 'Sunrise', played: 0, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, pointsDifference: 0, points: 0 },
          { name: 'Saviq', played: 0, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, pointsDifference: 0, points: 0 },
          { name: 'Pride Landers', played: 0, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, pointsDifference: 0, points: 0 },
          { name: 'DB Nets', played: 0, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, pointsDifference: 0, points: 0 },
          { name: 'E.Nets', played: 0, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, pointsDifference: 0, points: 0 },]
        },
    
        {
          Eastlands: [{ name: 'JNets', played: 0, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, pointsDifference: 0, points: 0 },
          { name: 'Clique Mambas', played: 0, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, pointsDifference: 0, points: 0 },
          { name: 'Feba Nation', played: 0, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, pointsDifference: 0, points: 0 },
          { name: 'Fam Kenya', played: 0, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, pointsDifference: 0, points: 0 },
          { name: 'Buru Crusaders', played: 0, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, pointsDifference: 0, points: 0 },
          { name: 'Junubin Nation', played: 0, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, pointsDifference: 0, points: 0 },
          { name: 'Huruma Dragons', played: 0, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, pointsDifference: 0, points: 0 },
          { name: 'Phenomenal Phenoms', played: 0, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, pointsDifference: 0, points: 0 },
          { name: 'Dementors', played: 0, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, pointsDifference: 0, points: 0 },
          { name: 'Tefflad', played: 0, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, pointsDifference: 0, points: 0 },
          { name: 'Advance', played: 0, wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0, pointsDifference: 0, points: 0 }]
        }
      ];
    return (
        <TeamContext.Provider value={{ StandingsData }}>
            { children }
        </TeamContext.Provider>
    )
}

export { 
    TeamProvider,
    TeamContext
}