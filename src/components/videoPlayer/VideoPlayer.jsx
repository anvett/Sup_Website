import React from "react";

const VideoPlayer = ({ videoUrl, aspectRatio = "16:9" }) => {
  // Define la clase de relación de aspecto basada en el prop
  const aspectClass = aspectRatio === "16:9" ? "aspect-w-16 aspect-h-9" : "aspect-w-9 aspect-h-16";

  return (
    <div className="flex justify-center items-center ">
      <div className={`relative w-full sm:w-full md:w-full lg:w-3/4`}>
        <div className={`relative ${aspectClass}`}>
          <video
            src={videoUrl}
            className="absolute top-0 left-0 w-full h-full"
            controls
            preload="metadata"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
