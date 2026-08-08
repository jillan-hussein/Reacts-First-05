import Input from "../atoms/Input"
import Label from "../atoms/Label"

export default function InputField ({text, type, placeholder}) {

    /**
     * text: string
     * type: the type of the input
     * placeholder: HTML input types
     */


    return(
        <div className="m-3 border-2 border-gray-200 p-2 rounded-2xl inline-flex gap-2">
            <Label text={text}/>
            <Input type={type} placeholder={placeholder}/>
        </div>
    )
}