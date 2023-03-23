
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const setCurrency = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        });

    }
    return (
        <div className='alert alert-secondary'>
                <span>Currency: </span>
            <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setCurrency(event.target.value)} value = {currency}>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;