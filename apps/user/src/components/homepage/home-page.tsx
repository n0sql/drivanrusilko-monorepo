import React from "react";
import Image from "next/image";
import { useSiteWideContext } from "../../context";
import { Card } from "ui";

// const menus = ["About Us", "How it Works", "Our Medical Experts", "Reviews"];
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



const LINKS = [
  {
    title: "Docs",
    href: "https://turbo.build/repo/docs",
    description: "Find in-depth information about Turborepo features and API.",
  },
  {
    title: "Learn",
    href: "https://turbo.build/repo/docs/handbook",
    description: "Learn more about monorepos with our handbook.",
  },
  {
    title: "Templates",
    href: "https://turbo.build/repo/docs/getting-started/from-example",
    description: "Choose from over 15 examples and deploy with a single click.",
  },
  {
    title: "Deploy",
    href: "https://vercel.com/new",
    description:
      " Instantly deploy your Turborepo to a shareable URL with Vercel.",
  },
];
export default function HomePage():JSX.Element{
const {toggleTreatmentModal} = useSiteWideContext()

    return(
        <div className="mt-24 relative">
           
            
         
      <div className="flex z-50 relative  lg:flex-row flex-col items-center lg:items-start justify-between">
        <div className="flex flex-col mb-12">
          <h1 className="text-primary text-4xl ">Personalized, doctor-backed</h1>
          <h1 className="text-[#8f8f8f] text-4xl">treatment plans</h1>
        </div>
        

        <div className="flex flex-col text-gray-200 gap-5 ">
          <h1 className="text-[#8f8f8f] text-lg">
            Finding what works can be hard. Our online process and <br /> medical experts make it
            simple.
          </h1>

          <a
          type="button"
           onClick= {()=>{toggleTreatmentModal();}}
            className="px-4 py-2 bg-[#222030] rounded-full cursor-pointer  lg:w-48  text-center w-full mb-6"
          >
            Find my treatment
          </a>
        </div>
      </div>
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed px-4 left-0 top-0 flex w-full justify-center border-b bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
          examples/with-tailwind -&nbsp;
          <code className="font-mono font-bold">docs</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"
            rel="noopener noreferrer"
            target="_blank"
          >
            By{" "}
            <Image
              alt="Vercel Logo"
              className="invert"
              height={24}
              priority
              src="/vercel.svg"
              width={100}
            />
          </a>
        </div>
      </div> */}
     <div className=" grid text-center lg:max-w-5xl  lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      
      {LINKS.map(({ title, href, description }) => (
        < Card href={href} key={title} title={title}>
          {description}
        </ Card>
      ))}
    
    </div>
      <div className="relative flex place-items-center ">
        <div className="font-sans w-auto pb-16 pt-[48px] md:pb-24 lg:pb-32 md:pt-16 lg:pt-20 flex justify-between gap-8 items-center flex-col relative z-0">
          <div className="z-50 flex items-center justify-center w-full">
            <div className="absolute min-w-[614px] min-h-[614px]">
              <Image
                alt="Turborepo"
                height={614}
                src="circles.svg"
                width={614}
              />
            </div>
  
            
          </div>
       
   
        </div>
      </div>
 
    </div>
    )
}