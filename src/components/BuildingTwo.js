import { BsCircle } from "react-icons/bs";
import { CgPlayButtonR } from "react-icons/cg";
const BuildingTwo = ({ currentStageBTwo, setCurrentStageBTwo, stageToGoBTwo, setStageToGoBTwo, setDoorBTwo }) => {
  const stages = [
    { number: 10, name: "étage 10" },

    { number: 9, name: "étage 9" },
    { number: 8, name: "étage 8" },
    { number: 6, name: "étage 6" },
    { number: 4, name: "étage 4" },
    { number: 2, name: "étage 2" },
    { number: 0, name: "R.C" },
    { number: -1, name: "-1" },
    { number: -2, name: "-2" },
    { number: -3, name: "-3" },
    { number: -4, name: "-4" },
    { number: -5, name: "-5" },
  ];

  const close = (stage, door) => {
    setStageToGoBTwo(stage);
    setTimeout(() => {
      setDoorBTwo(door);
    }, 1000);
  };

  const open = (stage, door) => {
    setTimeout(() => {
      setCurrentStageBTwo(stage);
      setDoorBTwo(door);
    }, 3000);
  };

  const handelClick = (stages, i) => {
    if (stages[i].number === 10) {
      close(10, "closed");
      open(10, "open");
    } else if (stages[i].number === 9) {
      close(9, "closed");
      open(9, "open");
    } else if (stages[i].number === 8) {
      close(8, "closed");
      open(8, "open");
    } else if (stages[i].number === 6) {
      close(6, "closed");
      open(6, "open");
    } else if (stages[i].number === 4) {
      close(4, "closed");
      open(4, "open");
    } else if (stages[i].number === 2) {
      close(2, "closed");
      open(2, "open");
    } else if (stages[i].number === 0) {
      close(0, "closed");
      open(0, "open");
    } else if (stages[i].number === -1) {
      close(-1, "closed");
      open(-1, "open");
    } else if (stages[i].number === -2) {
      close(-2, "closed");
      open(-2, "open");
    } else if (stages[i].number === -3) {
      close(-3, "closed");
      open(-3, "open");
    } else if (stages[i].number === -4) {
      close(-4, "closed");
      open(-4, "open");
    } else if (stages[i].number === -5) {
      close(-5, "closed");
      open(-5, "open");
    }
  };
  return (
    <div className="flex flex-col">
      <h2 className="text-center">Immeuble n°2</h2>

      <div>
        {stages.map((stage, index) => {
          return (
            <div className="flex  justify-center items-center border-4">
              <div className=" w-24 py-6">{stage.name}</div>
              <div className=" w-24 py-6 border-x-2 flex justify-center">
                {stages[index].number === 10 && (
                  <BsCircle
                    size={25}
                    className={` rounded-full ${currentStageBTwo === 10 ? "bg-green-500 text-green-700" : stageToGoBTwo === 10 ? "bg-orange-500" : ""}`}
                  />
                )}
                {stages[index].number === 9 && (
                  <BsCircle
                    size={25}
                    className={` rounded-full ${currentStageBTwo === 9 ? "bg-green-500 text-green-700" : stageToGoBTwo === 9 ? "bg-orange-500" : ""}`}
                  />
                )}
                {stages[index].number === 8 && (
                  <BsCircle
                    size={25}
                    className={` rounded-full ${currentStageBTwo === 8 ? "bg-green-500 text-green-700" : stageToGoBTwo === 8 ? "bg-orange-500" : ""}`}
                  />
                )}

                {stages[index].number === 6 && (
                  <BsCircle
                    size={25}
                    className={` rounded-full ${currentStageBTwo === 6 ? "bg-green-500 text-green-700" : stageToGoBTwo === 6 ? "bg-orange-500" : ""}`}
                  />
                )}

                {stages[index].number === 4 && (
                  <BsCircle
                    size={25}
                    className={` rounded-full ${currentStageBTwo === 4 ? "bg-green-500 text-green-700" : stageToGoBTwo === 4 ? "bg-orange-500" : ""}`}
                  />
                )}

                {stages[index].number === 2 && (
                  <BsCircle
                    size={25}
                    className={` rounded-full ${currentStageBTwo === 2 ? "bg-green-500 text-green-700" : stageToGoBTwo === 2 ? "bg-orange-500" : ""}`}
                  />
                )}

                {stages[index].number === 0 && (
                  <BsCircle
                    size={25}
                    className={` rounded-full ${currentStageBTwo === 0 ? "bg-green-500 text-green-700" : stageToGoBTwo === 0 ? "bg-orange-500" : ""}`}
                  />
                )}

                {stages[index].number === -1 && (
                  <BsCircle
                    size={25}
                    className={` rounded-full ${currentStageBTwo === -1 ? "bg-green-500 text-green-700" : stageToGoBTwo === -1 ? "bg-orange-500" : ""}`}
                  />
                )}

                {stages[index].number === -2 && (
                  <BsCircle
                    size={25}
                    className={` rounded-full ${currentStageBTwo === -2 ? "bg-green-500 text-green-700" : stageToGoBTwo === -2 ? "bg-orange-500" : ""}`}
                  />
                )}
                {stages[index].number === -3 && (
                  <BsCircle
                    size={25}
                    className={` rounded-full ${currentStageBTwo === -3 ? "bg-green-500 text-green-700" : stageToGoBTwo === -3 ? "bg-orange-500" : ""}`}
                  />
                )}
                {stages[index].number === -4 && (
                  <BsCircle
                    size={25}
                    className={` rounded-full ${currentStageBTwo === -4 ? "bg-green-500 text-green-700" : stageToGoBTwo === -4 ? "bg-orange-500" : ""}`}
                  />
                )}

                {stages[index].number === -5 && (
                  <BsCircle
                    size={25}
                    className={` rounded-full ${currentStageBTwo === -5 ? "bg-green-500 text-green-700" : stageToGoBTwo === -5 ? "bg-orange-500" : ""}`}
                  />
                )}
              </div>
              <div
                className="py-6 flex justify-center cursor-pointer hover:opacity-60 w-24"
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
export default BuildingTwo;
