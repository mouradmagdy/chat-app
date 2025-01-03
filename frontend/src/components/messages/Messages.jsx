import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef(null);

  useListenMessages(); // hook to listen for messages

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [0]);
  }, [messages]);
  return (
    <div className="px-4 bg-white flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages?.map((message, idx) => (
          <div
            key={message._id}
            ref={idx === messages.length - 1 ? lastMessageRef : null}
          >
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center pt-10 text-gray-600">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
