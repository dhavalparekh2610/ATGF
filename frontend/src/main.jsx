import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Routes/RootLayout.jsx";
import Posts, { loader as postsLoader } from "./routes/Posts.jsx";
import NewPost, { action as newPostAction } from "./routes/NewPost.jsx";
import PostDetails, {
  loader as postsDetailsLoader,
} from "./routes/PostDeatils.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            path: "/create_post",
            element: <NewPost />,
            action: newPostAction,
          },
          {
            path: "/:id",
            element: <PostDetails />,
            loader: postsDetailsLoader,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Posts />
    </RouterProvider>
  </StrictMode>
);
