import React, { useState } from 'react';
import './counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
             <h1 className="padding"> Counter</h1>
            <div className="padding">
           
         <div id="outer">
             <div class="inner">
			      <button type="submit" onClick={() => setCount(count + 1)}><i class="fa fa-file-text-o"></i>Increment</button></div>
		     <div class="inner">
		        <button type="submit" onClick={() => setCount(count -1 )}><i class="fa fa-code"></i> Decrement</button></div>	
		</div>
        </div>
        <h1 className="padding"> Counter value is : {count}</h1>
		</div>
    )
}

export default Counter
