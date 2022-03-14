import React from 'react';
import '../InterviewForm/Interview-form.css';

const InterviewForm = () => {
  return (
    <div className='interview-form'>
        <form action="">
            <h4>INTERVIEW ASSESSMENT FORM</h4>
            <div className="form_wrapper d-flex">
                <div className="form-group-1">
                    <input type="text" name="" id="" placeholder='Applicants Name (Surname in Caps)' />
                    <input type="text" name="" id="" placeholder='Department'/>
                    <input type="text" name="" id="" placeholder='Location' />
                    <input type="text" name="" id="" placeholder='Interviewers Name'/>
                </div>
                <div className="form-group-2">
                    <input type="text" name="" id="" placeholder='Position Applied For'/>
                    <input type="text" name="" id="" placeholder='Age' />
                    <input type="text" name="" id="" placeholder='Qualification/Certification'/>
                    <input type="text" name="" id="" placeholder='Interviewers Email'/>
                    <div className="btn">
                        <button>Next</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default InterviewForm;