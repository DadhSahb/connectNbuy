import { Route, Routes } from "react-router-dom";
import Navbar from "./components/userDashboard/Navbar";
import Buy from "./components/userDashboard/Buy";
import Buyitem from "./components/userDashboard/Buyitem";
import Buyedit from "./components/userDashboard/Buyedit";
import Account from "./components/userDashboard/Profile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Missing from "./components/userDashboard/Missing";
import Unautorized from "./components/userDashboard/Unautorized";
import Messenger from "./components/userDashboard/Chat";
import Home from "./components/userDashboard/Home";
import Sidebar from "./components/userDashboard/sidebar";

const notify = () => {
  toast("Welcome!");
};
function App() {
  return (
    <>
      <div>{notify}</div>
      <Routes>
        <Route>
          {/* Public routes */}
          {/* <Route path="/emailVerification/:id" element={<VerifyEmail />} /> */}
          <Route
            path="/"
            element={
              <Navbar>
                <Home />
              </Navbar>
            }
          />
          <Route
            path="Buy"
            element={
              <Navbar>
                <Buy />
              </Navbar>
            }
          />{" "}
          <Route
            path="Buyitem"
            element={
              <Navbar>
                <Buyitem />
              </Navbar>
            }
          />
          <Route
            path="Buyedit"
            element={
              <Navbar>
                <Buyedit />
              </Navbar>
            }
          />{" "}
          {/* <Route
              path="/Buy"
              element={
                <Navbar>
                  <Purchase />
                </Navbar>
              }
            /> */}
          <Route
            path="Profile"
            element={
              <Navbar>
                <Account />
              </Navbar>
            }
          />
          <Route
            path="Chats"
            element={
              <Navbar>
                <Messenger />
              </Navbar>
            }
          />{" "}
          <Route path="sidebar" element={<Sidebar />} />
        </Route>

        <Route path="*" element={<Missing />} />
        <Route path="Unauthorized" element={<Unautorized />} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
