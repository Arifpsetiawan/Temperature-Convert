const Temperature = require("./temperature");

const check = new Temperature();
//Test method celcius
test("celcius 33 to celcius 33", () => {
  expect(check.celciusTo("celcius", 33)).toBe(33);
});

test("celcius 25 to fahrenheit 77", () => {
  expect(check.celciusTo("fahrenheit", 25)).toBe(77);
});

test("celcius 50 to reamur 40", () => {
  expect(check.celciusTo("reamur", 50)).toBe(40);
});

test("celcius 22.5 to kelvin 295.65", () => {
  expect(check.celciusTo("kelvin", 22.5)).toBe(295.65);
});

//Test method fahrenheit
test("fahrenheit 37 to fahrenheit 37", () => {
  expect(check.fahrenheitTo("fahrenheit", 37)).toBe(37);
});

test("fahrenheit 648.5 to celcius 3585", () => {
  expect(check.fahrenheitTo("celcius", 648.5)).toBe(342.5);
});

test("fahrenheit 5 to reamur -12", () => {
  expect(check.fahrenheitTo("reamur", 5)).toBe(-12);
});

test("fahrenheit 5 to kelvin 258.15", () => {
  expect(check.fahrenheitTo("kelvin", 5)).toBe(258.15);
});

//Test method reamur
test("reamur 21 to reamur 21", () => {
  expect(check.reamurTo("reamur", 21)).toBe(21);
});

test("reamur -8 to celcius -10", () => {
  expect(check.reamurTo("celcius", -8)).toBe(-10);
});

test("reamur 97 to fahrenheit 250.25", () => {
  expect(check.reamurTo("fahrenheit", 97)).toBe(250.25);
});

test("reamur -1 to kelvin 271.9", () => {
  expect(check.reamurTo("kelvin", -1)).toBe(271.9);
});

//Test method kelvin
test("kelvin 13 to kelvin 13", () => {
  expect(check.kelvinTo("kelvin", 13)).toBe(13);
});

test("kelvin -85.5 to celcius -358.65", () => {
  expect(check.kelvinTo("celcius", -85.5)).toBe(-358.65);
});

test("kelvin 88 to fahrenheit -301.27", () => {
  expect(check.kelvinTo("fahrenheit", 88)).toBe(-301.27);
});

test("kelvin 8 to reamur -212.12", () => {
  expect(check.kelvinTo("reamur", 8)).toBe(-212.12);
});
