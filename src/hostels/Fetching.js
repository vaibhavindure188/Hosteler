import React from 'react'
import './st1.css'

function Fetching({dat}) {
  return (
    <div className='main'>
     
      
      {dat.map((ele) =>{
        return(

            <div className='hostel'>
                <div  key={ele.sr_no}>
                 <div>
                   <div>Hostel Name :  {ele.hname}</div>
                   <div>Owner : {ele.owner}</div>
                   <div>Fees : {ele.fees}</div>
                   <div>Address : {ele.address}</div>
                   <div>Type : {ele.type}</div>
                   <div>Members In a Room : {ele.no_of_cot}</div>
                   <div>Light Bill : {ele.light_bill}</div>
                   <div>Washroom : {ele.washroom}</div> 
                   <div>Contact No : {ele.contact_no}</div>
                   <a href={ele.link}> Location : clickhere </a> <br></br>
                   <a href={ele.more}> View more about this hostel</a>
                    <br></br> <br></br> 
                 </div>
                </div>
            </div>
        )
            
        })
      }
    </div>
  )
}

export default Fetching;
