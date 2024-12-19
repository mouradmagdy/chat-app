import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/Sidebar.jsx/Sidebar";
import useConversation from "../store/useConversation";

const Home = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  return (
    <div className="flex h-full w-full  md:h-[550px] rounded-lg overflow-hidden ">
      <div
        className={`h-full w-full  md:h-[550px] bg-white flex ${
          selectedConversation ? "hidden md:flex" : ""
        }`}
      >
        <Sidebar />
      </div>
      <div
        className={`h-full w-full md:h-[550px] bg-white flex ${
          !selectedConversation ? "hidden md:flex" : ""
        }`}
      >
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
