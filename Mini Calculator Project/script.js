let display = document.getElementById('display');
let btn = document.querySelector('.btn');



const appendValue = (val) =>{
  display.value+=val;
}

const clearAll = () =>{
  display.value="";
}


  const deleteLast = () =>{
    display.value = display.value.slice(0,-1);
  }
  
  const calculate = () =>{
    try{
      display.value = eval(display.value);
    }
    catch{
      display.value = 'Error';
    }
  }

