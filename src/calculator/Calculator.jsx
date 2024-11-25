import { useState } from 'react';
import './calculator.css';
export default function Calulator() {
    let [displayValue,setDisplay] = useState('');
    let numbers = [["1", "2", "3","+"], ["4", "5", "6","-"], ["7", "8", "9","*"],[".","0","=","/"]];
    function inputValue(num){
        displayValue = num === '='? eval(displayValue) : num == 'C'? '': displayValue + num;
        setDisplay(String(displayValue));
    }
    return (
        <div className="container">
            <h1>Calculator</h1>
            <input className='ip' type="text" value={displayValue}/>
            <button className='btn' onClick={()=>{inputValue('C')}}>C</button>
            <div>
                {numbers.map(row => (
                    <div key={row}>
                        {row.map(num => (
                            <button className='btn' onClick={()=>{inputValue(num)}}>{num}</button>
                        ))
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}