export default function Input ({type, placeholder}) {
    /**
     * type: HTML input types
     * placeholder: sring
     */


    return (
        <input 
        className="outline-none"
         type={type} placeholder={placeholder}
        />
    )

}