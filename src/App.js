import "./App.css";
import Header from "./Header.js";
// import Sidebar from "./Sidebar.js";
// import Story from "./Story.js";
import Feed from "./Feed.js";
import Login from "./Login.js";
import { useStateValue } from "./StateProvider";
// import Widgets from "./Widgets.js";

function App() {
  const [{ user }] = useStateValue();
  return !user ? (
    <Login />
  ) : (
    <div className="app">
      <Header />

      <main>
        {/* <Sidebar /> */}
        <section id="app-body">
          {/* <Story /> */}
          <Feed />
        </section>

        {/* <Widgets /> */}
      </main>
    </div>
  );

  /** HEADER */
}

export default App;
