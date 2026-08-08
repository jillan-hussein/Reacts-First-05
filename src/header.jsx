import Button from "./Components/atoms/Button";

export default function Header () {
    return (
        <header className="p-2 mb-2 text-center bg-pink-500 border-b-amber-50 border-b-2">
            <h1 className="text-xl font-bold text-amber-50">Shopping Online</h1>
            <div className="p-3">
                <Button title='Save' variant='orange' fontColor='blue' />
                <Button title='Cancel' variant='blue' fontSize='3xl' btnPad='center'/>
            </div>
        </header>
    )
}