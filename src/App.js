import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Story from "./Story.js";
import Widgets from "./Widgets.js";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Sidebar />
        <Story />
        <Widgets />
      </main>
    </div>
  );
  /** HEADER */
}

export default App;
