import React from 'react'
import { useState } from 'react';

const Profile = () => {
    const[name,setName]=useState("abi");
    const[age,setAge]=useState(20);
  return (
    <div>
        <h1>{name}</h1>
        <h2>Age:{age}</h2>
        <button onClick={()=>setName("sri")}>change Name</button>
        <button onClick={()=>setAge(25)}>Change Age</button>
        </div>
  );
};

export default Profile;