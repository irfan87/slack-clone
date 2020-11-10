import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import "./Chat.css";

import db from "../../firebaseConfig";
import Message from "../Message/Message";

const Chat = () => {
	const { roomId } = useParams();

	const [roomDetails, setRoomDetails] = useState(null);
	const [roomMessages, setRoomMessages] = useState([]);

	useEffect(() => {
		if (roomId) {
			db.collection("rooms")
				.doc(roomId)
				.onSnapshot((snapshot) => {
					setRoomDetails(snapshot.data());
				});
		}
		db.collection("rooms")
			.doc(roomId)
			.collection("messages")
			.orderBy("timeStamp", "asc")
			.onSnapshot((snapshot) =>
				setRoomMessages(snapshot.docs.map((doc) => doc.data()))
			);
	}, [roomId]);

	console.log(roomMessages);

	return (
		<div className="chat">
			<div className="chat__header">
				<div className="chat__headerLeft">
					<h4 className="chat__channelName">
						<strong># {roomDetails?.name}</strong>
						<StarBorderOutlinedIcon />
					</h4>
				</div>
				<div className="chat__headerRight">
					<p>
						<InfoOutlinedIcon />
						Details
					</p>
				</div>
			</div>
			<div className="chat__messages">
				{roomMessages.map(({ message, timeStamp, user, userImage }) => (
					<Message
						message={message}
						timeStamp={timeStamp}
						user={user}
						userImage={userImage}
						key={message}
					/>
				))}
			</div>
		</div>
	);
};

export default Chat;
