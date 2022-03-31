import TopBar from "./components/TopBar";
import Home from "./pages/HomePage";
import SinglePost from "./pages/SinglePostPage";
import WritePostPage from "./pages/WritePostPage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <RegisterPage />} />
        <Route path="/login" element={user ? <Home /> : <LoginPage />} />
        <Route
          path="/write"
          element={user ? <WritePostPage /> : <RegisterPage />}
        />
        <Route
          path="/settings"
          element={user ? <SettingsPage /> : <RegisterPage />}
        />

        <Route path="/post/:postId" element={<SinglePost />} />
      </Routes>
    </Router>
  );
}

export default App;
