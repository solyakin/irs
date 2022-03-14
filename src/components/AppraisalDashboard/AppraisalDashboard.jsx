import React from 'react';
import '../AppraisalDashboard/appraisaldashboard.css';
import BirthdayCard from '../BirthdayCard/BirthdayCard';
import appraisal from '../../assets/appraisal.svg';

const AppraisalDashboard = () => {
  return (
    <div className='appraisal-dashboard'>
        <div className="container">
            <div className="appraisal-wrapper d-flex justify-content-between">
                <div className="appraisal_">
                    <div className="appraisal-heading">
                        <h4>Appraisal Dashboard</h4>
                    </div>
                    <div className="top-tags d-flex justify-content-between align-items-center">
                        <div className="supervisor-assessment d-flex justify-content-center align-items-center">
                            <p>Supervisor's <br></br><span>Assessment</span></p>
                            <img src={appraisal} alt="book sheet icon" />
                        </div>
                        <div className="kpi">
                            <p>Edit KPI <br></br> <span>(Supervisor)</span></p>
                        </div>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th className='name'>Name</th>
                                <th>Year</th>
                                <th>Manager/Team Lead</th>
                                <th>Created Date</th>
                                <th>Status</th>
                                <th>View</th>
                            </tr>
                        </thead>

                        {/* <tr>
                            <td>Jane</td>
                            <td>2021</td>
                            <td>Awele Akemu</td>
                            <td>20/01/2022</td>
                            <td>Pending</td>
                            <td></td>
                        </tr> */}
                    </table>
                </div>
                <BirthdayCard />
            </div>
        </div>
    </div>
  )
}

export default AppraisalDashboard;