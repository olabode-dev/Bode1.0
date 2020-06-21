
const trigger = [
  //0 
  ["hi", "hey", "hello"],
  //1
  ["how are you", "how are things"],
  //2
  ["what is going on", "what is up?", "what is happening?"],
  //3
  ["happy", "good", "well", "fantastic", "cool"],
  //4
  ["bad", "bored", "tired", "sad"],
  //5
  ["tell me story", "tell me joke"],
  //6
  ["thanks", "thank you"],
  //7
  ["bye", "good bye", "goodbye"],
   //8
  ["spanish?", "another language", "take care"],
   //9
  ["creator", "developer", "who is your developer"],
   //10
  ["lol", "lmao", "funny"],
  //11
  ["weather", "how is the weather", "what is the weather like?"],
  //12
  ["I'm hungry", "dinner", "lunch"],
  //13
  ["time", "football", "sports"],
  //14
  ["what can you do", "what do you do?", "help"],
  //15
  ["schedule", "to-do", "reminder"]
  
  ];
  
  
  const reply = [
  //0 
  ["Hello!", "Yes boss!", "Fam!", "Hi human, how may I help you?"],
  //1
  [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "A bit cranky, but not buggy, how are you?"
    ],
  //2
  [
      "Nothing much",
      "Exciting things!"
    ],
  //3
  ["Glad to hear it", "Good, maa guy, na hustle o"],
  //4
  ["Why?", "Cheer up buddy", "sorry fam, humans are always worked up", "How can I help"],
  //5
  ["There was a country called Nigeria", "Arsenal", "Bruhh, you must be real bored", "Will you get bot jokes, well, I think you just will have to meet Bode"],
  //6
  ["You're welcome", "No problem", "de nada"],
  //7
    ["Goodbye", "See you later"],
    ["bye", "good bye", "bueno", "happy to help"],
    //8
    ["I will rather not say, but he has M B K in his name", "he has a aecret life", "He is somewhere, probably sleeping"],
   //9
   ["my developer likes to stress", "see you, we will update", "dont trip boss"],
    //10
   ["I try to have humor ", "robots know sacarssm too", "Bozinga"],
   //11
   ["I was not programmed to check your weather", "it is not the same over here", "robots dont do small talk"],
   //12
   ["you could have rice", "There is a joint nearby", "Food?, we dont do that here"],
   //13
   ["Bode decided to leave that out", "Humans, you sure want to sweat", "I can help, but I cant assure"],
   //14
   ["hey fam, I dey for you, no fear", "Bo de decide to help you", "I can only try, 911 is your solution"],
   //15
   ["yoo, you will have to give me access", "fam, we are good to go", "I can only try"]
  ];
  
  const alternative = [
    "This is my first build fam, didn't get that",
    "Go on...",
    "Apparently, Bou-day forgot to add that...Darn you Bou-day",
    "I'm listening...",
    "Bro...",
    "I'm not that smart yet, go again...",
    "This is why I dont like Emotions, please go again...",
    "Kindly wait for an update or try again. Bo de needs to do better",
    "Go again, I am still smarter than the average human though"  
];
  


document.addEventListener("DOMContentLoaded", () => {
	const inputField = document.getElementById("input")
	inputField.addEventListener("keydown", function(e) {
		if (e.code === "Enter") {
			let input = inputField.value;
			inputField.value = "";
			output(input);
    }
  });
});

function output(input) {
  let product;

  //Transforms whatever the user inputs to lowercase and remove all chars except word characters, space, and digits
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

  // For example 'tell me a story' becomes 'tell me story'
  // Or 'i feel happy' -> 'happy'
  text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");

  // Searches for an exact match with the 'trigger' array, if there are none, it goes will check if message contains 'coronavirus,' and if not - random alternative
  if (compare(trigger, reply, text)) {
    product = compare(trigger, reply, text);
  } else if (text.match(/coronavirus/gi)) {
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
  } else {
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  //update DOM
  addChat(input, product);
}

function compare(triggerArray, replyArray, string) {
  let item;
  for (let x = 0; x < triggerArray.length; x++) {
    for (let y = 0; y < replyArray.length; y++) {
      if (triggerArray[x][y] == string) {
        items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  return item;
}

function addChat(input, product) {
  const mainDiv = document.getElementById("main");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.innerHTML = `You: <span id="user-response">${input}</span>`;
  mainDiv.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.innerHTML = `Bode1.0: <span id="bot-response">${product}</span>`;
  mainDiv.appendChild(botDiv);
  speak(product);
}

const synth = window.speechSynthesis;
let voices = synth.getVoices();

function speak(string) {
  let u = new SpeechSynthesisUtterance(string);
  u.text = string;
  u.lang = "en-US";
  u.volume = 1; //0-1 interval
  u.rate = 1;
  u.pitch = 0.5; //0-2 interval
  synth.speak(u);
  debugger
}
