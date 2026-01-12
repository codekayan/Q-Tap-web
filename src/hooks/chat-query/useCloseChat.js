import closeChatApi from "@/api/chat/close.chat.service";
import { useChatDataStore } from "@/store/user-chat-data-store";
import { useMutation, useQueryClient } from "@tanstack/react-query"



const useCloseChat = () => {
    const setChatRoomId = useChatDataStore((state) => state.setChatRoomId);
    const { email } = useChatDataStore((state) => state.loggedData);
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ email, chat_id }) => closeChatApi(email, chat_id),
        onSuccess: (res) => {
            console.log("useSendMessage", res)
            // Refresh messages immediately after sending
            queryClient.invalidateQueries({ queryKey: ["messages"] })
        },
    })
}

export default useCloseChat