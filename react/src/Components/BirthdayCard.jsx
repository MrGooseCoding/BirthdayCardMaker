import { useState } from "react";
import "../App.css";
import Button from "./Button";
import Confetti from "react-confetti";

function BirthdayCard({ messages, rickroll, redirect }) {
  var [messageIndex, setMessageIndex] = useState(0);

  return (
    <div
      className="BirthdayCard"
      onClick={() =>
        (messageIndex < messages.length - 1) & !messages[messageIndex][1][0] &&
        setMessageIndex(messageIndex + 1)
      }
    >
      {messages[messageIndex][2] && <Confetti />}

      <div className="center">
        {messages[messageIndex][3] && <img src={`${messages[messageIndex][3]}`}/>}
        {messages[messageIndex][0]}
        {messages[messageIndex][1].map((value, index, array) => (
          <Button
            onClick={() => {
              if (messageIndex < messages.length - 1) {
                setMessageIndex(messageIndex + 1);
              } else {
                if (rickroll) {
                  window.location.replace(
                    redirect,
                  )
                }
              }
            }}
            key={`${messageIndex}-${index}`}
          >
            {value}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default BirthdayCard;
