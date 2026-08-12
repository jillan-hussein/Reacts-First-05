import {useState} from "react";
import Button from "../atoms/Button";

export default function UserData() {
    const [username, setUsername] = useState("Guest");
 
    // const changeName = () => {
    //     setUsername("Jillan");
    // }

    return(

        <div className="flex gap-3 items-center">
        <span className="font-bold text-pink-600">Your Name:</span>
        <span className="font-bold border-2  border-gray-200 px-4 rounded-xl bg-gray-200">{username}</span>
        <Button title="Change my name" onClick={() => setUsername('Jillan')}/>
        </div>

    )
}