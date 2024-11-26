import { useState } from 'react';
import './calculator.css';
export default function Calulator() {
    let [displayValue,setDisplay] = useState('');
    let numbers = [["1", "2", "3","+"], ["4", "5", "6","-"], ["7", "8", "9","*"],[".","0","=","/"]];
    function inputValue(num) {
        try {
            if (typeof displayValue !== 'string') displayValue = '';
            if (num === '=') {
                displayValue = safeEval(displayValue);
            } else if (num === 'C') {
                displayValue = '';
            } else {
                displayValue += num;
            }
            setDisplay(String(displayValue));
        } catch (error) {
            console.error('Error in inputValue:', error);
            setDisplay('Error'); 
        }
    }
    function safeEval(expression) {
        const allowedChars = /^[0-9+\-*/(). ]+$/;
    
        if (!allowedChars.test(expression)) {
            throw new Error('Invalid input');
        }
        return Function(`"use strict"; return (${expression});`)();
    }
    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
            <p className="black">
                Calculator
                <img 
                    src={isDarkMode ? "moon-regular.svg" : "sun-regular.svg"} 
                    onClick={() => setIsDarkMode(!isDarkMode)} 
                    alt={isDarkMode ? "Moon Icon" : "Sun Icon"} 
                />
            </p>
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