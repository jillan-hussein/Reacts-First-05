import {useState} from "react";

export default function Counter () {
// const state = useState (0);
// const number = state [0];
// const setNumber = state [1];

const [number, setNumber] = useState(0);

const icreaseNumber = () => {
    setNumber (number + 1);
}

const decreaseNumber = () => {
    setNumber (number - 1);
}

    return (
        <div className="p-4 flex gap-3 items-center">
                    <button 
                    onClick={icreaseNumber}
                    className="px-3 py-2 bg-blue-500 text-white rounded shadow w-24">+</button>
                    <span className="text-3xl font-black">{number}</span>
                    <button 
                    onClick={decreaseNumber}
                    className="px-3 py-2 bg-orange-500 text-white rounded shadow w-24 ">-</button>
        </div>
    )

}