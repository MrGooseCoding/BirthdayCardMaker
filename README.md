# Birthday Card Maker

A full-stack project for creating interactive digital birthday cards.

## Instalation
You must have Node.js installed.

### Frontend

Navigate to the `react/` folder on your terminal. There, execute:
```
npm install
```

Then, you can run:
```
npm run build
```

This should generate a `dist/` folder inside your current folder.

### Backend

Go to the `app/` folder in your terminal. Run:
```
npm install
```

*Optional: on `app/app.js` set a different port by changing the `port` variable (by default 3000)*

And then, to run the server, execute:
```
node app.js
```

Now, if you navigate (on your browser), to a set route, it should show you your custom birthday card.

## Create custom birthday cards
Navigate to `react/src/Routes/`, and then create a react javascript file (`.jsx`) to contain your custom birthday card.

*Tip: Name the file like: NameYearsOld.jsx to avoid repetitions (Example: Dad51)*

Then, on the inside, paste the following code:

```jsx
import "./../App.css";
import BirthdayCard from "../Components/BirthdayCard";

function PersonName() {
  return (
    <BirthdayCard
      messages={[
        // messages go in here
      ]}
      redirect="otherlink" // Link you want to redirect to when the card is over
      rickroll // Not actually a rickroll -- just a silly property name. It's necessary if you want to redirect
    />
  );
}

export default PersonName;
```

And change `PersonName` to whatever name is of the person you want to send a birthday card to.

Now, you should decide what are you going to put on your birthday card, formatted the following way.

For each message, you should write:
```javascript
[
  "Message text",
  [], // List of "options" that the user can select. Used to make birthday cards a bit more fun. For example: ["Option 1", "Option 2"]
  false, //set this to true if you want confetti on this slide.
  "picture.jpg" // Optional: set a picture this slide is going to show
]
```

*Note: If you want to use images, you should upload those on the `react/public/` folder with the same name you have set on the fourth message setting*

You can find an example at `react/src/Routes/Dad51.jsx`.

Now it's time to tell the program you've added a birthday card. To do that, go to `react/src/main.jsx`, and import the birthday card the following way (write this on top of the file):

```javascript
import PersonName from "./Routes/PersonName"
```

Then, set the route by writing, below line 8:
```javascript
{
  path: "/PersonName",
  element: <PersonName/>,
},
```

Now, if you run `npm run dev` on the `react/` folder and navigate (on your browster), to the `PersonName/` route, you should see the birthday card show up.

Next up, you can continue the instalation just as in [[#Backend]].
