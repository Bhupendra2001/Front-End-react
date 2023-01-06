
import React,{useState} from "react";
import './App.css'

 export default function  App(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [country , setCountry] = useState('');
  const [email, setEmail] = useState('')
  const [profile , setProfile] = useState()

 

return (
  <div>
    <form id="a" onSubmit={(e)=>{  e.preventDefault()}}>

      <div>
        <label> FirstName  </label>
        <input value= {firstName} onChange={(e)=> setFirstName(e.target.value)}/>
      </div>

      <div>
        <label> LastName </label>
        <input value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
      </div>

      <div>
        <label> Gender </label>
        <input value={gender} onChange={(e)=> setGender(e.target.value)}/>
      </div>

      <div>
        <label> Country </label>
        <input value={country} onChange={(e)=> setCountry(e.target.value)}/>
      </div>

      <div>
        <label> Email </label>
        <input value={email} onChange={(e)=> setEmail(e.target.value)}/>
      </div>

      <div>
        <label> Frofile </label>
        <input type="file" value={profile} onChange={(e)=> setProfile(e.target.value)}/>
      </div>
     <button type="submit" > Submit </button>
     <button type="reset" > ReSet</button>
    </form>
    < div className="abc">
    <p> USER DETAILS </p> <br/>
    {firstName && lastName && email && gender && country && profile &&
    <div>
      FirstName : {firstName} <br/>
      LastName : {lastName}   <br/>
      Gender : {gender}   <br/> 
      Country :{country}  <br/> 
      Email : {email}   <br/>
      profile : {profile}  <br/>
    </div>
 }

    </div>
  </div>
)
 }