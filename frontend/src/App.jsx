import "./App.css";
import MessageContainer from "./components/messages/MessageContainer";
import Sidebar from "./components/Sidebar.jsx/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* // <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0"> */}
      {/* <Signup /> */}
      {/* <Sidebar />
      <MessageContainer /> */}
      <Home />
    </div>
  );
}

export default App;
