export default function Button({variant, fontColor, fontSize, btnArea, title}) {
    
    // const variant = props.variant;
    // const fontColor = props.fontColor;
    // const fontSize = props.fontSize;
    // const btnArea = props.btnArea;

    /**
     * size: sm | null
     *btnArea: center : left
     * variant: green | red | blue | yellow 
     * fontSize: xl | 2xl | 3xl | 4xl
     * fontColor: white | blue
     * title: string
    */

    let btnPad = btnArea == 'center'? "self-start" : "self-center" ;
    

    let bgColor = " bg-gray-200";

    switch (variant) {
        case "blue":
            bgColor = "bg-blue-500";
            break;
        case "red":
            bgColor = "bg-red-400";
            break;
        case "yellow":
            bgColor = "bg-yellow-400";
            break;
        case "orange":
            bgColor = "bg-orange-400";
            break;
        case "green":
            bgColor = "bg-green-400";
            break;
    }

    let textColor = "text-pink-800";

    switch (fontColor) {
        case "white":
            textColor = "text-white";
            break;
        case "blue":
            textColor = "text-blue-800";
            break;
    }

    let size = "text-lg"

    switch (fontSize) {
        case "xl":
            size = "text-xl";
            break;
        case "2xl":
            size = "text-2xl";
            break;
        case "3xl":
            size = "text-3xl";
            break;
        case "4xl":
            size = "text-4xl";
            break;
    }

    return(
        <button 
        className={`px-2 py-1 rounded-lg shadow-2xl cursor-pointer hover:scale-95 ${bgColor} ${textColor} ${size} ${btnPad}`}
        >
            {title}
            </button>
    )
}