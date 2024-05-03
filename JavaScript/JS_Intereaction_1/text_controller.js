

// //fonts variable with array
// const fonts = ["Kunstler Script","Zawgyi-One","Cambria","Brush Script MT "];


// //selectors

// const output = document.querySelector("#output");
// const text = document.querySelector("#text");

// //count text
// const count = document.querySelector("#count");

// //color picker
// const color = document.querySelector("#color");

// //font size
// const fontSize = document.querySelector("#fontSize");

// //font family
// const fontFamily = document.querySelector("#fontFamily");



// //looping fonts
// fonts.forEach((font) => {
//     fontFamily.append(new Option(font,font));
// })

// //action
// //text ထဲမှာစာရိုက်တာနဲ့ output မှာပြ

// text.addEventListener("keyup", (event) => {
//             // same way
//     // console.log(event.target.value);
//     // console.log(text.value);

//     output.innerText = text.value;

//     //count text length
//     count.innerText = text.value.length;
// })


// //color picker
// color.addEventListener("change", (event) => {
//     output.style.color = color.value;
//     // output.style.color = event.target.value; //same way on above
// })


// //font size
// fontSize.addEventListener("change", (event) => {
//     output.style.fontSize = event.target.value + "px";
// })

 
// //font-family action after looping
// fontFamily.addEventListener("change", (event) => {
//     output.style.fontFamily = fontFamily.value;
// })

// variables
const fonts = ["Helvetica", "Gadget", "Courier", "Impact", "Tahoma"];

//selectors

const output = document.querySelector("#output");
const text = document.querySelector("#text");
const count = document.querySelector("#count");
const color = document.querySelector("#color");
const fontSize = document.querySelector("#fontSize");
const fontFamily = document.querySelector("#fontFamily");
const textToSpeech = document.querySelector("#textToSpeech");
const speechToText = document.querySelector("#speechToText");
const synth = window.speechSynthesis;

const listen = () => {
  var recognition = new webkitSpeechRecognition();

  // Set the language and start recognizing
  recognition.lang = "en-US";
  
  recognition.start();

  recognition.addEventListener("start", () => {
    speechToText.classList.add("active");
    speechToText.innerHTML = `<div class="spinner-border text-white spinner-border-sm" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`;
  });

  recognition.addEventListener("end", () => {
    speechToText.classList.remove("active");

    speechToText.innerHTML = `<i class="bi bi-mic"></i>`;
  });

  // When a speech result is returned
  recognition.onresult = function (event) {
    // Get the transcript of the spoken words
    // console.log(event.results);
    var transcript = event.results[0][0].transcript;
    text.value += transcript;
  };
};

const speak = (text) => {
  const utterThis = new SpeechSynthesisUtterance();
  utterThis.rate = 0.8;
  utterThis.text = text;
  utterThis.voice = synth.getVoices()[0];

  utterThis.addEventListener("start", () => {
    textToSpeech.classList.add("active");
  });

  utterThis.addEventListener("end", () => {
    textToSpeech.classList.remove("active");
  });

  synth.speak(utterThis);
};

fonts.forEach((font) => {
  //   console.log(font);
  //   console.log(new Option(font, font));
  fontFamily.append(new Option(font, font));
});

//action
// text ထဲမှာစာရိုက်တာနဲ့ output မှာတစ်ခါထဲပြ
text.addEventListener("change", (event) => {
  //   console.log(text.value);
  //   console.log(event.target.value);
  output.innerText = text.value;
  count.innerText = text.value.length;
});

color.addEventListener("change", (event) => {
  output.style.color = event.target.value;
});

fontSize.addEventListener("change", (event) => {
  console.log(fontSize.value);
  output.style.fontSize = event.target.value + "px";
});

fontFamily.addEventListener("change", (event) => {
  console.log(event.target.value);
  output.style.fontFamily = fontFamily.value;
});

textToSpeech.addEventListener("click", () => {
  speak(text.value);
});

speechToText.addEventListener("click", listen);