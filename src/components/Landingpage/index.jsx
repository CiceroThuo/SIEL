import "./index.css"
import Gria from "../../assets/landing.jpg"
import twende from "../../assets/twende.jpg"
import Quote from "../../assets/Quote.jpg"
import Win from "../../assets/Mvp.jpg"
const Landing = () => {
    return (
        <div>
            <div className="heading">
                <h1>GRIA STREETLEAGUE</h1>
                
            </div>
            <div className="Siel">
                <div className="league-logo">
                    <h1>Road to Afrobasket 2025</h1>
                    <p>Gria Streetleague has produces the best of the best in Kenya basketball team.</p>
                    <img className="logoless" src={Gria} />

                </div>
                <div className="Quote">
                    <p>The Drive .The Tension.The Love of the Game .The Setbacks.This is the SIEL</p>

                    <img className="quote-img" src={Quote} />
                    <div>
                        
                    </div>
                </div>
                </div>
         <div className="Twende">
                <div className="Win">
                    <p>The Dream.The Push.The Determination.The Success and the joy it Brings.</p>
                    <img className="win-img" src={Win} />
                    <div>
                    <p>The leadership the young players get determines how far they can develop their game.This leadership shows in their attitude and discipline.SIEL bringsout the best from players who are determined to play professionally,those who have passion for the beautiful game by bringing out scouts. </p>
</div>
                </div>

                <div className="Gria">
                    <h1>The Gria Experience</h1>
                    <p>Previous Champions,Twende Sport starring Garang brought that toughness feeling in the streetleague attracting many fans.Going unbeaten thrashing teams and going on to put the crown on themselves.The Gria Experience is to showup and showout. </p>
                     <img className="Gria-img" src={twende} />
                     <div>
                     <p>Champions 2023</p>
                    </div>


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