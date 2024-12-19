import { useEffect } from "react";
import useConversation from "../../store/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";
import { FaArrowLeft } from "react-icons/fa6";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return selectedConversation ? (
    <div className="w-full pt-2 md:min-w-[450px] flex flex-col">
      <>
        {/* Header */}
        <div className="bg-white flex items-center gap-5 px-4 py-2">
          <FaArrowLeft
            size={24}
            className="text-black cursor-pointer"
            onClick={() => setSelectedConversation(null)}
          />
          <div>
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-800 font-semibold">
              {selectedConversation.fullName}
            </span>
          </div>
        </div>
        <Messages />
        <MessageInput />
      </>
    </div>
  ) : (
    <div className="md:min-w-[450px] flex flex-col bg-white">
      <NoChatSelected />
    </div>
  );
};

export default MessageContainer;
