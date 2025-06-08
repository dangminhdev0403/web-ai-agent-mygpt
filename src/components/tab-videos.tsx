"use client";

import { useState } from "react";

interface TabVideoProps {
  tabs: {
    label: string;
    videoId: string;
  }[];
}

const TabVideo = ({ tabs }: TabVideoProps) => {
  const [activeVideo, setActiveVideo] = useState<string>(tabs[0].videoId);
  return (
    <>
      {" "}
      <div className="lg:flex ">
        {tabs.map((tab) => (
          <button
            key={tab.videoId}
            className={`px-5 py-3 bg-[#e1ecf5] font-bold ${
              activeVideo === tab.videoId
                ? "text-[#61ce70] border-b-0 rounded rounded-tl-none rounded-bl-none"
                : "text-[#6ec1e4]"
            } text-lg   cursor-pointer transition border border-[#cae2ec] block w-full lg:w-auto `}
            onClick={() => setActiveVideo(tab.videoId)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Video demo */}
      <div className="w-full aspect-video rounded overflow-hidden shadow-lg rounded-tl-none bg-[#e1ecf5] p-4 border-1 border-[#c5e3ef]  ">
        {(() => {
          const currentTab =
            tabs.find((tab) => tab.videoId === activeVideo) || tabs[0];
          return (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${currentTab.videoId}`}
              title="GenAI Chatbot Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          );
        })()}
      </div>
    </>
  );
};

export default TabVideo;
