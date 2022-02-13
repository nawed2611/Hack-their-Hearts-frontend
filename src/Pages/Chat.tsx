import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";
import "../Styles/chat-style.scss";
import { Formik, FormikHelpers } from "formik";
import useLocalStorage from "../useLocalStorage";
import io from "socket.io-client";

export default function Chat() {
  let [socket, setSocket] = useState(null);

  let _socket_ = io("https://hacktheirhearts-chat.epiccodewizard2.repl.co");

  useEffect(() => {
    setSocket(_socket_);
  }, [_socket_]);

  function putMessage(messageData) {}

  function sendMessage(messageData) {
    socket.emit("message", messageData);
  }

  _socket_.on("connect", () => {
    console.log("connected");
  });

  _socket_.on("message", (data) => {
    putMessage(data);
  });

  const { search } = useLocation();
  let auth = getAuth();
  let query = new URLSearchParams(search);
  let _phoneNumber = query.get("alt_phone") || "4081121235";
  let [messages, setMessages] = useState<Array<any>>([]);
  let [phoneNumber, setPhoneNumber] = useState<string>(_phoneNumber);
  let { createMessage, newMessages } = useLocalStorage();

  return (
    <div className="chat">
      <div className="route">
        <Link
          className="route"
          to="/chat"
          style={{
            padding: "5px"
          }}
        >
          <h1>Chat</h1>
        </Link>{" "}
        <Link
          className="route"
          to={`/datemaker?alt_phone=${phoneNumber}`}
          style={{
            padding: "5px"
          }}
        >
          <h1>Date Maker</h1>
        </Link>{" "}
        <Link
          className="route"
          to="/links"
          style={{
            padding: "5px"
          }}
        >
          <h1>External Links</h1>
        </Link>
      </div>

      <div className="chat-div">
        <h2>Yay! You're chatting with- {phoneNumber}</h2>
        <div className="text-div">
          <div className="chat-history"></div>
          <Formik
            initialValues={{
              message: ""
            }}
            onSubmit={async (
              { message },
              helpers: FormikHelpers<{ message: string }>
            ) => {
              await createMessage(
                message,
                Number(phoneNumber),
                Number(getAuth().currentUser.phoneNumber)
              );
            }}
          >
            {({ handleChange, handleSubmit, values }) => (
              <form className="chat-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Write your message here..."
                  onChange={handleChange}
                  value={values.message}
                />
                <button onClick={sendMessage} type="submit">
                  Send
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
