// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'

const BgColorChanger = () => {
   
    const [color, setColor] = useState('olive');
  return (
    
    <div
            className='w-full h-screen'
            style={{ backgroundColor: color }}
        >
        <div className='fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2 '>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg px-2 py-2 bg-slate-500 rounded-3xl'>
            <button onClick={()=>{setColor("red")}} className='outline-none px-3 py3 rounded-full  shadow-lg text-white'
             style={{backgroundColor:"red"}}>
                Red
            </button>
            <button onClick={()=>{setColor("green")}}className='outline-none px-3 py3 rounded-full shadow-lg text-white'
             style={{backgroundColor:"green"}}>
               Green
            </button>
            <button onClick={()=>{setColor("blue")}} className='outline-none px-3 py3 rounded-full shadow-lg text-white'
             style={{backgroundColor:"blue"}}>
               Blue
            </button>
            <button onClick={()=>{setColor("purple")}}className='outline-none px-3 py3 rounded-full shadow-lg text-white'
             style={{backgroundColor:"purple"}}>
                       Puple   
              </button>
              <button onClick={()=>{setColor("yellow")}}className='outline-none px-3 py3 rounded-full shadow-lg text-black'
             style={{backgroundColor:"yellow"}}>
                Yellow 
                 </button>
                 <button onClick={()=>{setColor("white")}} className='outline-none px-3 py3 rounded-full shadow-lg text-black'
             style={{backgroundColor:"white"}}>
                White
            </button>
                <button onClick={()=>{setColor("pink")}}className='outline-none px-3 py3 rounded-full shadow-lg text-black'
             style={{backgroundColor:"pink"}}>
               pink
            </button>
            <button onClick={()=>{setColor("lavender")}} className='outline-none px-3 py3 rounded-full shadow-lg text-black'
             style={{backgroundColor:"lavender"}}>
                Lavender
            </button>
            </div>

        </div>
        <h1 className='text-3xl font-bold flex flex-wrap justify-center bottom-5' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                Background Color Changer
            </h1>
    </div>
  )
}

export default BgColorChanger



