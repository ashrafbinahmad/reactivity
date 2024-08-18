import "./App.css";
import "swiper/css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import YoutubeId from "./pages/videos/[YoutubeId]";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: () => <div>About</div>,
  },
  {
    path: "/videos/:id",
    Component: YoutubeId,
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<div>Not found</div>}  />;
}

export default App;
