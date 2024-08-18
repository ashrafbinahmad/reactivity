import videos from "./videos.json";

export interface VideosJsonRoot {
  apiKey: string;
  steps: Steps;
  videos: Video[];
}

export interface Steps {
  advanced: Step[];
  HTML: Step[];
}

export interface Step {
  youtubeId: string;
  title: string;
}

export interface Video {
  youtubeId: string;
  title: string;
  tags: string[];
}

function getAllStepsForAdvanced() {
  return videos.steps.advanced;
}
function getAllStepsFor(filter: keyof Steps) {
  return videos.steps?.[filter];
}
function getAllVideos() {
  return videos.videos;
}
function getAllVideosByTag(tag: string) {
  return videos.videos.filter((video, index) => {
    return video.tags.includes(tag);
  });
}
function getThumbUrlOf(youtubeId: string) {
  return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
}

export {
  getAllStepsForAdvanced,
  getAllStepsFor,
  getAllVideos,
  getAllVideosByTag,
  getThumbUrlOf,
};
