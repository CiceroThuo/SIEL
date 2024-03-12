import "./index.css"

const Standingscomponent = ({ standings }) => {
    return (
      <div>
        <h2>Uptown Standings</h2>
        <div className="standings-table">
          <div className="row header">
            <div className="cell">Position</div>
            <div className="cell">Team</div>
            <div className="cell">Played</div>
            <div className="cell">Wins</div>
            <div className="cell">Losses</div>
            <div className="cell">Points For</div>
            <div className="cell">Points Against</div>
            <div className="cell">Points Difference</div>
            <div className="cell">Points</div>
          </div>
          {standings[0].Uptown.map((team, index) => (
            <div className="row" key={index}>
              <div className="cell">{index + 1}</div>
              <div className="cell">{team.name}</div>
              <div className="cell">{team.played}</div>
              <div className="cell">{team.wins}</div>
              <div className="cell">{team.losses}</div>
              <div className="cell">{team.pointsFor}</div>
              <div className="cell">{team.pointsAgainst}</div>
              <div className="cell">{team.pointsDifference}</div>
              <div className="cell">{team.points}</div>
            </div>
          ))}
        </div>
  
        <h2>Eastlands Standings</h2>
        <div className="standings-table">
          <div className="row header">
            <div className="cell">Position</div>
            <div className="cell">Team</div>
            <div className="cell">Played</div>
            <div className="cell">Wins</div>
            <div className="cell">Losses</div>
            <div className="cell">Points For</div>
            <div className="cell">Points Against</div>
            <div className="cell">Points Difference</div>
            <div className="cell">Points</div>
          </div>
          {standings[1].Eastlands.map((team, index) => (
            <div className="row" key={index}>
              <div className="cell">{index + 1}</div>
              <div className="cell">{team.name}</div>
              <div className="cell">{team.played}</div>
              <div className="cell">{team.wins}</div>
              <div className="cell">{team.losses}</div>
              <div className="cell">{team.pointsFor}</div>
              <div className="cell">{team.pointsAgainst}</div>
              <div className="cell">{team.pointsDifference}</div>
              <div className="cell">{team.points}</div>
            </div>
          ))}
        </div>
      </div>
        
    )
    
      
    }
export default Standingscomponent