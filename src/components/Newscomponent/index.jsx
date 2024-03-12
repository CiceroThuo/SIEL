import "./index.css"
import pools from "../../assets/pools.jpg"
import news from "../../assets/NextExperience.jpg"
const Newscomponent = () => {
    return(
        <div>
            <div className="latest">
                <p>Here are the latest news from Gria Streetleague</p>
                <div className="pooling">
                    
                    <p> THE POOLS.The pools are ready.Seeding took place with the teams divided into two categories:Eastlands and Uptown</p>
                    <img src={pools}/>
                    </div>
                    <div className="showdown">
                        
                        <p>THE SHOWDOWN.The showdown begins with a opportunity for teams to get prizes.It is Showup and Showout for the curtainraiser events:Dunks and 3 point contest.Gear up for this Tournament.</p>
                <img src={news}/>
               </div>

            </div>

        </div>
    )
}
export default Newscomponent