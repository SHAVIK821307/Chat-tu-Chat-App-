import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import { useMessagesContext } from "../context/MessagesContext";


const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages } = useMessagesContext();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {	
			setMessages([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};
export default useListenMessages;