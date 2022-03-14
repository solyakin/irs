import React from 'react'
import '../HelpDeskComponent/help-desk-style.css';

const HelpDeskComponent = () => {
  return (
    <div className="help-component">
        <h4>HELP DESK</h4>
        <div className="action_btns">
            <div className="dboard">
                <p>Dashboard</p>
            </div>
            <div className="create-ticket">
                <p>Create <br></br> New Ticket</p>
            </div>
            <div className="my-ticket">
                <p>My <br></br>Ticket</p>
            </div>
            <div className="assign-ticket">
                <p>TIcket Assigned <br></br> to me</p>
            </div>
            <div className="pending-ticket">
                <p>Pending <br></br>Tickets</p>
            </div>
        </div>
        <div className="ticket-counts">
            <div className="pending">
                <p>0</p>
                <p>Pending</p>
            </div>
            <div className="open">
                <p>0</p>
                <p>Open</p>
            </div>
            <div className="answered">
                <p>0</p>
                <p>Answered</p>
            </div>
            <div className="solved">
                <p>0</p>
                <p>Solved</p>
            </div>
        </div>
        <div className="ticket-table">
            <table>
                <thead>
                    <tr>
                        <th className='name'>Ticket ID</th>
                        <th>Status</th>
                        <th>Title</th>
                        <th>Created By</th>
                        <th>Assigned To</th>
                        <th>Unit</th>
                        <th>Created at</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default HelpDeskComponent