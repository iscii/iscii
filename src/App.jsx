import React from "react";
import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "./contexts/Context";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import CounterProtected from "./components/middleware/CounterProtected";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import ScrollToAnchor from "./components/utilities/ScrollToAnchor";

function App() {
	return (
        // can create a new div for format if i ever want to use empty space. can move into a component that defines structure of page and wraps other components.
        <div className="grid grid-cols-12 w-full h-full">
            <div className="col-start-3 col-span-8">
                <ContextProvider>
                    <Nav />
                    <ScrollToAnchor />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />

                        <Route path='/signin' element={<CounterProtected />}>
                            <Route path="/signin" element={<Signin />} />
                        </Route>
                        <Route path='/signup' element={<CounterProtected />}>
                            <Route path="/signup" element={<Signup />} />
                        </Route>

                        <Route path="*" element={<Home />} />
                    </Routes>
                </ContextProvider>
            </div>
        </div>
	);
}

export default App;
