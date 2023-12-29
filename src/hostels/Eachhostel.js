import React from 'react'
import Fetching from './Fetching'
import Data from './Dataofhostel'

function Eachhostel() {

  const [data,setdata] = React.useState(Data);

  const fun =  (category) => {
     const ndata =  Data.filter((ele) =>{
        return ele.fees <= category;
     })
     let cl = "#" + Math.floor(Math.random()*16000000).toString();
   let main = document.querySelector(".main");
   // body.style.backgroundColor = cl;
   main.style.backgroundColor = cl;
     setdata(ndata);
  }

  const fun4 = (category) =>{
   const filt = Data.filter((ele) =>{
    return ele.fees > 5000

   })
   let cl = "#" + Math.floor(Math.random()*16000000).toString();
   let main = document.querySelector(".main");
   // body.style.backgroundColor = cl;
   main.style.backgroundColor = cl;
   setdata(filt);

  }

 const fun2 = (ar1,ar2) =>{
    let filt = Data.filter((ele) =>{
      return ele.fees >= ar1 && ele.fees <= 4000;
    })
    let cl = "#" + Math.floor(Math.random()*16000000).toString();
   let main = document.querySelector(".main");
   // body.style.backgroundColor = cl;
   main.style.backgroundColor = cl;
    setdata(filt);
 }


  const Members = (memb)=>{
   let filt = Data.filter((ele)=>{
    return ele.no_of_cot  === memb;
   })
   let cl = "#" + Math.floor(Math.random()*16000000).toString();
   let main = document.querySelector(".main");
   // body.style.backgroundColor = cl;
   main.style.backgroundColor = cl;
   setdata(filt);
  }

  const type =(typ)=>{
     let filt = Data.filter((ele)=>{
      return ele.type === typ;
     })
     let cl = "#" + Math.floor(Math.random()*16000000).toString();
   let main = document.querySelector(".main");
   // body.style.backgroundColor = cl;
   main.style.backgroundColor = cl;

     setdata(filt);
  }

  

  return (
    <>
      <header>
         <h1>Select Awesome Hostel</h1> <br></br>
         <div className='btns'>
         <button className='btn' onClick={()=> fun(3000)}> Below 3000 Rs</button> 
         <button className='btn' onClick={()=> fun2(3000,4000)}> Between 3000 and 4000 Rs</button> 
         <button className='btn' onClick={()=> fun2(4000,5000)}> 4000 to 5000 Rs</button> 
         <button className='btn' onClick={()=> fun4(5000)}> Above 5000 Rs</button> 
         <button className='btn' onClick={()=> Members(4)}> 4 Members_Room</button> 
         <button className='btn' onClick={()=> Members(3)}> 3 Members_Room</button> 
         <button className='btn' onClick={()=> Members(4)}> 2 Members_Room</button> 
         <button className='btn' onClick={()=> type("pg (cot-basis)")}> PG type</button> 
         <button className='btn' onClick={()=> type("flat")}> Flat</button> 

         </div>
          
      </header>
       
      <Fetching dat = {data}/>

      <br></br>
      <div className='footer'>
       <div>Contact :</div> 
        <div>Mobile NO : 9373052232</div>
        <div>Email Id  : admin@gmail.com</div>
        <div>Address   : Kundan Park, Dharmaraj chowk , Pune 411 035</div>
      </div>
    </> 
  )
}  

export default Eachhostel;
