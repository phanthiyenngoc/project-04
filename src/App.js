import "./acessts/style/reset.css";
import "./acessts/style/common.css";
import LayoutDefault from "./layouts/index";
import HomePageIndex from "./pages/home/index";

function App() {
  return (
    <div className="app">
      <LayoutDefault>
        <HomePageIndex />
      </LayoutDefault>
    </div>
  );
}

export default App;
