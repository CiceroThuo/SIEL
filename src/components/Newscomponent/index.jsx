import "./index.css"
import pools from "../../assets/pools.jpg"
import news from "../../assets/NextExperience.jpg"
import showdown from "../../assets/GOA.jpg"
import videoSource from "../../assets/video.mp4"
import video from "../../assets/AfterNext.mp4"
const Newscomponent = () => {
    return (
        <div className="section">
            <div className="heading">
            <p>Here are the latest news from Gria Streetleague</p>
</div>
            <div className="latest">
                <div className="pooling">

                    <p> THE POOLS.The pools are ready.Seeding took place with the teams divided into two categories:Eastlands and Uptown</p>
                    <img src={pools} />
                </div>
                <div className="showdown">

                    <p>THE SHOWDOWN.The showdown begins with a opportunity for teams to get prizes.It is Showup and Showout for the curtainraiser events:Dunks and 3 point contest.Gear up for this Tournament.</p>
                    <img src={news} />
                </div>

            </div>
            <div className="venue">
                <h1>Curtain Raiser</h1>
                <p>Where The Showdown Begins</p>
                <img src={showdown} />
                <video width="1000" controls>
          <source src={video} type="video/mp4" />
          
        </video>

            </div>
            <div className="preps">
                <h1>Team Preparations</h1>
<video width="1000" controls>
          <source src={videoSource} type="video/mp4" />
          
        </video>
            </div>

        </div>
    )
}
export default Newscomponent