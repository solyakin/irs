import React from 'react';
import '../SuggestionForm/suggestionForm.css';

const SuggestionForm = () => {
  return (
    <div className='suggestion-form'>
        <form action="">
            <h4>PLEASE FILL THE FORM BELOW</h4>
            <input type="text"  placeholder='Name (Optional)'/>
            <input type="text"  placeholder='Pick the type of feedback to provide'/>
            <input type="text"  placeholder=''/>
            <textarea placeholder='Enter your comments below'></textarea>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default SuggestionForm