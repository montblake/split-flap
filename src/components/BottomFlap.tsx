import Image from 'next/image'

export default function BottomFlap({char}: string) {
    return (
    <div className="w-[300px] h-[150px] overflow-hidden flex flex-col justify-end items-center bg-white">
      {char !== "BLANK" &&
      <Image 
        src={`/roboto/letters/${char}.png`} 
        width="300" 
        height="300" 
        alt={char}/>
    }
    </div>
    );

}