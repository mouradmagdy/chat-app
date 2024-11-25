import "./App.css";
import MessageContainer from "./components/messages/MessageContainer";
import Sidebar from "./components/Sidebar.jsx/Sidebar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* <Signup /> */}
      <Sidebar />
      <MessageContainer />
    </div>
  );
}

export default App;
