import { useState, useEffect } from 'react';

function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])

    return (
        <div className='Clock'>
            {date.toLocaleString([], { timeStyle: 'short' })}
        </div>
    );
}

export default Clock;