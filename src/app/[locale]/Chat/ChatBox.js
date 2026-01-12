"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  TextField,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SendIcon from "@mui/icons-material/Send";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PhotoIcon from "@mui/icons-material/Photo";
import useGetChat from "@/hooks/chat-query/user/useGetChat";
import { useChatDataStore } from "@/store/user-chat-data-store";
import useRegisterChat from "@/hooks/chat-query/user/useRegisterChat";
import useSendMessage from "@/hooks/chat-query/user/useSendMessage";
import useCloseChat from "@/hooks/chat-query/useCloseChat";
import useUserStore from "@/store/userStore";

const ChatBox = ({ onCloseChat }) => {
  const [inputValue, setInputValue] = useState("");
  // DATA that create chat
  const { loggedData, chat_room_id } = useChatDataStore();
  const { user } = useUserStore();
  // get chat if there is chat_room_id
  const { data } = useGetChat(user ? user?.email : loggedData?.email);

  const { mutate: registerChat, isPending: isPendingRegisterChat } =
    useRegisterChat();

  const { mutate: sendMessage, isPending: isPendingSendMess } =
    useSendMessage();

  const { mutate: closeChat, isPending: isPendingClose } = useCloseChat();

  const handleMutation = (onSuccess) => {
    return {
      onSuccess: (res) => {
        onSuccess(res);
      },
      onError: (err) => {
        console.error(err);
      },
    };
  };

  console.log("messages", data);
  // function to send message

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;
    console.log(user?.email, loggedData?.email);
    if (chat_room_id === null) {
      registerChat(
        {
          email: user ? user?.email : loggedData?.email,
          name: user ? user?.name : loggedData?.name,
          message: inputValue,
        },
        handleMutation((res) => {
          console.log(res);
          setInputValue("");
        })
      );
    } else {
      sendMessage(
        {
          chat_id: chat_room_id,
          message: inputValue,
        },
        handleMutation((res) => {
          console.log(res);
          setInputValue("");
        })
      );
    }
  };

  return (
    <Paper
      elevation={3}
      style={{
        position: "fixed",
        bottom: 80,
        right: 20,
        width: 300,
        height: 400,
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        zIndex: 1000,
        // boxShadow: '10px 10px 10px rgba(0,0,0,0.5)',
        boxShadow: "0 0 20px rgba(0,0,0,0.5)",
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ marginRight: 1 }}>
            <AccountCircleIcon
              sx={{ fontSize: 45, color: "#AAAAAA", marginRight: "0px" }}
            />
          </Box>
          <Typography
            variant="body1"
            sx={{ fontSize: "15px", color: "#575756" }}
          >
            QTap
          </Typography>
        </Box>

        <IconButton onClick={onCloseChat}>
          <CloseIcon sx={{ fontSize: "18px", color: "#575756" }} />
        </IconButton>
      </Box>
      <Divider sx={{ backgroundColor: "#E57C00", marginBottom: "20px" }} />

      {/* display messages */}

      <Box style={{ flex: 1, overflowY: "auto", marginBottom: "10px" }}>
        {Array.isArray(data?.chat?.message_chat_support) &&
          data?.chat?.message_chat_support?.map((msg, index) => {
            console.log(msg);
            return (
              <Box
                key={index}
                style={{
                  display: "flex",
                  justifyContent:
                    msg.type === "user" ? "flex-end" : "flex-start", // Align user messages to the right
                  width: "100%", // Ensure the container takes full width
                }}
              >
                <Box
                  style={{
                    backgroundColor:
                      msg.type === "user" ? "#E57C00" : "#F1F1F1",
                    padding: "6px 15px",
                    borderRadius:
                      msg.type === "user"
                        ? "20px 20px 0px 20px"
                        : "20px 20px 20px 0px",
                    textAlign: msg.type === "user" ? "right" : "left",
                    color: msg.type === "user" ? "white" : "#575756",
                    margin: "10px 0",
                    width: "60%", // Limit message width
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                  }}
                >
                  <Typography sx={{ fontSize: "12px" }}>
                    {msg.message}
                  </Typography>
                </Box>
              </Box>
            );
          })}
      </Box>
      {/* input field */}
      <Box style={{ display: "flex", alignItems: "center" }}>
        <IconButton>
          <AddCircleIcon style={{ color: "#E57C00" }} />
        </IconButton>
        <IconButton>
          <PhotoIcon style={{ color: "#E57C00" }} />
        </IconButton>
        <TextField
          variant="outlined"
          placeholder="Aa"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          multiline
          maxRows={4}
          InputProps={{
            style: {
              height: "auto",
              borderRadius: "20px",
              backgroundColor: "#F1F1F1",
              padding: "8px 10px",
              border: "none",
            },
            notchedOutline: { border: "none" },
          }}
          inputProps={{
            style: {
              fontSize: "12px",
              lineHeight: "1.5",
            },
          }}
          sx={{
            "& fieldset": {
              border: "none",
            },
          }}
          style={{ flex: 1 }}
        />
        <IconButton onClick={handleSendMessage}>
          <SendIcon style={{ color: "#E57C00" }} />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default ChatBox;
