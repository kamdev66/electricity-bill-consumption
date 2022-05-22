import './App.css';
import {useState} from 'react';

function App() {
  const [num,setNum]=useState('');
  const [final,setFinal]=useState(0)
  const handleSubmit=(e)=>{
    e.preventDefault(); 
   let origiNum=parseInt(num);
   let totalprice=0;
  
   if(origiNum>0){
     totalprice+=origiNum*2.25;
   }

   if(origiNum>100){
    totalprice+=(origiNum-100)*0.50;
  }

  if(origiNum>150){
    totalprice+=(origiNum-150)*0.86;
  }

  if(origiNum>200){
    totalprice+=(origiNum-200)*3.06;
  }

  if(origiNum>500){
    totalprice+=(origiNum-200)*1.04;
  }
  setFinal(totalprice);
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Enter the Consumption:  
          <input value={num}  onChange={(e)=>setNum(e.target.value)}/>
        </label>
        <br/>
        <button type='submit'>Calculate</button>
       <br/>
       <h1>Total Price :  {final}</h1>
      </form>
    </div>
  );
}

export default App;
