import React, { useEffect, useState } from 'react';
import './CSS/ContactMeSection.css'
import CustomAlert from './CustomAlert';
import validateEmail from './EmailValidator';
const ContactMeSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [enquiry, setEnquiry] = useState('Type Your Enquiry');
    const [comments, setComments] = useState('');
    const [initialValues, setInitialValues] = useState(null);
    const [showGAlert, setshowGAlert] = useState(false);
    const [showRAlert, setshowRAlert] = useState(false);
    const [validate, setValidate] = useState(false);
    
    useEffect(()=>{
        if(name && email && comments && enquiry) setValidate(true);
    },[email,enquiry,comments,name])
    
    function formHander(e) {
       
        e.preventDefault();
        if(!validateEmail(email)){
            setshowRAlert(true);
        }
        else{
            setshowGAlert(true)
        }
        setInitialValues({name,email,enquiry, comments})
    }
    return (
        <div className='form-parent-container' id='contacts'>
            <div className='header-form-container'>
                <h1 className='form-heading'>Contact Me</h1>
                <form onSubmit={formHander} className='form-container'>
                    <fieldset className='form-fields'>
                        <label htmlFor='firstName' className='form-labels element'>Name</label>
                        <input type='text' id='firstName' className='form-inputs element' value={name} onChange={e => setName(e.target.value)}/>
                        {name?null:<p className='element error'>*required</p>}

                        <label htmlFor='email' className='form-labels element'>Email Address</label>
                        <input type='text' id='email' className='form-inputs element' value={email} onChange={e => setEmail(e.target.value)} />
                        {email?null:<p className='element error'>*required</p>}

                        <label htmlFor='enquiry' className='form-labels element'>Type your enquiry</label>
                        <select name="enquiry" id="enquiry" className='form-selects element' value={enquiry} onChange={e => setEnquiry(e.target.value)} >
                            <option value="freelance" className='form-options'>Freelance Project Proposal</option>
                            <option value="part-time" className='form-options'>Part Time Job Offer</option>
                            <option value="fulltime" className='form-options'>Full Time Job Offer</option>
                            <option value="help" className='form-options'>Help Needed</option>
                        </select>

                        <label htmlFor='comments' className='form-labels element' >Your message</label>
                        <textarea id="comments" className='form-textarea element' rows="2" value={comments} onChange={e => {setComments(e.target.value)}} />
                        <button disabled={!validate} type='submit' className='form-button element' >Submit</button>
                        {showGAlert && <CustomAlert setFalse={setshowGAlert} color='green' title = "Hi there..." msg = {`Thanks for your submission ${name}, we will get back to you`} />}
                        {showRAlert && <CustomAlert setFalse={setshowRAlert} color='red' title = "Oh no.." msg = {`Your email is not correct ${name}, Please try again.`} />}
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default ContactMeSection;