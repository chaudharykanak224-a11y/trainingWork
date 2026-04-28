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



function sendMessage(){
    let input = document.getElementById("input");
    let chatBox = document.getElementById("chat");
    let userText = input.value;
     //user show msg
     chatBox.innerHTML += "<p><b>You:</b> " + userText +    "</p>";

     // simple bot reply logic 
     let reply = "Sorry , I dont understand";
     if
     (userText.toLowerCase().includes("hello"))
     {
        reply = "Hello! I am Space Assistant";

     }
     if(userText.toLowerCase().includes("mars")){
        reply = "Mars is the Red Planet";

     }

     if(userText.toLowerCase().includes("earth")){
        reply = "Earth is our home planet";
     }
     if(userText.toLowerCase().includes("sun")){
      reply = "sun is a star and its colour is white ";
     }
     chatBox.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";
     input.value = "";

}