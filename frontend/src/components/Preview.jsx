import React, { useContext } from "react";
import { LuClock } from "react-icons/lu";
import { CheckCircle } from "lucide-react";
import { imageOptions } from "../assets/assets";
import { SessionContext } from "../context/SessionContext";



const Preview = () => {
  const {
    sessionTitle,
    description,
    selectedImage,
  } = useContext(SessionContext);

  const imageUrl = imageOptions[selectedImage] || "";

  return (
    <div className="rounded-2xl shadow-md overflow-hidden bg-white">
      {/* Image section */}
      <div className="relative">
        <img
          src={imageUrl}
          alt="Session"
          className="w-full h-40 object-cover"
        />
      </div>

      {/* Content section */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-sm font-semibold break-words whitespace-pre-wrap">
          {sessionTitle || "Event Title"}
        </h2>

        <p className="text-xs text-gray-600 break-words whitespace-pre-wrap">
          {description || "Event description goes here."}
        </p>

        <hr className="my-2" />


      </div>
    </div>
  );
};

export default Preview;
