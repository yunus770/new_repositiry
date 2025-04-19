import React from "react";
import './greeting.css'

const Greeting = ({name}) => {
    const getGreeting = () => {
        const hour =  new Date().getHours()
        
        if (hour<12) {
            return 'Добрый утро!'
        }
        else if (hour<18) {
            return 'Добрый день!'
        } 
        else {
         return 'Добрый вечер!'
        }
    };

    return (
        <div className='greeting'>
            {getGreeting()} {name}
        </div>
    )
}

export default Greeting;