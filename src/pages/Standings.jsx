import Navbar from "../components/Navbar"
import Standingscomponent from "../components/Standingscomponent"
import React, { useContext } from "react";
import { TeamContext } from "../context/TeamContext";
const Standings = () => {

  const { StandingsData } = useContext(TeamContext)


  return (
    <div>

      <Navbar />
      <Standingscomponent standings={StandingsData} />
    </div>
  );
};
export default Standings