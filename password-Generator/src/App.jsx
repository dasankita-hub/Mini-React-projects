import {useState,useCallback, useEffect,useRef} from 'react';
function App() {
// eslint-disable-next-line no-unused-vars
const[password,setPassword]=useState("");
// eslint-disable-next-line no-unused-vars
const[length,setLength]=useState("8");
// eslint-disable-next-line no-unused-vars
const[nosAllowed,setNosAllowed]=useState(false);
const[charsAllowed,setCharsAllowed]=useState(false);


// eslint-disable-next-line no-unused-vars
const PasswordGenerator=useCallback(()=>{
  
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(nosAllowed) {
    str +="0123456789"
  }
  if(charsAllowed) {
    str +="~!@#$%^&*() _-+={}[]?";
  };

  for (let i=0;i<=length;i++){
      let char=Math.floor(Math.random()*str.length +1);
      pass +=str.charAt(char);
  }
  setPassword(pass);
},[length,nosAllowed,charsAllowed,setPassword])
 useEffect(()=>{
    PasswordGenerator();
 },[length,nosAllowed,charsAllowed,PasswordGenerator])
const passwordRef=useRef(null);

const copytoClipboard = async () => {
  try {
    await navigator.clipboard.writeText(password);
    alert('Password copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};
  return (
    // <div className="bg-green-100 w-full h-screen ">
   <div className="w-full max-w-md mx-auto rounded-lg shadow-md  px-6 py-5 my-8 text-orange-400 bg-gray-600 mt-10">
  <h1 className="text-2xl text-center text-white py-2 px-4">Password Generator</h1>
  <div className="flex items-center rounded-lg overflow-hidden mb-4">
    <input
      type="text"
      value={password}
      className="outline-none w-full py-1 px-4"
      placeholder="Password"
      readOnly
      ref={passwordRef}
    />
    <button onClick={copytoClipboard} className="outline-none bg-blue-600 text-white px-4 py-1 shrink-0">Copy</button>
  </div>
  <div className="flex text-sm gap-x-2">
    <div className="flex items-center gap-x-1">
      <input 
        type="range"
        value={length}
        min={5}
        max={100}
        className="cursor-pointer text-orange-400" 
        onChange={(e) => { setLength(e.target.value) }}
      />
      <label>length: {length}</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input 
        type="checkbox"
        defaultChecked={nosAllowed}
        id="numberinput"
        onChange={() => setNosAllowed((prev) => !prev)} 
      />
      <label>Numbers</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input 
        type="checkbox"
        defaultChecked={charsAllowed}
        id="charinput"
        onChange={() => setCharsAllowed((prev) => !prev)} 
      />
      <label>Characters</label>
    </div>
  </div>
</div>


    // </div>

  );
}

export default App;
