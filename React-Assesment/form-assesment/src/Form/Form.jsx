import React, { useState } from 'react'


function Form() {

    const [formdata,setFormData] = useState({
        email:"",
        password:"",
        retypePassword:"",
        firstname:"",
        lastname:"",
        phonenumber:"",
        address:"",
        town:"",
        ragion:"",
        postcode:"",
        country:""
    })

    const handleInputdata = (event)=>{
        const fieldName = event.target.name;
        const newValue = event.target.value;
        
        setFormData((currData) => {
        
            return {...currData, [fieldName]: newValue};
        })
        
    }


    const handlesubmit = (e)=>{
       e.preventDefault();
       console.log(formdata);
       
       setFormData({
        email:"",
        password:"",
        retypePassword:"",
        firstname:"",
        lastname:"",
        phonenumber:"",
        address:"",
        town:"",
        ragion:"",
        postcode:"",
        country:""
    })
    }
  return (
    <div>
    <div className='container'>
    <h3>Register here</h3>
    <h2>USER REGISTRATION</h2>
    <br />
    <h5>Fields marked<span style={{color:"red"}}>*</span>are required</h5>
    <form onSubmit={handlesubmit}>
        <label htmlFor="">Email<span style={{color:"red"}}>*</span></label>
        <input type="text" name="email" id="email" placeholder=''  value={formdata.email} onChange={handleInputdata}></input><img src="https://img.icons8.com/?size=100&id=93444&format=png&color=000000" alt=""  height={25} style={{marginLeft:"-25px"}}/>
        <br /><br />
        <label htmlFor="">Password<span style={{color:"red"}}>*</span></label>
        <input type="password" name="password" id="password" value={formdata.password} onChange={handleInputdata}/>
        <br /><br />
        <label htmlFor="">Retype Password<span style={{color:"red"}}>*</span></label>
        <input type="password" id='retypePassword' name='retypePassword' value={formdata.retypePassword} onChange={handleInputdata}/>
        <br /><br />
        <label htmlFor="">First Name<span style={{color:"red"}}>*</span></label>
        <input type="text" id='firstname' value={formdata.firstname} onChange={handleInputdata} name='firstname' />
        <br /><br />
        <label htmlFor="">Last Name<span style={{color:"red"}}>*</span></label>
        <input type="text" id='lastname' name='lastname' value={formdata.lastname}  onChange={handleInputdata}/>
        <br /><br />
        <label htmlFor="">Phone Number<span style={{color:"red"}}>*</span></label>
        <input type="text" id='phonenumber' value={formdata.phonenumber} name='phonenumber' onChange={handleInputdata}/>
        <br /><br />
        <label htmlFor="">Address<span style={{color:"red"}}>*</span></label>
        <input type="text" name="address" id="address" value={formdata.address} onChange={handleInputdata}/>
        <br /><br />
        <input type="text" name="address" id="address" onChange={handleInputdata}/>
        <br /><br />
        <label htmlFor="">Town <span style={{color:"red"}}>*</span></label>
        <input type="text" name="town" id="town" value={formdata.town} onChange={handleInputdata} />
        <br /><br />
        <label htmlFor="">Ragion <span style={{color:"red"}}>*</span></label>
        <input type="text" name="ragion" id="ragion" value={formdata.ragion}  onChange={handleInputdata}/>
        <br /><br />
        <label htmlFor="">Postcode <span style={{color:"red"}}>*</span></label>
        <input type="text" name="postcode" id="postcode" value={formdata.postcode}  onChange={handleInputdata}/>
        <br /><br />
        <label htmlFor="">Country<span style={{color:"red"}}>*</span> </label>
        <input type="text" name='country' id='country' value={formdata.country} onChange={handleInputdata}/>
        <br /><br />
        <button className="btn btn-success">Register</button>

    </form>

        

    </div>
    </div>
  )
}

export default Form