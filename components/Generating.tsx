import Image from "next/image";
import React from "react";

const Generating = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <Image
        className="w-5 h-5 mr-4"
        src="/assets/loading.png"
        alt="Loading"
        width={5}
        height={5}
      />
      AI is generating
    </div>
  );
};

export default Generating;
