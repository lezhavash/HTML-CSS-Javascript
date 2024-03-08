"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
const time = [...gameEvents.keys()];
const last = time[time.length - 1];
let avrg = last / gameEvents.size;
console.log(`An event happened,on average, every ${avrg} minutes`);
for (let [time, event] of gameEvents) {
  const t = time >= 45 ? "Secent" : "Fitst";
  console.log(`[${t} Time] ${time}: ${event}`);
}

const { players, odds, scored } = game;
const [player1, player2] = players;
const [gk, ...fieldPlayers] = player1;
const allPlayers = [...player1, ...player2];
const player1Final = ["Tiago", "Coutinho", "Perisic", ...player1];
const { team1, team2, x: drow } = odds;
const printGoals = function (...players) {
  for (const item of players) console.log(item);
  console.log(players.length);
};
printGoals(...scored);
team1 < team2 && console.log("Winner Team1");
team1 > team2 && console.log("Winner Team2");

for (const [goal, goaleScored] of scored.entries()) {
  console.log(`Goal ${goal + 1}: ${goaleScored}`);
}

const value = Object.values(odds);
const key = Object.keys(odds);
const entries = Object.entries(odds);

let average = 0;
for (const odd of value) {
  average += odd;
}
average /= key.length;
console.log(average);
console.log(entries);

for (const [key, value] of entries) {
  const teamWin = key === "x" ? "drow" : `${game[key]}`;
  console.log(`Odd of victory ${teamWin}: ${value}`);
}
const scorers = {};
for (const player of scored) {
  if (scorers[player]) {
    scorers[player]++;
  } else {
    scorers[player] = 1;
  }
}
console.log(scorers);

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

let text = document.querySelector("textarea").value;
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  let text = document.querySelector("textarea").value;
  const line = text.split("\n");
  console.log(line);
  for (const [i, r] of line.entries()) {
    const [one, two] = r.toLowerCase().trim().split("_");
    const done = `${one}${two[0].toUpperCase() + two.split(1)}`;
    console.log(`${done.padEnd(20)} ${"✅".repeat(i + 1)}`);
  }
});
