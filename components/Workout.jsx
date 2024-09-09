import React from "react";
import SectionWrapper from "@components/SectionWrapper";
import ExerciseCard from "@components/ExerciseCard";

const Workout = ({ workout }) => {
  return (
    <SectionWrapper
      id={"workout"}
      header="Welcome to"
      title={["The", "DANGER", "Zone"]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, exerciseIndex) => {
          return (
            <ExerciseCard
              key={exerciseIndex}
              exerciseIndex={exerciseIndex}
              exercise={exercise}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Workout;
