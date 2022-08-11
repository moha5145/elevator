import "./App.css";
import { BsCircle, BsFillArrowDownSquareFill, BsArrowUpSquareFill } from "react-icons/bs";

import { CgPlayButtonR, CgArrowsMergeAltH, CgArrowsShrinkH } from "react-icons/cg";
import BuildingOne from "./components/BuildingOne";
import PanelOne from "./components/PanelOne";
import { useState } from "react";
import BuildingTwo from "./components/BuildingTwo";

function App() {
  const [currentStage, setCurrentStage] = useState(3);
  const [stageToGo, setStageToGo] = useState(3);
  const [arrowBuildingOne, setArrowBuildingOne] = useState("");

  const [doorOne, setDoorOne] = useState("open");

  return (
    <div className="App flex gap-5">
      <BuildingOne
        currentStage={currentStage}
        setCurrentStage={setCurrentStage}
        stageToGo={stageToGo}
        setStageToGo={setStageToGo}
        doorOne={doorOne}
        setDoorOne={setDoorOne}
      />
      <PanelOne
        arrowBuildingOne={arrowBuildingOne}
        setArrowBuildingOne={setArrowBuildingOne}
        stageToGo={stageToGo}
        setStageToGo={setStageToGo}
        currentStage={currentStage}
        setCurrentStage={setCurrentStage}
        doorOne={doorOne}
        setDoorOne={setDoorOne}
      />

      <BuildingTwo
        currentStage={currentStage}
        setCurrentStage={setCurrentStage}
        stageToGo={stageToGo}
        setStageToGo={setStageToGo}
        doorOne={doorOne}
        setDoorOne={setDoorOne}
      />
    </div>
  );
}

export default App;
