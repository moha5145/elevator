import "./App.css";

import BuildingOne from "./components/BuildingOne";
import PanelOne from "./components/PanelOne";
import { useState } from "react";
import BuildingTwo from "./components/BuildingTwo";
import PanelTwo from "./components/PanelTwo";

function App() {
  const [currentStage, setCurrentStage] = useState(3);
  const [stageToGo, setStageToGo] = useState(3);
  const [doorOne, setDoorOne] = useState("open");

  const [currentStageBTwo, setCurrentStageBTwo] = useState(3);
  const [stageToGoBTwo, setStageToGoBTwo] = useState(3);
  const [doorBTwo, setDoorBTwo] = useState("open");

  return (
    <div className="App flex flex-wrap gap-1 md:gap-5 justify-center pt-4">
      <div className="flex gap-3">
        <BuildingOne
          currentStage={currentStage}
          setCurrentStage={setCurrentStage}
          stageToGo={stageToGo}
          setStageToGo={setStageToGo}
          doorOne={doorOne}
          setDoorOne={setDoorOne}
        />
        <PanelOne
          stageToGo={stageToGo}
          setStageToGo={setStageToGo}
          currentStage={currentStage}
          setCurrentStage={setCurrentStage}
          doorOne={doorOne}
          setDoorOne={setDoorOne}
        />
      </div>

      <div className="flex gap-3">
        <BuildingTwo
          currentStageBTwo={currentStageBTwo}
          setCurrentStageBTwo={setCurrentStageBTwo}
          stageToGoBTwo={stageToGoBTwo}
          setStageToGoBTwo={setStageToGoBTwo}
          doorBTwo={doorBTwo}
          setDoorBTwo={setDoorBTwo}
        />

        <PanelTwo
          currentStageBTwo={currentStageBTwo}
          setCurrentStageBTwo={setCurrentStageBTwo}
          stageToGoBTwo={stageToGoBTwo}
          setStageToGoBTwo={setStageToGoBTwo}
          doorBTwo={doorBTwo}
          setDoorBTwo={setDoorBTwo}
        />
      </div>
    </div>
  );
}

export default App;
