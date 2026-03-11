import React, { useContext } from "react";
import { Sparkles } from "lucide-react";
import { SessionContext } from "../context/SessionContext";

const SessionDetails = () => {


  const {
    sessionTitle,
    setSessionTitle,
    description,
    setDescription,
  } = useContext(SessionContext);

  return (
    // Card container with rounded edges and shadow
    <div className="rounded-2xl shadow-lg overflow-hidden  w-full ">
      {/* Header section */}
      <div className="mb-3 p-4">
        <div className="flex gap-2 items-center">
          {/* Icon badge */}
          <div className="w-9 h-9 bg-purple-100 rounded-xl flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-purple-600" />
          </div>
          <span className="font-medium text-xs">Event Details</span>
        </div>
        <span className="text-xs text-black/60">
          Provide the essential information about your event
        </span>
      </div>

      {/* Form section */}
      <div className="bg-white p-4 flex flex-col gap-4">
        {/* Title input */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium">Event Title</label>
          <input
            type="text"
            value={sessionTitle}
            onChange={(e) => setSessionTitle(e.target.value)}
            placeholder="e.g., Morning Yoga Flow"
            className="bg-gray-100 text-xs p-2 rounded border-2 border-transparent focus:outline-none focus:border-gray-400"
          />
        </div>

        {/* Description input */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe what participants can expect"
            className="bg-gray-100 text-xs p-2 rounded border-2 border-transparent focus:outline-none focus:border-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default SessionDetails;
