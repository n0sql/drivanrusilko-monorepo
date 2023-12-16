import React from "react";

function Gradient({
    conic,
    className,
    small,
  }: {
    small?: boolean;
    conic?: boolean;
    className?: string;
  }): JSX.Element {
    return (
      <span
        className={`absolute mix-blend-normal will-change-[filter] rounded-[100%] ${
          small ? "blur-[32px]" : "blur-[75px]"
        } ${conic ? "bg-glow-conic" : ""} ${className}`}
      />
    );
  }
  

export default function CreateProvider():JSX.Element{
    return(
        <div className="mt-24 relative">
      <div className="relative flex place-items-center">
          <div className=" flex items-center justify-center w-full">
          <p>create provider</p>
            <div className="absolute flex items-center justify-center w-64 h-64">
              <Gradient
                className="opacity-90 w-[120px] h-[120px]"
                conic
                small
              />
            </div>
          </div>
          <Gradient
            className="top-[-500px] opacity-[0.15] w-full h-full"
            conic
          />
        </div>
    </div>
    )
}

