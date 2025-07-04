let apikey = "696ec99f1ae49269db5ea92cd6bd4250";
 
const input = document.querySelector("#inp");
const button = document.querySelector(".srbtn");
const cityName = document.querySelector("#name");
const temp = document.querySelector("#temp");
const desc = document.querySelector("#description");
const icon = document.querySelector("#icon");

button.addEventListener("click", ()=>{
    console.log("button");
   const city = input.value.trim();
    if(city === ""){
        alert("Please Enter a cityName");
        return;
    }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

   console.log( "url", url);
 fetch(url);
}
);
