import React from 'react';
import '../id-form/id-form.css';
import download from '../../assets/download.png';

const IDFORM = () => {
  return (
    <div className='id-form'>
        <div className="container">
            <div className="form_wrapper d-flex align-items-center">
                <div className="blue-card">
                    <p>STAFF</p>
                    <h1>ID CARD FORM</h1>
                </div>
                <div className="form">
                    <form action="">
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Surname' />
                        <input type="email" placeholder='Official Email-address' />
                        <input type="text" placeholder='Department' />
                        <div className="signature">
                            <p>Signature Upload</p>
                            <span>Please click on the icon below to upload</span>
                            <label htmlFor="upload-photo">
                                <img src={download} alt="download file icon" width="25px" />
                            </label>
                            <input type="file" name="" id="upload-photo"/>
                        </div>
                        <div className="passport">
                            <p>Passport Upload</p>
                            <span>In white background and dressed in corporate outfit</span>
                            <label htmlFor="upload-photo2">
                                <img src={download} alt="download file icon" width="25px" />
                            </label>
                            <input type="file" name="" id="upload-photo2" />
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IDFORM