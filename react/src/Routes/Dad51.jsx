import "./../App.css";
import BirthdayCard from "../Components/BirthdayCard";

function Dad51() {
  return (
    <BirthdayCard
      messages={[
        ["Hi dad", []],
        ["This is a great birthday card", []],
        ["You know why?", ["It's digital?"]],
        ["No, you're wrong", []],
        ["It's because it's your birthday", []],
        ["And you're a great dad", []],
        ["A great birthday card for a great dad", []],
        ["Remember this moment?", [], false, "fakeDadWithSon.jpg"],
        ["When you took me to play football for the first time", []],
        ["So long ago", []],
        ["🥳 Happy birthday dad! 🥳", [], true],
      ]}
      redirect="otherlink" // Link you want to redirect to when the card is over
      rickroll // Not actually a rickroll -- just a silly property name. It's necessary if you want to redirect
    />
  );
}

export default Dad51;
