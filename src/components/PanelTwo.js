import { useState } from "react";

import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

import { CgArrowsMergeAltH, CgArrowsShrinkH } from "react-icons/cg";

const PanelTwo = ({ currentStageBTwo, setCurrentStageBTwo, stageToGoBTwo, setStageToGoBTwo, doorBTwo, setDoorBTwo }) => {
  const [panelBtn, setPanelBtn] = useState(null);

  const stages = [
    { number: 10 },
    { number: 9 },
    { number: 8 },
    { number: 6 },
    { number: 4 },
    { number: 2 },
    { number: 0 },
    { number: -1 },
    { number: -2 },
    { number: -3 },
    { number: -4 },
    { number: -5 },
  ];

  const close = (stage, door) => {
    setPanelBtn(stage);
    setStageToGoBTwo(stage);
    setTimeout(() => {
      setDoorBTwo(door);
    }, 1000);
  };

  const open = (stage, door) => {
    setTimeout(() => {
      setCurrentStageBTwo(stage);
      setDoorBTwo(door);
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
    } else if (stage === 6) {
      close(6, "closed");
      open(6, "open");
    } else if (stage === 4) {
      close(4, "closed");
      open(4, "open");
    } else if (stage === 2) {
      close(2, "closed");
      open(2, "open");
    } else if (stage === 0) {
      close(0, "closed");
      open(0, "open");
    } else if (stage === -1) {
      close(-1, "closed");
      open(-1, "open");
    } else if (stage === -2) {
      close(-2, "closed");
      open(-2, "open");
    } else if (stage === -3) {
      close(-3, "closed");
      open(-3, "open");
    } else if (stage === -4) {
      close(-4, "closed");
      open(-4, "open");
    } else if (stage === -5) {
      close(-5, "closed");
      open(-5, "open");
    }
  };
  return (
    <div>
      <h2 className="text-center">Panneau interne n°2</h2>

      <div className="grid grid-cols-2 gap-0 md:gap-2 justify-center items-center border-4">
        {stages.map((stage, index) => {
          return (
            <div
              key={index}
              className={`  md:w-24 py-3 md:py-7 border-x-[1px] border-y-[1px] md:border-x-2 md:border-y-2 cursor-pointer hover:opacity-60 ${
                panelBtn === stages[index].number ? "bg-green-500" : ""
              }`}
              onClick={() => {
                handelClick(stages[index].number);
              }}
            >
              {stages[index].number === 0 ? "R.C" : stages[index].number}
            </div>
          );
        })}

        <div className=" border-2">
          <div className="  flex  justify-center">
            <div className={`flex-1  ${stageToGoBTwo > currentStageBTwo ? "bg-green-400" : ""}`}>
              <FaLongArrowAltUp className="text-xl md:text-4xl " />
            </div>
            <div className={`flex-1  ${stageToGoBTwo < currentStageBTwo ? "bg-green-400" : ""}`}>
              <FaLongArrowAltDown className="text-xl md:text-4xl " />
            </div>
          </div>
          <div className=" flex justify-center">
            <CgArrowsMergeAltH className={`flex-1 text-xl md:text-4xl  ${doorBTwo === "closed" ? "bg-green-400" : ""}`} />

            <CgArrowsShrinkH className={`flex-1 text-xl md:text-4xl ${doorBTwo === "open" ? "bg-green-400" : ""}`} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PanelTwo;
