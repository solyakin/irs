import React from 'react';
import { useState } from 'react';
import arrowbtn from '../../assets/arrow.svg';
import '../LeaveDashboard/leavedashboard.css';
import ProgressBar from '../ProgressBar/ProgressBar';

const LeaveDashboard = () => {

    const [data, setData] = useState({
        bgcolor: "#6a1b9a", 
        completed: 60
    })

  return (
    <div className='leave-dashboard'>
        <div className="heading d-flex align-items-center">
            <img src={arrowbtn} alt="left arrow icon" />
            <p>LEAVE</p>
        </div>
        <div className="grey-wrapper">
            <div className="top-tabs">
                <div className="leave-db">
                    <p>LEAVE DASHBOARD</p>
                </div>
                <div className="apply-leave">
                    <p>APPLY FOR LEAVE</p>
                </div>
                <div className="leave-record">
                    <p>SUPERVISOR'S LEAVE RECORD</p>
                </div>
            </div>
            <div className="leave-count">
                <div className="item-box">
                    <div className="title d-flex justify-content-between">
                        <p>Annual Leave Left <br></br><span>(12 day(s) left for 2021)</span></p>
                        <p className='count'>15</p>
                    </div>
                    <ProgressBar bgcolor={data.bgcolor} completed={data.completed}/>
                    <div className="leave-taken">
                        <p>Leave Taken = 10</p>
                        <p>{`${data.completed}`}</p>
                    </div>
                </div>
                <div className="item-box">
                    <div className="title d-flex justify-content-between">
                        <p>Total Sick Leave</p>
                        <p className='count'>15</p>
                    </div>
                    <ProgressBar bgcolor={data.bgcolor} completed={data.completed}/>
                    <div className="leave-taken">
                        <p>Leave Taken = 10</p>
                        <p>{`${data.completed}`}</p>
                    </div>
                </div>
                <div className="item-box">
                    <div className="title d-flex justify-content-between">
                        <p>Total Examination <br></br>Leave Left</p>
                        <p className='count'>7</p>
                    </div>
                    <ProgressBar bgcolor={data.bgcolor} completed={data.completed}/>
                    <div className="leave-taken">
                        <p>Leave Taken = 10</p>
                        <p>{`${data.completed}`}</p>
                    </div>
                </div>
                <div className="item-box">
                    <div className="title d-flex justify-content-between">
                        <p>Compassionate Leave</p>
                        <p className='count'>5</p>
                    </div>
                    <ProgressBar bgcolor={data.bgcolor} completed={data.completed}/>
                    <div className="leave-taken">
                        <p>Leave Taken = 10</p>
                        <p>{`${data.completed}`}</p>
                    </div>
                </div>
            </div>
            <div className="leave-application-count">
                <div className="list-heading">
                    <div className="list-title">
                        <p>My Leave Applications</p>
                    </div>
                    <div className="options">
                        <p>Print</p>
                        <p>Copy</p>
                        <p>PDF</p>
                        <p>CSV</p>
                        <p>Excel</p>
                        <p>Columns</p>
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
                    <tbody>
                        <tr>
                            <td>Jane</td>
                            <td>2021</td>
                            <td>Awele Akemu</td>
                            <td>20/01/2022</td>
                            <td>Pending</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default LeaveDashboard;