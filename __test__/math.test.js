import * as app from "../Maths/app";
import * as math from "../Maths/math";

math.add = jest.fn();
math.subtract = jest.fn();
math.multiply = jest.fn();
math.divide = jest.fn();
//addition
test("calls math.add", () => {
  const r=app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});
//subtraction
test("calls math.subtract", () => {
  app.doSubtract(7, 7);
  expect(math.subtract).toHaveBeenCalledWith(7,7);
});
//multiplication
test("calls math.mutiply", () => {
    app.doMultiply(5, 2);
    expect(math.multiply).toHaveBeenCalledWith(5, 2);
  });
//Division
test("calls math.mutiply", () => {
    app.doDivide(3,4);
    expect(math.divide).toHaveBeenCalledWith(3, 4);
  });


 