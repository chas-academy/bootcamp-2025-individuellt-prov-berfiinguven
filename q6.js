// fixa den här funktionen så att den räknar matte

export const mathEquation = (a) => {
  const b = 2;
  if(typeof a !== "number") {
    return "Error: input must be a number";

  }

  return a + b;
};
