// ICE 2 for INFT 2202-07
// March 07, 2024
// Christian Weersink 100791903
// Turned js into ts compatible code
export const add = (a :number, b:number):number => {
  return a + b;
}

export const subtract = (a :number, b:number): number => {
  return a - b;
}

export const multiply = (a:number, b:number):number => {
  return a * b;
}

export const divide = (a:number, b:number):number => {
  return a / b;
}

export enum Calcs{
  add,
  subtract,
  multiply,
  divide
} 