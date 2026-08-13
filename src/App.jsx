import Header from "./header";
import Footer from "./footer";
import Alert from "./Components/molecules/Alert";
import Button from "./Components/atoms/Button";
import Counter from "./Components/molecules/Counter";
import UserData from "./Components/molecules/UserData";
import MiniForm from "./Components/molecules/MiniForm";
import Home from "./Components/pages/Home";
import Contact from "./Components/pages/Contact";
import About from "./Components/pages/About";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("Home");

  return (
    <div className="p-4">
      <div>
        <nav className="bg-gray-900 text-gray-100 p-2 flex gap-3">
          <button onClick={() => setPage("Home")}>Home</button>
          <button onClick={() => setPage("About")}>About</button>
          <button onClick={() => setPage("Contact")}>Contact</button>
        </nav>

        {page === "Home" && <Home />}
        {page === "About" && <About />}
        {page === "Contact" && <Contact />}
      </div>

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
            <Button
              variant="green"
              title="Ok"
              fontSize="sm"
              fontColor="white"
            />
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
      <Footer />
    </div>
  );
}
