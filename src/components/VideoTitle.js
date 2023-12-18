import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl text-white font-bold">{title}</h1>
      <p className="py-6 text-lg text-white w-1/4">{overview}</p>
      <div className="flex">
        <button className="flex bg-gray-500 text-black p-4 px-14 text-xl bg-opacity-50 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="36"
            viewBox="0 0 48 48"
            id="play"
          >
            <path d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"></path>
          </svg>{" "}
          Play
        </button>
        <button className="flex mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="36"
            viewBox="0 0 16 16"
            id="info"
          >
            <g fill="#fff" data-name="Layer 2">
              <path d="M8 2a6 6 0 1 0 6 6 6 6 0 0 0-6-6Zm0 11a5 5 0 1 1 5-5 5 5 0 0 1-5 5Z"></path>
              <path d="M8 6.85a.5.5 0 0 0-.5.5v3.4a.5.5 0 0 0 1 0v-3.4a.5.5 0 0 0-.5-.5zM8 4.8a.53.53 0 0 0-.51.52v.08a.47.47 0 0 0 .51.47.52.52 0 0 0 .5-.5v-.12A.45.45 0 0 0 8 4.8z"></path>
            </g>
          </svg>{" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
