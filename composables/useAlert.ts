const alertMessage = ref("");
const alertType = ref("");

export function useAlert() {
  const setMessage = (newMessage: string, type?: string) => {
    alertMessage.value = newMessage;
    alertType.value = type ?? "primary";
  };

  const clearMessage = () => {
    alertMessage.value = "";
  };

  return {
    alertMessage,
    setMessage,
    clearMessage,
    alertType,
  };
}
