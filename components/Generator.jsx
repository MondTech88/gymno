"use client";
import SectionWrapper from "@components/SectionWrapper";
import { SCHEMES, WORKOUTS } from "@utils/swoldier";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "@components/Button";

const Header = (props) => {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 justify-center">
        <p className="font-semibold text-slate-400  text-3xl sm:text-4xl md:text-5xl">
          {index}
        </p>
        <h4 className="text-xl sm:text-3xl md:text-4xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
};

const Generator = ({
  poison,
  setPoison,
  muscles,
  setMuscles,
  goal,
  setGoal,
  updateWorkout,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);
  const updateMuscles = (muscleGroup) => {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((value) => value != muscleGroup));
      return;
    }

    if (muscles.length > 2) return;
    if (poison != "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setShowModal(false);
    }
  };

  return (
    <SectionWrapper
      id={"generate"}
      header="generate your workout"
      title={["It's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick Your Poison"}
        description={"Select the workout you wish to endure"}
      />{" "}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setMuscles([]);
                setPoison(type);
              }}
              className={
                "bg-slate-950 border  py-3 rounded-lg hover:border-blue-600  duration-200 btnShadowHover " +
                (type === poison
                  ? "border-blue-600 btnShadow "
                  : " border-blue-400")
              }
              key={typeIndex}
            >
              <p className="capitalize"> {type.replace("_", " ")} </p>
            </button>
          );
        })}
      </div>
      <Header
        index={"02"}
        title={"Lock on Targets"}
        description={"Select the muscles judged for annihilation."}
      />{" "}
      <div className="bg-slate-950  border border-solid border-blue-400 rounded-lg  flex flex-col">
        <button
          onClick={toggleModal}
          className="relative flex items-center justify-center p-3 capitalize"
        >
          <p>
            {muscles.length === 0 ? "Select muscle groups" : muscles.join(" ")}
          </p>
          <FontAwesomeIcon
            icon={showModal ? faCaretUp : faCaretDown}
            className="absolute right-3 "
          />
        </button>
        {showModal && (
          <div>
            <div className="flex flex-col px-3 py-3">
              {(poison === "individual"
                ? WORKOUTS[poison]
                : Object.keys(WORKOUTS[poison])
              ).map((muscleGroup, muscleGroupIndex) => (
                <button
                  key={muscleGroupIndex}
                  onClick={() => updateMuscles(muscleGroup)}
                  className={
                    "hover:text-blue-400 duration-200 bg-white bg-opacity-[1%] m-2 py-2 hover:bg-opacity-[4%] rounded-xl" +
                    (muscles.includes(muscleGroup)
                      ? " bg-opacity-[4%] text-blue-400 "
                      : "")
                  }
                >
                  <p className="uppercase py-[3px]">
                    {" "}
                    {muscleGroup.replace("_", " ")}{" "}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select Your Ultimate Objective"}
      />{" "}
      <div className="grid grid-cols-2 sm:grid-cols-3 justify-center   gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => setGoal(scheme)}
              className={
                "bg-slate-950 border  py-3 rounded-lg hover:border-blue-600  duration-200 btnShadowHover " +
                (scheme === goal
                  ? "border-blue-600 btnShadow "
                  : " border-blue-400")
              }
              key={schemeIndex}
            >
              <p className="capitalize"> {scheme.replace("_", " ")} </p>
            </button>
          );
        })}
      </div>
      <Button onPressed={updateWorkout} text={"Formulate"} />
    </SectionWrapper>
  );
};

export default Generator;
