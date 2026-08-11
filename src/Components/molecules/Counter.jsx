export default function Counter () {
    const increaseNumber = () => {
        console.log ("Welcome")
    }

    return (
        <div className="p-4 flex gap-3 items-center">
                    <button 
                    onClick={increaseNumber}
                    className="px-3 py-2 bg-blue-500 text-white rounded shadow w-24">+</button>
                    <span className="text-3xl font-black">0</span>
                    <button className="px-3 py-2 bg-orange-500 text-white rounded shadow w-24 ">-</button>
        </div>
    )

}