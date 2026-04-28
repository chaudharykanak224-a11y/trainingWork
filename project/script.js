fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(res => res.json())
.then(data => {
    console.log(data);
     
     document.getElementById("title").innerText = data.title || "No title available";
        document.getElementById("desc").innerText = data.explanation || "No Description Available";
       
        if (data.media_type === "image"){
             document.getElementById("img").src = data.url;

        } else{
              document.getElementById("img").alt = "Video available today, not image";

        }
} )

  .catch(error =>{
    console.log(error);
     
    document.getElementById("title").innerText = "Error loading NASA data";

  }
  );


// fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
//   .then(res => res.json())
//   .then(data => {

//     document.getElementById("title").innerText = data.title;

//     document.getElementById("desc").innerText = data.explanation;

//     if (data.media_type === "image") {
//       document.getElementById("img").src = data.url;
//       document.getElementById("img").style.display = "block";
//     } 
//     else {
//       document.getElementById("img").style.display = "none";

//       document.getElementById("desc").innerText += 
//         "\n\n🚀 Today NASA data is a VIDEO. Try refreshing tomorrow.";
//     }

//   })
//   .catch(err => {
//     console.log(err);
//     document.getElementById("title").innerText = "Error loading NASA data";
//   });


  function sendMessage() {

    let input = document.getElementById("input");
    let chatBox = document.getElementById("chat");

    let userText = input.value;
    let reply = "";

    if (userText.toLowerCase().includes("earth")) {
        reply = "Earth is our home planet 🌍 and the only known planet with life.";
    }

    else if (userText.toLowerCase().includes("mars")) {
        reply = "Mars is the Red Planet known for its dusty surface 🔴.";
    }

    else if (userText.toLowerCase().includes("jupiter")) {
        reply = "Jupiter is the largest planet in our solar system 🪐.";
    }

    else if (userText.toLowerCase().includes("saturn")) {
        reply = "Saturn is famous for its beautiful rings 💍.";
    }

    else if (userText.toLowerCase().includes("mercury")) {
        reply = "Mercury is the closest planet to the Sun ☀️.";
    }

    else if (userText.toLowerCase().includes("venus")) {
        reply = "Venus is the hottest planet in our solar system 🔥.";
    }

    else if (userText.toLowerCase().includes("uranus")) {
        reply = "Uranus is an ice giant that rotates sideways.";
    }

    else if (userText.toLowerCase().includes("neptune")) {
        reply = "Neptune is the coldest and windiest planet.";
    }

    else if (userText.toLowerCase().includes("sun")) {
        reply = "The Sun is a star at the center of our solar system ☀️.";
    }

    else if (userText.toLowerCase().includes("moon")) {
        reply = "The Moon is Earth's natural satellite 🌙.";
    }

    else if (userText.toLowerCase().includes("galaxy")) {
        reply = "A galaxy is a huge system of stars, gas, and dust.";
    }

    else if (userText.toLowerCase().includes("milky way")) {
        reply = "The Milky Way is our home galaxy 🌌.";
    }

    else if (userText.toLowerCase().includes("black hole")) {
        reply = "A black hole is a region where gravity is extremely strong 🕳️.";
    }

    else if (userText.toLowerCase().includes("nasa")) {
        reply = "NASA is the US space agency exploring space 🚀.";
    }

    else if (userText.toLowerCase().includes("spacex")) {
        reply = "SpaceX builds reusable rockets for space travel.";
    }

    else if (userText.toLowerCase().includes("rocket")) {
        reply = "A rocket is a vehicle used to travel into space 🚀.";
    }

    else if (userText.toLowerCase().includes("astronaut")) {
        reply = "An astronaut is a person trained to travel in space 👨‍🚀.";
    }

    else if (userText.toLowerCase().includes("alien")) {
        reply = "There is no confirmed evidence of aliens yet 👽.";
    }

    else {
        reply = "I only answer space-related questions 🚀";
    }

    chatBox.innerHTML += "<p><b>You:</b> " + userText + "</p>";
    chatBox.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";

    input.value = "";
}
 

// async function sendMessage() {
//     let input = document.getElementById("input"); 
//     let chat = document.getElementById("chat");

// let userText = input.value;

// chat.innerHTML += "<p><b>You: </b> " + userText + "</p>";

// input.value = "";

// chat.innerHTML += "<p><b>Bot: </b> typing...</p>";

// let res = await

// fetch("https://api.openai.com/v1/chat /completions",
//     { method: "POST", 
//       headers: {
//           "Content-Type": "application/json",
//            "Authorization": "Bearer YOUR_API_KEY" },

// body: JSON.stringify({

// model: "gpt-3.5-turbo",

// messages: [
//     {
//        role: "system",
// content: "You are a space expert.Answer only space-related questions in simple language."

// },

// {

// role: "user",

// content: userText

// }

// ]

// })

// });

// let data = await res.json();

// let reply =

// data.choices[0].message.content;

// chat.innerHTML += "<p><b>Bot: </b> " +

// reply + "</p>";

// }