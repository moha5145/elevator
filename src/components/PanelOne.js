import { useState } from "react";
import { BsCircle, BsFillArrowDownSquareFill, BsArrowUpSquareFill, BsArrowUp, BsArrowDown } from "react-icons/bs";

import { CgPlayButtonR, CgArrowsMergeAltH, CgArrowsShrinkH } from "react-icons/cg";

const PanelOne = ({ arrowBuildingOne, setArrowBuildingOne, stageToGo, setStageToGo, currentStage, setCurrentStage, doorOne, setDoorOne }) => {
  const [panelBtn, setPanelBtn] = useState(null);
  const [panelStageToGo, setPanelStageToGo] = useState(0);

  const stages = [
    { number: 10 },
    { number: 9 },
    { number: 8 },
    { number: 7 },
    { number: 6 },
    { number: 5 },
    { number: 4 },
    { number: 3 },
    { number: 2 },
    { number: 1 },
    { number: 0 },
  ];

  const handelClick = (stage) => {
    if (stage === 10) {
      setPanelBtn(10);
      setStageToGo(10);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);
      setTimeout(() => {
        setCurrentStage(10);
        setDoorOne("open");
        setPanelBtn(null);
      }, 3000);
    } else if (stage === 9) {
      setPanelBtn(9);
      setStageToGo(9);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);
      setTimeout(() => {
        setCurrentStage(9);
        setDoorOne("open");
        setPanelBtn(null);
      }, 3000);
    } else if (stage === 8) {
      setPanelBtn(8);
      setStageToGo(8);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);
      setTimeout(() => {
        setCurrentStage(8);
        setDoorOne("open");
        setPanelBtn(null);
      }, 3000);
    } else if (stage === 7) {
      setPanelBtn(7);
      setStageToGo(7);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);
      setTimeout(() => {
        setCurrentStage(7);
        setDoorOne("open");
        setPanelBtn(null);
      }, 3000);
    } else if (stage === 6) {
      setPanelBtn(6);
      setStageToGo(6);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);
      setTimeout(() => {
        setCurrentStage(6);
        setDoorOne("open");
        setPanelBtn(null);
      }, 3000);
    } else if (stage === 5) {
      setPanelBtn(5);
      setStageToGo(5);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);
      setTimeout(() => {
        setCurrentStage(5);
        setDoorOne("open");
        setPanelBtn(null);
      }, 3000);
    } else if (stage === 4) {
      setPanelBtn(4);
      setStageToGo(4);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);
      setTimeout(() => {
        setCurrentStage(4);
        setDoorOne("open");
        setPanelBtn(null);
      }, 3000);
    } else if (stage === 3) {
      setPanelBtn(3);
      setStageToGo(3);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);
      setTimeout(() => {
        setCurrentStage(3);
        setDoorOne("open");
        setPanelBtn(null);
      }, 3000);
    } else if (stage === 2) {
      setPanelBtn(2);
      setStageToGo(2);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);
      setTimeout(() => {
        setCurrentStage(2);
        setDoorOne("open");
        setPanelBtn(null);
      }, 3000);
    } else if (stage === 1) {
      setPanelBtn(1);
      setStageToGo(1);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);
      setTimeout(() => {
        setCurrentStage(1);
        setDoorOne("open");
        setPanelBtn(null);
      }, 3000);
    } else if (stage === 0) {
      setPanelBtn(0);
      setStageToGo(0);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);
      setTimeout(() => {
        setCurrentStage(0);
        setDoorOne("open");
        setPanelBtn(null);
      }, 3000);
    }
  };
  return (
    <div>
      <h2 className="text-center">Panneau interne n°1</h2>

      <div>
        <div className="grid grid-cols-2 gap-2 justify-center items-center border-4">
          {stages.map((stage, index) => {
            console.log(stages[index].number);
            return (
              <div key={index}>
                {stage.number === 10 && (
                  <div
                    className={` w-24 py-7 row-auto border-x-2 border-y-2 cursor-pointer hover:opacity-60 text-4xl ${panelBtn === 10 ? "bg-green-500" : ""}`}
                    onClick={() => {
                      handelClick(stage.number);
                    }}
                  >
                    {stage.number}
                  </div>
                )}

                {stage.number === 9 && (
                  <div
                    className={` w-24 py-7 row-auto border-x-2 border-y-2 cursor-pointer hover:opacity-60 text-4xl ${panelBtn === 9 ? "bg-green-500" : ""}`}
                    onClick={() => {
                      handelClick(stage.number);
                    }}
                  >
                    {stage.number}
                  </div>
                )}

                {stage.number === 8 && (
                  <div
                    className={` w-24 py-7 row-auto border-x-2 border-y-2 cursor-pointer hover:opacity-60 text-4xl ${panelBtn === 8 ? "bg-green-500" : ""}`}
                    onClick={() => {
                      handelClick(stage.number);
                    }}
                  >
                    {stage.number}
                  </div>
                )}

                {stages[index].number === 7 && (
                  <div
                    className={` w-24 py-7 row-auto border-x-2 border-y-2 cursor-pointer hover:opacity-60 text-4xl ${panelBtn === 7 ? "bg-green-500" : ""}`}
                    onClick={() => {
                      handelClick(stage.number);
                    }}
                  >
                    {stage.number}
                  </div>
                )}

                {stages[index].number === 6 && (
                  <div
                    className={` w-24 py-7 row-auto border-x-2 border-y-2 cursor-pointer hover:opacity-60 text-4xl ${panelBtn === 6 ? "bg-green-500" : ""}`}
                    onClick={() => {
                      handelClick(stage.number);
                    }}
                  >
                    {stage.number}
                  </div>
                )}

                {stages[index].number === 5 && (
                  <div
                    className={` w-24 py-7 row-auto border-x-2 border-y-2 cursor-pointer hover:opacity-60 text-4xl ${panelBtn === 5 ? "bg-green-500" : ""}`}
                    onClick={() => {
                      handelClick(stage.number);
                    }}
                  >
                    {stage.number}
                  </div>
                )}

                {stages[index].number === 4 && (
                  <div
                    className={` w-24 py-7 row-auto border-x-2 border-y-2 cursor-pointer hover:opacity-60 text-4xl ${panelBtn === 4 ? "bg-green-500" : ""}`}
                    onClick={() => {
                      handelClick(stage.number);
                    }}
                  >
                    {stage.number}
                  </div>
                )}

                {stages[index].number === 3 && (
                  <div
                    className={` w-24 py-7 row-auto border-x-2 border-y-2 cursor-pointer hover:opacity-60 text-4xl ${panelBtn === 3 ? "bg-green-500" : ""}`}
                    onClick={() => {
                      handelClick(stage.number);
                    }}
                  >
                    {stage.number}
                  </div>
                )}

                {stages[index].number === 2 && (
                  <div
                    className={` w-24 py-7 row-auto border-x-2 border-y-2 cursor-pointer hover:opacity-60 text-4xl ${panelBtn === 2 ? "bg-green-500" : ""}`}
                    onClick={() => {
                      handelClick(stage.number);
                    }}
                  >
                    {stage.number}
                  </div>
                )}

                {stages[index].number === 1 && (
                  <div
                    className={` w-24 py-7 row-auto border-x-2 border-y-2 cursor-pointer hover:opacity-60 text-4xl ${panelBtn === 1 ? "bg-green-500" : ""}`}
                    onClick={() => {
                      handelClick(stage.number);
                    }}
                  >
                    {stage.number}
                  </div>
                )}

                {stages[index].number === 0 && (
                  <div
                    className={` w-24 py-7 row-auto border-x-2 border-y-2 cursor-pointer hover:opacity-60 text-4xl ${panelBtn === 0 ? "bg-green-500" : ""}`}
                    onClick={() => {
                      handelClick(stage.number);
                    }}
                  >
                    R.C
                  </div>
                )}
              </div>
            );
          })}

          <div className=" border-2">
            <div className="  flex  justify-center">
              <div className={`flex-1  ${stageToGo > currentStage ? "bg-green-400" : ""}`}>
                <BsArrowUp size={40} className="" />
              </div>
              <div className={`flex-1  ${stageToGo < currentStage ? "bg-green-400" : ""}`}>
                <BsArrowDown size={40} />
              </div>
            </div>
            <div className=" flex justify-center">
              <CgArrowsMergeAltH size={40} className={`flex-1  ${doorOne === "closed" ? "bg-green-400" : ""}`} />

              <CgArrowsShrinkH size={40} className={`flex-1  ${doorOne === "open" ? "bg-green-400" : ""}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PanelOne;
