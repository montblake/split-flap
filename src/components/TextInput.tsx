import { forwardRef, createRef, useEffect, useState } from 'react';

const InputBox = forwardRef(({onChange}, ref) => (
  <input
    ref={ref}
    maxLength={1}
    onChange={onChange}
    className="h-20 w-20 text-lg text-slate-800"
  />
));

const InputGroup = ({ numBoxes }) => {
  // Create array of refs
  const inputRefs = Array.from({ length: numBoxes }, () => createRef());
  console.log("INPUT REFS", inputRefs)

  const handleInputChange = (index) => {
    if (index < numBoxes - 1) {
      // Shift focus to next input box
      inputRefs[index + 1].current.focus();
    }
  }

  return (
    <div className="bg-red-400 w-[600px] h-[600px] flex flex-col justify-center items-center gap-1">
      <p>Hello, First</p>
      {inputRefs.map((ref, index) => {
        <input key={index} ref={ref} className="bg-slate-100 text-slate-900 w-[100px] h-[100px]" value="HI"/>
      })}
      <p>HELLO, Second</p>
    </div>
  );
};

export default InputGroup;