import React, { useEffect,useState } from 'react'
import {useParams,Link} from "react-router-dom"

const EmpDetail = () => {
    
    const {empid} = useParams();

    const [empdata,empdatachange]= useState({})

    useEffect(() => {
        fetch(`http://localhost:8000/employee/${empid}`)
          .then((res) => res.json())
          .then((resp) => {
            console.log('Received data:', resp);
            empdatachange(resp);
          })
          .catch((err) => {
            console.error('Error fetching data:', err);
          });
      }, []); 

  return (
    <div>
        <div className='card' style={{"textAlign":"left"}}>
                 <div className='card-title'>
                     <h2>Employee Details</h2>
                 </div>
                 <div></div>
        </div>
        {empdata &&  
        <div style={{backgroundColor: '#fff', marginTop: '20px', padding: '20px', border: '4px solid teal', borderRadius: '8px' }}>
        <h1>The Employee name is :<b>{empdata.name}</b> ({empdata.id})</h1>
        <h3>Contact Details</h3>
        <h5>Email is : {empdata.email}</h5>
        <h5>Phone is : {empdata.phone}</h5>
        <Link className='btn btn-danger' to="/">Back to Listing</Link>
        </div>
}
    </div>
        
  )
}

export default EmpDetail