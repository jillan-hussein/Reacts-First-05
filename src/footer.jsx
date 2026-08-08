import Button from "./Components/atoms/Button"
import Input from "./Components/atoms/Input"
import InputField from "./Components/molecules/InputField"

export default function Footer() {
    return(
        <footer>
            <div>All rights reserved 2020</div>
            <div>
                <div>
                    <label htmlFor="user-name">Name</label>
                    <input id="user-name"/>
                </div>
                <div>
                    <label htmlFor="user-email">Email</label>
                    <input id="user-email"/>
                </div>
                <input type="email" placeholder="Type your email here"/>
                <button className="px-2 py-1 rounded-2 bg-gray-200 shadow-2xl mx-2 text-pink-800 cursor-pointer hover:scale-95">Send</button>

                <section className="p-3">
                <InputField type="text" text="Name" placeholder="Your Name" />
                <InputField type="text" text="Mobile" placeholder="01xxxxxxxxx" />
                <InputField type="email" text="Email" placeholder="Your Mail" />
                <InputField type="password" text="Password" placeholder="***********" />
                <InputField type="password" text="Password Confirmation" placeholder="***********" />
                </section>

                <Button title="Subscribe now" variant='red' fontColor="white" fontSize='xl' btnPad='center'/>
            </div>
            </footer>
    )
}