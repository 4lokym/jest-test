import { capitalize, reverseString, calculator, caesarCypher, analizeArray} from "./index";

//capitalize

test("Capitalize: all lower case", () => {
  expect(capitalize("ciao")).toBe("Ciao");
});

test("Capitalize: empty", () => {
  expect(capitalize("")).toBe("");
});

test("Capitalize: all uppercase", () => {
  expect(capitalize("CIAO")).toBe("CIAO");
});

test("Capitalize: number", () => {
  expect(capitalize(1)).toBe("1");
});

test("Capitalize: boolean", () => {
  expect(capitalize(true)).toBe("True");
});

//reverseString

test("Reverse string: normal string", () =>
  expect(reverseString("ciao")).toBe("oaic"));

test("Reverse string: epmty string", () =>
  expect(reverseString("")).toBe(""));

test("Reverse string: non string input", () =>{
  expect(reverseString(123)).toBe("321");
  expect(reverseString(true)).toBe("eurt");
})

//calculator

test("Calculator: sum", () => {
  expect(calculator.sum(3, 4)).toBe(7);
})

test("Calculator: sub", () => {
  expect(calculator.sub(3, 4)).toBe(-1);
})

test("Calculator: mul", () => {
  expect(calculator.mul(3, 4)).toBe(12);
})

test("Calculator: div", () => {
  expect(calculator.div(3, 4)).toBeCloseTo(0.75);
})

//caecarCypher

test("Caecar cypher: normal string", () =>{
  expect(caesarCypher("ciao", 3)).toBe("fldr");
})

test("Caecar cypher: empty string", () =>{
  expect(caesarCypher("", 3)).toBe("");
})

test("Caecar cypher: no shift", () =>{
  expect(caesarCypher("ciao")).toBe("ciao");
})

test("Caecar cypher: TOP test 1", () =>{
  expect(caesarCypher("xyz", 3)).toBe("abc");
})

test("Caecar cypher: TOP test 2", () =>{
  expect(caesarCypher("HeLLo", 3)).toBe("KhOOr");
})

test("Caecar cypher: TOP test 3", () =>{
  expect(caesarCypher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})  

//analizeArray

test("Analize array: numbers array", () =>{
  expect(analizeArray([1,8,3,4,2,6]).length).toBe(6);
  expect(analizeArray([1,8,3,4,2,6]).max).toBe(8);
  expect(analizeArray([1,8,3,4,2,6]).min).toBe(1);
  expect(analizeArray([1,8,3,4,2,6]).average).toBe(4);
});