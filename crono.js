
let hh = document.querySelector('#position-1');
let mm = document.querySelector('#position-2');
let ss = document.querySelector('#position-3');


let transa;
let sexo;
let amor;

let hours = document.querySelector('#hour');
let minutes = document.querySelector('#minute');
let seconds = document.querySelector('#second');

function countDown(){

  if(hours.value.length < 2){
    hh.innerHTML = "0" + hours.value + ":";
  };
  if(minutes.value.length < 2){
    mm.innerHTML = "0" + minutes.value + ":";
  };
  if(seconds.value.length < 2){
    ss.innerHTML = "0" + seconds.value;
  };



//Set Horas
  transa = setInterval(()=>{
  hh.innerHTML = hours.value;
  if(hours.value.length < 2 && hours.value.length > 0){
    hh.innerHTML = "0" + hours.value + ":";
  }
  
  //Fim Constante Horas
    if(hours.value == 0){
      hh.innerHTML = "";
    };
    if(hh.innerHTML == ""){
      clearInterval(transa)
    }

  }, 10);

    //Fim Inicial Horas
      if(hours.value == 0){
        hh.innerHTML = "";
        clearInterval(transa);
      };

  

//Set Minutos
  sexo = setInterval(()=>{
    mm.innerHTML = minutes.value + ":";

  if(minutes.value.length < 2){
    mm.innerHTML = "0" + minutes.value + ":";
  };
  if(hours.value > 0 && minutes.value == 0){
    hours.value--
    minutes.value = 59;
    seconds.value = 59;
  };
  //Fim Constante Minutos
    if(hours.value == 0 && minutes.value == 0){
      mm.innerHTML = "00:";
      clearInterval(sexo);
    };
   
  }, 1000);

    //Fim Inicial Minutos
    if(hours.value == 0 && minutes.value == 0){
      clearInterval(sexo);
      mm.innerHTML = "00:";
    };


//Set Segundos
  amor = setInterval(()=>{
  ss.innerHTML = seconds.value;
  if(minutes.value > 0 && seconds.value < 1){
    minutes.value--
    mm.innerHTML = "0" + minutes.value + ":";
    seconds.value = 59;
    ss.innerHTML = seconds.value; 
  };
  seconds.value--

  if(seconds.value.length < 2){
    ss.innerHTML = "0" + seconds.value;
  };
  //Fim Constante Segundos
  if(hours.value == 0 && minutes.value == 0 && seconds.value == 0){
    clearInterval(amor);
    hideCircle();
    hh.innerHTML = "Timer Finalizado";
    mm.innerHTML = "";
    ss.innerHTML = "";
  };
}, 1000); 
//Fim Inicial Segundos
  if(hours.value == 0 && minutes.value == 0 && seconds.value == 0){
    clearInterval(amor);
    hideCircle();
    hh.innerHTML = "Timer Finalizado";
    mm.innerHTML = "";
    ss.innerHTML = "";
  };
  
};


function reloadPage(){
  location.reload();
}
function pauseTimer(){
  clearInterval(sexo);
  clearInterval(transa);
  clearInterval(amor);
}
function hideSelector(){
  const hideCronometer = document.querySelector(".cronometer");
  const hideTimer = document.querySelector(".timer");
  const hidePause = document.querySelector("#pause");
  const hideErase = document.querySelector("#erase");
  const hideContinue = document.querySelector("#continue");
  const hideInitial = document.querySelector("#initial");
  
  hideInitial.style.display = 'none';
  hideCronometer.style.display = 'none'; // esconde o cronômetro
  hideTimer.style.display = 'flex'; //mostra o timer
  hidePause.style.display = 'inline-block';
  hideContinue.style.display = 'inline-block';
  hideErase.style.display = 'inline-block';
}
function hideCircle(){
  const hideCircle = document.querySelector("#circle");
  hideCircle.style.display = 'none';
}
function numberLimiter(input) {
  if (input.value.length > 2) {
      input.value = input.value.slice(0, 2);
}
};

