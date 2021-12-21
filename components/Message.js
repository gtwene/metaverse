import { useMoralis } from "react-moralis";
import Messages from "./Messages";

function Message({ message }) {
  const { user } = useMoralis();

  return (
    <div>
      <p>{message.get("message")}</p>
    </div>
  );
}

export default Message;
