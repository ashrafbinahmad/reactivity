import React from "react";
import { getAllVideos, getThumbUrlOf, Video } from "../sources/helper";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden shadow-inner cursor-pointer basis-56" onClick={()=> navigate(`/videos/${video.youtubeId}`)}>
      <img
        className="rounded-xl"
        src={getThumbUrlOf(video.youtubeId)}
        alt={video.title}
      />
      <p>{video.title}</p>
    </div>
  );
};
