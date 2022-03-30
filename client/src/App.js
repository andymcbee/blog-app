import TopBar from "./components/TopBar";
import Home from "./pages/HomePage";
import SinglePost from "./pages/SinglePostPage";
import WritePostPage from "./pages/WritePostPage";

function App() {
  return (
    <div className="App">
      <TopBar />
      <WritePostPage />
    </div>
  );
}

export default App;
