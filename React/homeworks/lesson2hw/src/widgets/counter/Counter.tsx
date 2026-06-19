import { useState } from "react";
import './ui/Counter.css'
import RoundButton from "../../features/round-button/RoundButton";
import { DoNotCall } from "../../features/do-not-call/DoNotCall";


export default function Counter() {
    const [count, setCount] = useState<number>(0);
    return <div className='container'>
        {/* <div className='counter'>
            <RoundButton label="-" action={() => setCount(count - 1)} />
            <span className='app-cnt'>{count}</span>
            <RoundButton label="+" action={() => setCount(count + 1)} />
        </div> */}

        <DoNotCall />
    </div>;
}