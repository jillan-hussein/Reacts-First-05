import {useState} from "react";

export default function Counter () {
// const state = useState (0);
// const number = state [0];
// const setNumber = state [1];

const [number, setNumber] = useState(0);
const numbers = [1,5,10,15,20];

// const icreaseNumber = () => {
//     setNumber (number + 1);
// }

// const decreaseNumber = () => {
//     setNumber (number - 1);
// }

    return (
        <div className="p-4 flex flex-col gap-3 items-center">
            <div className="flex gap-1 items-center flex-wrap">
                { numbers.map ( (num)=>(
                    <button 
                    key={num}
                    onClick={() => setNumber(number +  num)}
                    className="px-3 py-2 bg-blue-500 text-white rounded shadow w-24">+{num}</button>
                ) ) }
                </div>
                    <span className="text-3xl font-black">{number}</span>
                    <div className="flex gap-1 items-center flex-wrap">
                    { numbers.map ( (num)=>(
                        <button
                        key={num} 
                        onClick={() => setNumber(number -  num)}
                        className="px-3 py-2 bg-orange-500 text-white rounded shadow w-24 ">-{num}</button>
                    ) ) }
                    </div>
        </div>
    )

}