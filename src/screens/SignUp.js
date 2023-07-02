import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';

const SignUp = () => {

    let navigate = useNavigate();

    const [credential, setCredential] = useState({name:"", email:"", password:"", location:""})
    let [address, setAddress] = useState("");

    const handleClick = async (e) => {
        e.preventDefault();
        let navLocation = () => {
          return new Promise((res, rej) => {
            navigator.geolocation.getCurrentPosition(res, rej);
          });
        }
        let latlong = await navLocation().then(res => {
          let latitude = res.coords.latitude;
          let longitude = res.coords.longitude;
          return [latitude, longitude]
        })
        // console.log(latlong)
        let [lat, long] = latlong
        console.log(lat, long)
        const response = await fetch("http://localhost:5000/api/auth/getlocation", {
        // const response = await fetch("https://fastnfood.onrender.com/api/auth/getlocation", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ latlong: { lat, long } })
    
        });
        const { location } = await response.json()
        console.log(location);
        setAddress(location);
        setCredential({ ...credential, [e.target.name]: location })
      }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser",{
        // const response = await fetch("https://fastnfood.onrender.com/api/createuser",{
            method:'POST',
            headers:{
                "Accept":"*/*",
                "User-Agent":"Thunder Client (https://www.thunderclient.com)",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name:credential.name, email:credential.email, password:credential.password, location:credential.location})
        })
        const json = await response.json();
        console.log(json);

        if(!json.success){
            alert("Enter the valid credential");
        }else{
            navigate("/login")
        } 

        
    }

    const onChange = (event) => {
        setCredential({...credential,[event.target.name]:event.target.value})
    }



    // const handleClick = () => {

    // }

    return (
        <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
      <div>
      <Navbar />
      </div>

        <div className='container' >
          <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
            <div className="m-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" name='name' value={credential.name} onChange={onChange} aria-describedby="emailHelp" />
            </div>
            <div className="m-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" name='email' value={credential.email} onChange={onChange} aria-describedby="emailHelp" />
            </div>
            <div className="m-3">
              <label htmlFor="address" className="form-label">Address</label>
              <fieldset>
                <input type="text" className="form-control" name='address' placeholder='"Click below for fetching address"' value={address} onChange={(e)=>setAddress(e.target.value)} aria-describedby="emailHelp" />
              </fieldset>
            </div>
            <div className="m-3">
              <button type="button" onClick={handleClick} name="geolocation" className=" btn btn-success">Click for current Location </button>
            </div>
            <div className="m-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" value={credential.password} onChange={onChange} name='password' />
            </div>
            <button type="submit" className="m-3 btn btn-success">Submit</button>
            <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
          </form>
        </div>
      </div>
    )
}

export default SignUp;
