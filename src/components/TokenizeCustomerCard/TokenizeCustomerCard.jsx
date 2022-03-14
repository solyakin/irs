import React from 'react';
import '../TokenizeCustomerCard/style.css';

const TokenizeCustomerCard = () => {
  return (
    <div className='token-customer-card'>
        <form action="">
            <h5>Tokenize Customer's Card</h5>
            <input type="text" placeholder='Customer Full name'/>
            <input type="email" placeholder='Customer Email'/>
            <input type="phone" placeholder='Customer phone Number'/>
            <input type="number" placeholder='Customer Salary Account No:'/>
            <select name="bank" id="">
                <option value="">Select Bank</option>
                <option value="Access Bank">Access Bank</option>
                <option value="Access Bank">Access Bank</option>
                <option value="Access Bank">Access Bank</option>
                <option value="Access Bank">Access Bank</option>
            </select>
            <button type="submit">Proceed</button>
        </form>
    </div>
  )
}

export default TokenizeCustomerCard