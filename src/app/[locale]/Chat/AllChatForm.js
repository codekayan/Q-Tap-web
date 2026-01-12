"use client";
import React, { useState } from "react";
import { FloatingChatButton } from "./FloatingChatButton";
import FormFields from "./FormFields";
import ChatBox from "./ChatBox";
import { useChatDataStore } from "@/store/user-chat-data-store";
import useUserStore from "@/store/userStore";

export const AllChatForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { isLogged , loggedData } = useChatDataStore();
  const { user } = useUserStore();
  console.log("dataaa",user,isLogged,loggedData);
  // Toggle form visibility
  const toggleForm = () => {
    setIsFormOpen((prev) => !prev);
  };
  // Close chat
  const closeChat = () => {
    setIsFormOpen(false);
  };

  return (
    <div style={{ overflowX: "hidden !important" }}>
      <FloatingChatButton toggleForm={toggleForm} />

      {isFormOpen &&
        (isLogged || user !== null ? (
          <ChatBox onCloseChat={closeChat} />
        ) : (
          <FormFields />
        ))}
    </div>
  );
};
