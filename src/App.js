import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Story from "./Story.js";
import Feed from "./Feed.js";
import Modal from "./Modal.js";
import CreateTask from "./CreateTask.js";
// import Widgets from "./Widgets.js";

function App() {
  return (
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
