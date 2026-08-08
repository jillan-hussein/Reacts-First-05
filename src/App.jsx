import Header from "./header"
import Footer from './footer'
import Alert from "./Components/molecules/Alert"
import Button from "./Components/atoms/Button"

export default
function App() {
    return(
        <div clasName="p-4">
        <Header />

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