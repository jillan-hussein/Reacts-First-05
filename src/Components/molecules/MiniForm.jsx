import { useState } from "react"

export default function MiniForm (){

    const [firstNameLength, setFirstNameLength] = useState(0);

    return(
        <div className="border-2  border-blue-500 rounded-xl p-5">
            <span className="font-bold text-blue-500 flex justify-center mb-2">Mini Form</span>

            <div className="flex gap-2">
                <label htmlFor="firstName">First name:</label>
                <input className="rounded-xs shadow bg-gray-200" type="text" id="firstName" onChange={(e) => setFirstNameLength(e.target.value.length)}/>
                <span>{firstNameLength}/30</span>
            </div>
            </div>
    )
}