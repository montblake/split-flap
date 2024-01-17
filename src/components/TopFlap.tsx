import Image from 'next/image'

export default function TopFlap({ch}: string) {
    return (<div className="TOP w-[300px] h-[150px] overflow-hidden flex flex-col justify-start items-center bg-white">
      {ch !== "BLANK" &&
      <Image 
        src={`/roboto/letters/${ch}.png`} 
        width="300" 
        height="300" 
        alt={ch}/>}
    </div>);

}