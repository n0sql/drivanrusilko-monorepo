import React from "react";

const PatientConversation = ({ goToStep }: any) => {
  return (
    <div className="">
      <h3 className="mb-[2.125rem]">
        Heres your first message to your clinician Please Introduce Yourself and tell them what you
        would like to work on.
      </h3>
      <div className="relative mb-3 " data-te-input-wrapper-init>
        <textarea
          className="peer block min-h-[auto] w-full  border-0 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleFormControlTextarea1"
          rows={6}
          placeholder="Your message"
        ></textarea>
      </div>
    </div>
  );
};

export default PatientConversation;
