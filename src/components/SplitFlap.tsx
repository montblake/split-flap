import { useState, useEffect } from "react";
import TopFlap from "@/components/TopFlap";
import BottomFlap from "@/components/BottomFlap";

const flaps = [
  ["A", "BLANK"],
  ["B", "A"],
  ["C", "B"],
  ["D", "C"],
  ["E", "D"],
  ["F", "E"],
  ["G", "F"],
  ["H", "G"],
  ["I", "H"],
  ["J", "I"],
  ["K", "J"],
  ["L", "K"],
  ["M", "L"],
  ["N", "M"],
  ["O", "N"],
  ["P", "O"],
  ["Q", "P"],
  ["R", "Q"],
  ["S", "R"],
  ["T", "S"],
  ["U", "T"],
  ["V", "U"],
  ["W", "V"],
  ["X", "W"],
  ["Y", "X"],
  ["Z", "Y"],
  ["BLANK", "Z"],
];


export default function SplitFlapModule({ destination }) {
  const [position, setPosition] = useState(0); // 0 - 26 length === 27

  useEffect(()=>console.log("destination", destination));

  useEffect(()=>{
    let intervalID;

    if (position !== destination) {
      intervalID = setInterval(()=>{
        setPosition(position => ((position + 1) % 27))}, 100);
    }
    if (position === destination) {
      clearInterval(intervalID);
    }

    return () => clearInterval(intervalID); 
  }, [position, destination]);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col justify-center items-center gap-[1px] border-slate-500 border-[1px]">
        <TopFlap ch={flaps[position][0]}/>
        <BottomFlap char={flaps[(position === 26 ? 0 : position + 1)][1]}/>
      </div>
{/*3 */}
  </div>
  );
}