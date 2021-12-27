import "./Dashboard.css";
import Sidebar from "./Sidebar.js";
// import Story from "./Story.js";
import Feed from "./Feed.js";
import Login from "./Login.js";
import { useStateValue } from "./StateProvider";
// import Widgets from "./Widgets.js";

function Dashboard() {
  const [{ user }] = useStateValue();
  return !user ? (
    <Login />
  ) : (
    <div className="dashboard">
      <main>
        <Sidebar />
        <section id="dashboard-body">
          {/* <Story /> */}
          <Feed />
        </section>

        {/* <Widgets /> */}
      </main>
    </div>
  );

  /** HEADER */
}

export default Dashboard;
