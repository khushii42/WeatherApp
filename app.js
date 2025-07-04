

let apikey = "227b24b5be4c69ac2fc60a0ede5b351f";
 
const input = document.querySelector("#inp");
const button = document.querySelector(".srbtn");
const cityName = document.querySelector("#name");
const temp = document.querySelector("#temp");
const desc = document.querySelector("#description");
const icon = document.querySelector("#icon");

const bgVideo = document.getElementById("bg-video"); 

button.addEventListener("click", ()=>{
    console.log("button");
   const city = input.value.trim();
    if(city === ""){
        alert("Please Enter a cityName");
        return;
    }


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

 fetch(url)
  .then(response => {
    console.log("Response received:", response);
    if (!response.ok) {
      throw new Error("City not found");
    }
    return response.json();
  })
  .then(data => {
    const descText = data.weather[0].description.toLowerCase();
      const tempVal = data.main.temp;

    console.log("Data received:", data);
    // Yahan apne elements update kar sakti ho
    cityName.innerText = data.name;
      temp.innerText = Math.round(data.main.temp) + "°C";
      desc.innerText = data.weather[0].description;
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    let videoSrc = "image/default.mp4";

      if(descText.includes("rain") || descText.includes("drizzle") || descText.includes("light rain")) {
        videoSrc = "image/rain.mp4";
      } else if(descText.includes("scattered clouds") || descText.includes("overcast clouds")) {
        videoSrc = "image/clouds.mp4";
      } else if(tempVal <= 5) {
        videoSrc = "image/winter.mp4";
      } else if(tempVal >= 35) {
        videoSrc = "image/default.mp4";
      } else if(tempVal >= 20 && tempVal < 35) {
        videoSrc = "image/clear.mp4";
      } else if(tempVal < 20) {
        videoSrc = "image/default.mp4";
      }

      bgVideo.src = videoSrc;
      bgVideo.load();
      bgVideo.play();
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });
});
