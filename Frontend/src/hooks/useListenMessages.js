import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import { useMessagesContext } from "../context/MessagesContext";
import pop_sound from "../assets/sounds/pop-sound.mp3"

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages } = useMessagesContext();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {	
			const sound=new Audio(pop_sound)
			sound.play()
			setMessages([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};
export default useListenMessages;