import "./style.css";

const capitalize = (str) => {
  str = `${str}`;
  const first = str.charAt(0).toUpperCase();
  const capitalized = first + str.slice(1);
  return capitalized;
}

const reverseString = (str) => {
  str = `${str}`;
  let reversed = "";
  for(let i = str.length -1 ; i >= 0; i--){
    reversed = `${reversed}${str.charAt(i)}`;
  }
  return reversed;  
}

const calculator = {
  sum: (a, b) => {return a + b},
  sub: (a, b) => {return a - b},
  mul: (a, b) => {return a * b},
  div: (a, b) => {return a / b},

}

const caesarCypher = function (str, shift = 0){
  const regEx = /[^A-Za-z0-9]/;
  str = `${str}`;
  let encrypted = "";
  for(let i = 0; i < str.length; i++){
    let ch = str.charCodeAt(i);

    if(ch >= 65 && ch <= 90){// A-Z
      ch = ((ch - 65 + shift) % 26 ) + 65;
    }
    if(ch >= 97 && ch <= 122){// a-z
      ch = ((ch - 97 + shift) % 26 ) + 97;
    }
    if(ch >= 48 && ch <= 57){// 0-9
      ch = ((ch - 48 + shift) % 10) + 48;
    }

    encrypted = `${encrypted}${String.fromCharCode(ch)}`;
  }
  return encrypted
}

const analizeArray = function(arr){
  const arrObj = {};
  arrObj.length = arr.length;
  arr = arr.slice(0);
  arr.sort();
  arrObj.max = arr[arr.length -1];
  arrObj.min = arr[0]
  arrObj.average = arr[Math.round(arr.length /2)];
  return arrObj;
}

export {capitalize, reverseString, calculator, caesarCypher, analizeArray};
