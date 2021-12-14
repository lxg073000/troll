import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Story from "./Story.js";
import Feed from "./Feed.js";
import Modal from "./Modal.js";
import Login from "./Login.js";
import CreateTask from "./CreateTask.js";
import { useState } from "react";
// import Widgets from "./Widgets.js";

function App() {
  const [user, setUser] = useState(null);
  return !user ? (
    <Login setUser={setUser} />
  ) : (
    <div className="app">
      <Header />

      <main>
        <Sidebar />
        <Modal>
          <CreateTask />
        </Modal>
        <section>
          <Story />
          <Feed />
        </section>

        {/* <Widgets /> */}
      </main>
    </div>
  );

  /** HEADER */
}

export default App;
