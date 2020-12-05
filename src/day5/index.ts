import fs from "fs";
import path from "path";

const file = fs.readFileSync(path.resolve(__dirname, "./data.txt")).toString();
const fileLines = file.split("\n");

type Seat = {
  row: number;
  column: number;
  id: number;
};

type FrontBack = ("F" | "B")[];
type LeftRight = ("L" | "R")[];

export const parseSeatCodeToSeat = (code: string): Seat => {
  const letters = code.split("");
  const frontBack = letters.slice(0, 7) as FrontBack;
  const leftRight = letters.slice(7, 10) as LeftRight;
  //   console.log(getRow(frontBack, [0, 127]));
  return {
    column: 0,
    row: 0,
    id: 1,
  };
};

const getRow = (frontBack: FrontBack, range: [number, number]) => {
  let [min, max] = range;

  frontBack.forEach((direction) => {
    [min, max] = splitInHalf(min, max, direction === "B" ? "upper" : lower);
  });

  console.log({ min, max });

  return [min, max];
};

export const splitInHalf = (
  from: number,
  to: number,
  half: "upper" | "lower"
): [number, number] => {
  const diff = to - from;
  const diffHalf = Math.round(diff / 2);

  if (half === "lower") {
    return [from, to - diffHalf];
  }
  if (half === "upper") {
    return [from + diffHalf, to];
  }
  return [from, to];
};

export const main = (): number => {
  console.log(fileLines);
  return 0;
};