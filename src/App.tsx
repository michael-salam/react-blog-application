import { BrowserRouter, Route, Routes } from "react-router";

import "./App.css";

import Articles from "./pages/articles/Articles";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import ArticleDetails from "./pages/articles/ArticleDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<ArticleDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
