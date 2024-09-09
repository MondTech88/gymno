import Button from "@components/Button";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center gap-10 justify-center text-center max-w-[800px] w-full mx-auto px-4">
      {" "}
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          swole<span className="text-blue-400">normous</span>
        </h1>{" "}
      </div>
      <p className="text-sm md:text-base font-light">
        I hereby acknowledgement that i may become{" "}
        <span className="text-blue-400 font-medium">
          unbelievably swolenormous
        </span>{" "}
        and accept all risks of becoming the local{" "}
        <span className="text-blue-400 font-medium"> mass montrosity</span>,
        afflicted with severe body dismorphia, unable to fite through doors
      </p>
      <Button
        onPressed={() => (window.location.href = "#generate")}
        text={"Accept and Begin"}
      />
    </div>
  );
};

export default Hero;
