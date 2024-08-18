import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import VideosList from "../../components/VideosList";

export default function YoutubeId() {
  const youtubeId = useParams().id;
  return (
    <Layout >
      <div>
        <iframe
          className="m-auto w-full h-[70vh]"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${youtubeId}?si=b9Q3hFO99J41cMLO`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          
        ></iframe>
      </div>
      <VideosList />
    </Layout>
  );
}
