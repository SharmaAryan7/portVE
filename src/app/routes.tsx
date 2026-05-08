import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Portfolio } from "./components/Portfolio";
import { Blog } from "./components/Blog";
import { SingleBlog } from "./components/SingleBlog";
import { Contact } from "./components/Contact";
import { PrivacyPolicy } from "./components/PrivacyPolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "portfolio", Component: Portfolio },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: SingleBlog },
      { path: "contact", Component: Contact },
      { path: "privacy-policy", Component: PrivacyPolicy },
    ],
  },
]);
