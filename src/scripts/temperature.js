//create class Temperature
class Temperature {
  constructor() {}
  //create method for celcius
  celciusTo(target, inputVal) {
    if (target == "celcius") {
      return inputVal;
    } else if (target == "fahrenheit") {
      return inputVal * (9 / 5) + 32;
    } else if (target == "reamur") {
      return inputVal * (4 / 5);
    } else if (target == "kelvin") {
      return inputVal + 273.15;
    }
  }
  //create method for fahrenheit
  fahrenheitTo(target, inputVal) {
    if (target == "fahrenheit") {
      return inputVal;
    } else if (target == "celcius") {
      return (inputVal - 32) * (5 / 9);
    } else if (target == "reamur") {
      return (inputVal - 32) * (4 / 9);
    } else if (target == "kelvin") {
      return (inputVal - 32) * (5 / 9) + 273.15;
    }
  }
  //create method for reamur
  reamurTo(target, inputVal) {
    if (target == "reamur") {
      return inputVal;
    } else if (target == "celcius") {
      return inputVal * (5 / 4);
    } else if (target == "fahrenheit") {
      return inputVal * (9 / 4) + 32;
    } else if (target == "kelvin") {
      return inputVal * (5 / 4) + 273.15;
    }
  }
  //create method for kelvin
  kelvinTo(target, inputVal) {
    if (target == "kelvin") {
      return inputVal;
    } else if (target == "celcius") {
      return inputVal - 273.15;
    } else if (target == "fahrenheit") {
      return (inputVal - 273.15) * (9 / 5) + 32;
    } else if (target == "reamur") {
      return (inputVal - 273.15) * (4 / 5);
    }
  }
}

const res = new Temperature();

let input = document.getElementById("input");
let result = document.getElementById("result");
let inputType = document.getElementById("inputType");
let resultType = document.getElementById("resultType");

document.addEventListener("DOMContentLoaded", function () {
  input.addEventListener("keyup", myResult);
  inputType.addEventListener("change", myResult);
  resultType.addEventListener("change", myResult);
});

function myResult() {
  let inputValue = input.value;
  let inputTypeValue = inputType.value;
  let resultTypeValue = resultType.value;
  if (inputTypeValue == "celcius") {
    const resultVal = res.celciusTo(resultTypeValue, parseFloat(inputValue));
    result.value = resultVal;
  } else if (inputTypeValue == "fahrenheit") {
    const resultVal = res.fahrenheitTo(resultTypeValue, parseFloat(inputValue));
    result.value = resultVal;
  } else if (inputTypeValue == "reamur") {
    const resultVal = res.reamurTo(resultTypeValue, parseFloat(inputValue));
    result.value = resultVal;
  } else if (inputTypeValue == "kelvin") {
    const resultVal = res.kelvinTo(resultTypeValue, parseFloat(inputValue));
    result.value = resultVal;
  }
}

module.exports = Temperature;
