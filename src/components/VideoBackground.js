import React from 'react'

const VideoBackground = () => {
  return (
<div className="absolute inset-0 overflow-hidden">
  <iframe
    width="560"
    height="315"
    className="w-full h-full"
    src="https://www.youtube.com/embed/-wWq-PXG32c?si=vwwzGx_2uE0azVlr&autoplay=1"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>
  )
}

export default VideoBackground