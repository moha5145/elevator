import { useState } from "react";

import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import { CgArrowsMergeAltH, CgArrowsShrinkH } from "react-icons/cg";

const PanelOne = ({ stageToGo, setStageToGo, currentStage, setCurrentStage, doorOne, setDoorOne }) => {
  const [panelBtn, setPanelBtn] = useState(null);

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
  const close = (stage, door) => {
    setPanelBtn(stage);
    setStageToGo(stage);
    setTimeout(() => {
      setDoorOne(door);
    }, 1000);
  };

  const open = (stage, door) => {
    setTimeout(() => {
      setCurrentStage(stage);
      setDoorOne(door);
      setPanelBtn(null);
    }, 3000);
  };

  const handelClick = (stage) => {
    if (stage === 10) {
      close(10, "closed");
      open(10, "open");
    } else if (stage === 9) {
      close(9, "closed");
      open(9, "open");
    } else if (stage === 8) {
      close(8, "closed");
      open(8, "open");
    } else if (stage === 7) {
      close(7, "closed");
      open(7, "open");
    } else if (stage === 6) {
      close(6, "closed");
      open(6, "open");
    } else if (stage === 5) {
      close(5, "closed");
      open(5, "open");
    } else if (stage === 4) {
      close(4, "closed");
      open(4, "open");
    } else if (stage === 3) {
      close(3, "closed");
      open(3, "open");
    } else if (stage === 2) {
      close(2, "closed");
      open(2, "open");
    } else if (stage === 1) {
      close(1, "closed");
      open(1, "open");
    } else if (stage === 0) {
      close(0, "closed");
      open(0, "open");
    }
  };
  return (
    <div>
      <h2 className="text-center">Panneau interne n°1</h2>

      <div>
        <div className="grid grid-cols-2 gap:0 sm:gap-2 justify-center items-center border-4">
          {stages.map((stage, index) => {
            console.log(stages[index].number);
            return (
              <div key={index}>
                {stage.number === 10 && (
                  <div
                    className={` md:w-24 py-3 md:py-7 border-x-[1px] border-y-[1px] md:border-x-2 md:border-y-2 cursor-pointer hover:opacity-60 text-xl md:text-4xl ${
                      panelBtn === 10 ? "bg-green-500" : ""
                    }`}
                    onClick={() => {
                      handelClick(stage.number);
                    }}
                  >
                    {stage.number}
                  </div>
                )}

                {stage.number === 9 && (
                  <div
                    className={`  md:w-24 py-3 md:py-7 border-x-[1px] border-y-[1px] md:border-x-2 md:border-y-2 cursor-pointer hover:opacity-60 text-xl md:text-4xl ${
                      panelBtn === 9 ? "bg-green-500" : ""
                    }`}
                    onClick={() => {
                      handelClick(stage.number);
                    }}
                  >
                    {stage.number}
                  </div>
                )}

                {stage.number === 8 && (
                  <div
                    className={`  md:w-24 py-3 md:py-7 border-x-[1px] border-y-[1px] md:border-x-2 md:border-y-2 cursor-pointer hover:opacity-60 text-xl md:text-4xl ${
                      panelBtn === 8 ? "bg-green-500" : ""
                    }`}
                    onClick={() => {
                      handelClick(stage.number);
                    }}
                  >
                    {stage.number}
                  </div>
                )}

                {stages[index].number === 7 && (
                  <div
                    className={`  md:w-24 py-3 md:py-7 border-x-[1px] border-y-[1px] md:border-x-2 md:border-y-2 cursor-pointer hover:opacity-60 text-xl md:text-4xl ${
                      panelBtn === 7 ? "bg-green-500" : ""
                    }`}
                    onClick={() => {
                      handelClick(stage.number);
                    }}
                  >
                    {stage.number}
                  </div>
                )}

                {stages[index].number === 6 && (
                  <div
                    className={`  md:w-24 py-3 md:py-7 border-x-[1px] border-y-[1px] md:border-x-2 md:border-y-2 cursor-pointer hover:opacity-60 text-xl md:text-4xl ${
                      panelBtn === 6 ? "bg-green-500" : ""
                    }`}
                    onClick={() => {
                      handelClick(stage.number);
                    }}
                  >
                    {stage.number}
                  </div>
                )}

                {stages[index].number === 5 && (
                  <div
                    className={` md:w-24 py-3 md:py-7 border-x-[1px] border-y-[1px] md:border-x-2 md:border-y-2 cursor-pointer hover:opacity-60 text-xl md:text-4xl ${
                      panelBtn === 5 ? "bg-green-500" : ""
                    }`}
                    onClick={() => {
                      handelClick(stage.number);
                    }}
                  >
                    {stage.number}
                  </div>
                )}

                {stages[index].number === 4 && (
                  <div
                    className={`  md:w-24 py-3 md:py-7 border-x-[1px] border-y-[1px] md:border-x-2 md:border-y-2 cursor-pointer hover:opacity-60 text-xl md:text-4xl ${
                      panelBtn === 4 ? "bg-green-500" : ""
                    }`}
                    onClick={() => {
                      handelClick(stage.number);
                    }}
                  >
                    {stage.number}
                  </div>
                )}

                {stages[index].number === 3 && (
                  <div
                    className={` md:w-24 py-3 md:py-7 border-x-[1px] border-y-[1px] md:border-x-2 md:border-y-2 cursor-pointer hover:opacity-60 text-xl md:text-4xl ${
                      panelBtn === 3 ? "bg-green-500" : ""
                    }`}
                    onClick={() => {
                      handelClick(stage.number);
                    }}
                  >
                    {stage.number}
                  </div>
                )}

                {stages[index].number === 2 && (
                  <div
                    className={`  md:w-24 py-3 md:py-7 border-x-[1px] border-y-[1px] md:border-x-2 md:border-y-2 cursor-pointer hover:opacity-60 text-xl md:text-4xl ${
                      panelBtn === 2 ? "bg-green-500" : ""
                    }`}
                    onClick={() => {
                      handelClick(stage.number);
                    }}
                  >
                    {stage.number}
                  </div>
                )}

                {stages[index].number === 1 && (
                  <div
                    className={` md:w-24 py-3 md:py-7 text-xl md:text-4xl border-x-[1px] border-y-[1px] md:border-x-2 md:border-y-2 cursor-pointer hover:opacity-60  ${
                      panelBtn === 1 ? "bg-green-500" : ""
                    }`}
                    onClick={() => {
                      handelClick(stage.number);
                    }}
                  >
                    {stage.number}
                  </div>
                )}

                {stages[index].number === 0 && (
                  <div
                    className={` md:w-24 py-3 md:py-7 border-x-1 border-x-[1px] border-y-[1px] md:border-x-2 md:border-y-2 cursor-pointer hover:opacity-60 text-2xl md:text-4xl ${
                      panelBtn === 0 ? "bg-green-500" : ""
                    }`}
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

          <div className=" border-2  md:w-24 py-3 md:py-7 flex flex-col ">
            <div className="  flex  justify-center ">
              <div className={`flex-1  ${stageToGo > currentStage ? "bg-green-400" : ""}`}>
                <FaLongArrowAltUp className="text-xl md:text-4xl " />
              </div>
              <div className={`flex-1  ${stageToGo < currentStage ? "bg-green-400" : ""}`}>
                <FaLongArrowAltDown className="text-xl md:text-4xl " />
              </div>
            </div>
            <div className=" flex justify-center">
              <CgArrowsMergeAltH className={`flex-1 text-xl md:text-4xl  ${doorOne === "closed" ? "bg-green-400" : ""}`} />

              <CgArrowsShrinkH className={`flex-1 text-xl md:text-4xl ${doorOne === "open" ? "bg-green-400" : ""}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PanelOne;
