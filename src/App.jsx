import { useState } from 'react'
import {URL} from './constants'

// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [question,setQuestion]= useState('')
  const [result,setResult] = useState('')
  const payload = {
    "contents":
      {
        "parts": [
          { text: question }
        ]
      }
  };
   const askQuestion = async () =>{
     let response = await fetch(URL,{
      method:"POST",
      body: JSON.stringify(payload)
     })


     response = await response.json()

    //  console.log(response.candidates[0].parts[0].text);
     console.log(response[0].candidates[0].content.parts[0].text)

    setResult(response[0].candidates[0].content.parts[0].text)

    //  return(<h1>{result}</h1>)
   }


  return (
    <>
    <div>
      <script>console.log("fgfgfggfgfg")</script>
       <input
          type="text"
           style={{ width: "800px" }}
             placeholder="Enter text here"
             onChange={(event) => setQuestion(event.target.value)}
             value={question}
        />
        <br></br><br></br>
       
        <button type ="button" onClick={askQuestion}>Ask</button>

       <h2>{result}</h2>

       
      
    </div>
     {/* <div>alert({{result}})</div> */}
        </>
  )
}

export default App
