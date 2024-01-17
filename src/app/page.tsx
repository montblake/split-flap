"use client"

import { useState, useRef } from 'react';
import CharacterModule from "@/components/CharacterModule";
import InputGroup from '@/components/TextInput';

export default function Home() {
  const [text, setText] = useState("        ");
  const [inputText, setInputText] = useState("");
  const [values, setValues] = useState({
    "A00": "G",
    "A01": "C",
    "A02": "B",
    "A03": "A", 
  });

  const inputRefA00 = useRef();
  const inputRefA01 = useRef();
  const inputRefA02 = useRef();
  const inputRefA03 = useRef();

  const handleValChange = (e, id) => {
    let finalValue;
    const unchanging = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " "];
    const rawValue = e.target.value[0];
    const regex = new RegExp('[a-zA-Z]')
    if (unchanging.includes(rawValue)) {
        finalValue = rawValue;
    } else if (regex.test(rawValue)) {
        console.log("RAW", rawValue);
        finalValue = rawValue.toUpperCase();
    } else {
        console.error("ERROR with Input:", rawValue);
    }
 
    setValues({
      ...values,
      [id]: finalValue,
    });
}

//   const handleChange = (e) => {
//     let finalValue;
//     const unchanging = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " "];
//     const rawValue = e.target.value[0];
//     const regex = new RegExp('[a-zA-Z]')
//     if (unchanging.includes(rawValue)) {
//         finalValue = rawValue;
//     } else if (regex.test(rawValue)) {
//         console.log("RAW", rawValue);
//         finalValue = rawValue.toUpperCase();
//     } else {
//         console.error("ERROR with Input:", rawValue);
//     }
//     setVal(finalValue);
// }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-50">
      {/* <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)} />
      <div className="flex flex-row gap-4" >
        <TextInput id={"A00"} ref={inputRefA00}/>
        <TextInput id="A01" ref={inputRefA01}/>
        <TextInput id="A02" ref={inputRefA02}/>
        <TextInput id="A03" ref={inputRefA03}/>
      </div>
      <button onClick={()=>setText(inputText)}>SET TEXT</button>
      <div className="flex flex-row">

      <CharacterModule letter={values["A00"]}/>
      <CharacterModule letter={values["A01"]}/>
      <CharacterModule letter={values["A02"]}/>
      <CharacterModule letter={values["A03"]}/>
      {/* <CharacterModule letter={text[4]}/>
      <CharacterModule letter={text[5]}/>
      <CharacterModule letter={text[6]}/>
      <CharacterModule letter={text[7]}/> */}
      {/* </div> */}
      <InputGroup numBoxes={15} />

    
    </main>
  )
}
