import { useEffect } from "react";
import useConversation from "../../store/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return selectedConversation ? (
    <div className="w-full md:min-w-[450px] flex flex-col">
      <>
        {/* Header */}
        <div className="bg-white px-4 py-2">
          <span className="label-text">To:</span>{" "}
          <span className="text-gray-800 font-semibold">
            {selectedConversation.fullName}
          </span>
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
