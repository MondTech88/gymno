"use client";
import { useState } from "react";

const ExerciseCard = ({ exercise, exerciseIndex }) => {
  const [setsCompleted, setSetsCompleted] = useState(0);

  const handleSetsCompleted = () => setSetsCompleted((prev) => (prev + 1) % 6);
  return (
    <div className="p-4 rounded-lg flex-col gap-4  bg-slate-950 sm:flex-wrap">
      <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4">
        <h4 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400">
          0{exerciseIndex + 1}
        </h4>{" "}
        <h2 className="capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center">
          {exercise.name.replaceAll("_", " ")}
        </h2>
        <p className="capitalize text-sm text-slate-400">{exercise.type}</p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-slate-400 text-sm">Muscle Groups</h3>
        <p className="capitalize"> {exercise.muscles.join(" & ")} </p>
      </div>
      <div className="flex flex-col  bg-slate-950  gap-2 rounded border-[1.5px] border-solid border-slate-900 w-full p-2 text-slate-500 my-3">
        {exercise.description.split("___").map((value, index) => {
          return (
            <div>
              {index === 0 && (
                <p className="text-lg sm:text-xl text-white pb-1">
                  Description
                </p>
              )}
              <p className="text-sm">{value}</p>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2">
        {["reps", "rest", "tempo"].map((info) => {
          return (
            <div
              key={info}
              className="flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-900 w-full"
            >
              <h3 className="capitalize text-slate-400 text-sm">
                {info === "reps" ? `${exercise.unit}` : info}
              </h3>
              <p className="font-medium">{exercise[info]}</p>
            </div>
          );
        })}
      </div>
      <button
        onClick={handleSetsCompleted}
        className="flex flex-col rounded p-2 border-[1.5px] duration-200 border-solid border-blue-900 hover:border-blue-600 w-full"
      >
        <h3 className="text-slate-400 text-sm capitalize">Sets completed</h3>
        <p className="font-medium"> {setsCompleted} / 5 </p>
      </button>
    </div>
  );
};

export default ExerciseCard;
