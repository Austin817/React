import { useState } from "react";

function Hooks () {
    // let a = 1

    // [值, 寫入的方法]
    const [a, setA] = useState(1);

    const [text, setText] = useState('卡卡西');

    function handleOnClick() {
        setA(a + 1)
        console.log(a);
    }

    return (<div>
        Hooks
        <button onClick={handleOnClick
            // a++;
            
            // setA(a + 1)
            // console.log(a);
            
        }>{a}</button>


        {text}
        <input type="text" value={text} onChange={(event) => {
            console.log(event.target.value);
            setText(event.target.value)
        }}/>

    </div>)
}


export default Hooks;
