import React from "react";
import { getAllVideos, getThumbUrlOf, Video } from "../sources/helper";

const videos = getAllVideos();

export default function VideosList() {
  return (
    <div className="p-5 text-white bg-black">
      <div className="container grid grid-cols-5 gap-3 m-auto">
        {videos.map((video, index) => {
          return <VideoThumb video={video} />;
        })}
      </div>
    </div>
  );
}

interface VideoThumbPropsType {
  video: Video;
}

export const VideoThumb = ({ video }: VideoThumbPropsType) => {
  return (
    <div className="overflow-hidden shadow-inner basis-56">
      <img
        className="rounded-xl"
        src={getThumbUrlOf(video.youtubeId)}
        alt={video.title}
      />
      <p>{video.title}</p>
    </div>
  );
};
