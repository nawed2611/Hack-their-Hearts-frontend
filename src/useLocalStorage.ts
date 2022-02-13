interface Message {
  message: string;
  reciever: number;
  sender: number;
}

export default function useLocalStorage() {
  let storage: Storage = localStorage;

  function createMessage(message: string, reciever: number, sender: number) {
    let currMessages: Message[] = JSON.parse(storage.getItem("messages"));

    let newMessage: Message = {
      message,
      reciever,
      sender
    };

    currMessages.push(newMessage);

    storage.setItem("messages", JSON.stringify(currMessages));
  }

  function newMessages(reciever: number, sender: number) {
    let fullMessages: Message[] = JSON.parse(storage.getItem("messages"));
    let returnedMessage = [];

    localStorage.setItem("messages", JSON.stringify([]));

    fullMessages?.forEach((i) => {
      if (i.reciever === reciever && i.sender === sender) {
        returnedMessage.push(i);
      }
    });

    return returnedMessage;
  }

  return {
    createMessage,
    newMessages
  };
}
