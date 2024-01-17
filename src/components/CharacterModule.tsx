import { useState, useEffect } from 'react';
import SplitFlap from "@/components/SplitFlap";

export default function CharacterModule({letter}) {
  // const [input, setInput] = useState(0)
  // const [destination, setDestination] = useState(0);
    
  const destinationLookup = {
    "A": 0,
    "B": 1,
    "C": 2,
    "D": 3,
    "E": 4,
    "F": 5,
    "G": 6,
    "H": 7,
    "I": 8,
    "J": 9,
    "K": 10,
    "L": 11,
    "M": 12,
    "N": 13,
    "O": 14,
    "P": 15,
    "Q": 16,
    "R": 17,
    "S": 18,
    "T": 19,
    "U": 20,
    "V": 21,
    "W": 22,
    "X": 23,
    "Y": 24,
    "Z": 25,
    " ": 26,
  }




  return (
    <>
      {/* <div className="flex flex-row gap-1 w-[300px] bg-gray-200 p-2">
        <input type="number" value={input} onChange={(e)=>setInput((parseInt(e.target.value)%27))} className="rounded-lg flex-grow p-2"/>
        <button className="bg-gray-300 p-2 rounded-lg" onClick={()=>setDestination(input)}>GO</button>
      </div> */}
      <SplitFlap destination={destinationLookup[letter]} />
    </>
  );
}