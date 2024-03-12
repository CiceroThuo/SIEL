import "./index.css"
import img from "../../assets/landing.jpg"
import Quote from "../../assets/Quote.jpg"
import Win from "../../assets/Mvp.jpg"
const Landing = ()=>{
    return (
        <div>
            <div className="heading">
         <h1>GRIA STREETLEAGUE</h1>
         <img src={img}/>
         </div>
         <div className="Siel">
            <div className="Quote">
           <p>The Drive .The Tension.The Love of the Game .The Setbacks.This is the SIEL</p> 
           
           <img src={Quote}/>
           </div>
           <div className="Win">
           <p>The Dream.The Push.The Determination.The Success and the joy it Brings.</p>
           <img src={Win}/>
           </div>
           <div>
            <p>The leadership the young players get determines how far they can develop their game.This leadership shows in their attitude and discipline.SIEL bringsout the best from players who are determined to play professionally,those who have passion for the beautiful game by bringing out scouts. </p>
                       
           </div>
           

           
         </div>
         <div className="footer">
         <div className="footer-item">
            <a>Contact Us</a>
            <a href="https://www.instagram.com/streetleagueafrica/?hl=en">Instagram</a>
            <a href="https://www.facebook.com/streetleagueAfrica/">Facebook</a>
            <a href="https://www.youtube.com/watch?v=8LSZeRh0cKM">Youtube</a>
            </div>
            <div className="footer-item">
                <a>About</a>
                <a>Ambassadors</a>
                <a>Members Assocition</a>
            </div>
            <div className="footer-item">
                    <a>Rewards</a>
                    <a>Standings</a>
                    <a>Team Status</a>
            </div>
</div>
           </div>
    
    )
}

export default Landing