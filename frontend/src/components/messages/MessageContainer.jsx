import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";

const MessageContainer = () => {
  const chatSelected = false;
  return chatSelected ? (
    <div className="md:min-w-[450px] flex flex-col">
      <>
        {/* Header */}
        <div className="bg-slate-500 px-4 py-2 mb-2">
          <span className="label-text">To:</span>{" "}
          <span className="text-gray-900 font-bold">John doe</span>
        </div>
        <Messages />
        <MessageInput />
      </>
    </div>
  ) : (
    <NoChatSelected />
  );
};

export default MessageContainer;