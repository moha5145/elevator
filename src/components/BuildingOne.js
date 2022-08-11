import { BsCircle, BsFillArrowDownSquareFill, BsArrowUpSquareFill } from "react-icons/bs";
import { CgPlayButtonR, CgArrowsMergeAltH, CgArrowsShrinkH } from "react-icons/cg";
const BuildingOne = ({ currentStage, setCurrentStage, stageToGo, setStageToGo, doorOne, setDoorOne }) => {
  const stages = [
    { number: 10, name: "étage 10" },
    { number: 9, name: "étage 9" },
    { number: 8, name: "étage 8" },
    { number: 7, name: "étage 7" },
    { number: 6, name: "étage 6" },
    { number: 5, name: "étage 5" },
    { number: 4, name: "étage 4" },
    { number: 3, name: "étage 3" },
    { number: 2, name: "étage 2" },
    { number: 1, name: "étage 1" },
    { number: 0, name: "R.C" },
  ];

  const handelClick = (stages, i) => {
    if (stages[i].number === 10) {
      setStageToGo(10);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);

      setTimeout(() => {
        setCurrentStage(10);
        setDoorOne("open");
      }, 3000);
    } else if (stages[i].number === 9) {
      setStageToGo(9);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);

      setTimeout(() => {
        setCurrentStage(9);
        setDoorOne("open");
      }, 3000);
    } else if (stages[i].number === 8) {
      setStageToGo(8);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);

      setTimeout(() => {
        setCurrentStage(8);
        setDoorOne("open");
      }, 3000);
    } else if (stages[i].number === 7) {
      setStageToGo(7);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);

      setTimeout(() => {
        setCurrentStage(7);
        setDoorOne("open");
      }, 3000);
    } else if (stages[i].number === 6) {
      setStageToGo(6);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);

      setTimeout(() => {
        setCurrentStage(6);
        setDoorOne("open");
      }, 3000);
    } else if (stages[i].number === 6) {
      setStageToGo(6);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);

      setTimeout(() => {
        setCurrentStage(6);
        setDoorOne("open");
      }, 3000);
    } else if (stages[i].number === 5) {
      setStageToGo(5);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);

      setTimeout(() => {
        setCurrentStage(5);
        setDoorOne("open");
      }, 3000);
    } else if (stages[i].number === 4) {
      setStageToGo(4);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);

      setTimeout(() => {
        setCurrentStage(4);
        setDoorOne("open");
      }, 3000);
    } else if (stages[i].number === 4) {
      setStageToGo(4);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);

      setTimeout(() => {
        setCurrentStage(4);
        setDoorOne("open");
      }, 3000);
    } else if (stages[i].number === 3) {
      setStageToGo(3);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);

      setTimeout(() => {
        setCurrentStage(3);
        setDoorOne("open");
      }, 3000);
    } else if (stages[i].number === 2) {
      setStageToGo(2);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);

      setTimeout(() => {
        setCurrentStage(2);
        setDoorOne("open");
      }, 3000);
    } else if (stages[i].number === 1) {
      setStageToGo(1);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);

      setTimeout(() => {
        setCurrentStage(1);
        setDoorOne("open");
      }, 3000);
    } else if (stages[i].number === 0) {
      setStageToGo(0);
      setTimeout(() => {
        setDoorOne("closed");
      }, 1000);

      setTimeout(() => {
        setCurrentStage(0);
        setDoorOne("open");
      }, 3000);
    }
  };
  return (
    <div className="flex flex-col">
      <h2 className="text-center">Immeuble n°1</h2>

      <div>
        {stages.map((stage, index) => {
          return (
            <div className="flex  justify-center items-center border-4">
              <div className=" w-24 py-7">{stage.name}</div>
              <div className=" w-24 py-7 border-x-2 flex justify-center">
                {stages[index].number === 10 && (
                  <BsCircle
                    size={25}
                    className={` rounded-full ${currentStage === 10 ? "bg-green-500 text-green-700" : stageToGo === 10 ? "bg-orange-500" : ""}`}
                  />
                )}
                {stages[index].number === 9 && (
                  <BsCircle
                    size={25}
                    className={` rounded-full ${currentStage === 9 ? "bg-green-500 text-green-700" : stageToGo === 9 ? "bg-orange-500" : ""}`}
                  />
                )}
                {stages[index].number === 8 && (
                  <BsCircle
                    size={25}
                    className={` rounded-full ${currentStage === 8 ? "bg-green-500 text-green-700" : stageToGo === 8 ? "bg-orange-500" : ""}`}
                  />
                )}

                {stages[index].number === 7 && (
                  <BsCircle
                    size={25}
                    className={` rounded-full ${currentStage === 7 ? "bg-green-500 text-green-700" : stageToGo === 7 ? "bg-orange-500" : ""}`}
                  />
                )}
                {stages[index].number === 6 && (
                  <BsCircle
                    size={25}
                    className={` rounded-full ${currentStage === 6 ? "bg-green-500 text-green-700" : stageToGo === 6 ? "bg-orange-500" : ""}`}
                  />
                )}
                {stages[index].number === 5 && (
                  <BsCircle
                    size={25}
                    className={` rounded-full ${currentStage === 5 ? "bg-green-500 text-green-700" : stageToGo === 5 ? "bg-orange-500" : ""}`}
                  />
                )}
                {stages[index].number === 4 && (
                  <BsCircle
                    size={25}
                    className={` rounded-full ${currentStage === 4 ? "bg-green-500 text-green-700" : stageToGo === 4 ? "bg-orange-500" : ""}`}
                  />
                )}
                {stages[index].number === 3 && (
                  <BsCircle
                    size={25}
                    className={` rounded-full ${currentStage === 3 ? "bg-green-500 text-green-700" : stageToGo === 3 ? "bg-orange-500" : ""}`}
                  />
                )}
                {stages[index].number === 2 && (
                  <BsCircle
                    size={25}
                    className={` rounded-full ${currentStage === 2 ? "bg-green-500 text-green-700" : stageToGo === 2 ? "bg-orange-500" : ""}`}
                  />
                )}
                {stages[index].number === 1 && (
                  <BsCircle
                    size={25}
                    className={` rounded-full ${currentStage === 1 ? "bg-green-500 text-green-700" : stageToGo === 1 ? "bg-orange-500" : ""}`}
                  />
                )}
                {stages[index].number === 0 && (
                  <BsCircle
                    size={25}
                    className={` rounded-full ${currentStage === 0 ? "bg-green-500 text-green-700" : stageToGo === 0 ? "bg-orange-500" : ""}`}
                  />
                )}
              </div>
              <div
                className="py-7 flex justify-center cursor-pointer hover:opacity-60 w-24"
                onClick={() => {
                  handelClick(stages, index);
                }}
              >
                <CgPlayButtonR size={25} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default BuildingOne;
