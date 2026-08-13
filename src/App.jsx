import Header from "./header"
import Footer from './footer'
import Alert from "./Components/molecules/Alert"
import Button from "./Components/atoms/Button"
import Counter from "./Components/molecules/Counter"
import UserData from "./Components/molecules/UserData"
import MiniForm from "./Components/molecules/MiniForm"

export default
function App() {
    return(
        <div className="p-4">
        <Header />
        <MiniForm />
        <UserData />
        <Counter />
        <section>
            <Button title="+" />
            <span>0</span>
            <Button title="-" />
        </section>
        <section className="p-4">
            <Button title="Save" />
        </section>
        <section>
        <Alert>
            <h2 className="text-xl font-bold text-green-800">Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="text-end">
            <Button variant="green" title="Ok" fontSize="sm" fontColor="white" />
            </div>
        </Alert>
        <Alert>
            <h2 className="text-xl font-bold text-green-800">Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Alert>
        <Alert>
            <h2 className="text-xl font-bold text-green-800">Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Alert>
        <Alert>
            <h2 className="text-xl font-bold text-green-800">Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Alert>
        <Alert>
            <h2 className="text-xl font-bold text-green-800">Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Alert>
        </section>
        <Footer/>
        </div>
    )
}