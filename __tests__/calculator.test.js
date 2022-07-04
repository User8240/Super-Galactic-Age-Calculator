import Calc from './../src/calculator.js';

describe('Calc', () => {
  test('should correctly create a calcObject object holding age and life expectancy', () => {
    const calcObject = new Calc(30,100);
    expect(calcObject.age).toEqual(30);
    expect(calcObject.lifeExpect).toEqual(100);
  });
  test('should correctly create a calcObject object holding age and life expectancy', () => {
    const calcObject = new Calc(90,80);
    expect(calcObject.age).toEqual(90);
    expect(calcObject.lifeExpect).toEqual(80);
  });
  test('should correctly return Mercury age, year(s) left, and corresponding life expectancy message', () => {
    const calcObject = new Calc(30,100);
    expect(calcObject.CalcMercury()).toEqual("You are 125 year(s) old on Mercury. You have 292 year(s) left to live!");
  });
  test('should correctly return Mercury age and year(s) lived over life expectancy message', () => {
    const calcObject = new Calc(90,80);
    expect(calcObject.CalcMercury()).toEqual("You are 375 year(s) old on Mercury. You are 42 year(s) over your life expectancy!");
  });
  test('should correctly return Venus age, year(s) left, and corresponding life expectancy message', () => {
    const calcObject = new Calc(30,100);
    expect(calcObject.CalcVenus()).toEqual("You are 48 year(s) old on Venus. You have 113 year(s) left to live!");
  });
  test('should correctly return Venus age and year(s) lived over life expectancy message', () => {
    const calcObject = new Calc(90,80);
    expect(calcObject.CalcVenus()).toEqual("You are 145 year(s) old on Venus. You are 16 year(s) over your life expectancy!");
  });
  test('should correctly return Mars age, year(s) left, and corresponding life expectancy message', () => {
    const calcObject = new Calc(30,100);
    expect(calcObject.CalcMars()).toEqual("You are 16 year(s) old on Mars. You have 37 year(s) left to live!");
  });
  test('should correctly return Mars age and year(s) lived over life expectancy message', () => {
    const calcObject = new Calc(90,80);
    expect(calcObject.CalcMars()).toEqual("You are 48 year(s) old on Mars. You are 5 year(s) over your life expectancy!");
  });
  test('should correctly return Jupiter age, year(s) left, and corresponding life expectancy message', () => {
    const calcObject = new Calc(30,100);
    expect(calcObject.CalcJupiter()).toEqual("You are 3 year(s) old on Jupiter. You have 6 year(s) left to live!");
  });
  test('should correctly return Jupiter age and year(s) lived over life expectancy message', () => {
    const calcObject = new Calc(90,80);
    expect(calcObject.CalcJupiter()).toEqual("You are 8 year(s) old on Jupiter. You are 1 year(s) over your life expectancy!");
  });
});
