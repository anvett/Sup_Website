import React from 'react';

const VideoPlayer2 = ({ videoUrl }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative w-full sm:w-3/4 lg:w-3/4">
        {/* Ajusta la altura en pantallas pequeñas */}
        <div className="relative h-48 sm:h-64 md:h-80 lg:aspect-w-16 lg:aspect-h-9">
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

export default VideoPlayer2;

