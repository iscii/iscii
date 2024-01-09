import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./components/Home";
import Nav from "./components/Nav";
import CounterProtected from "./components/middleware/CounterProtected";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

import { useScrollPercentage } from "react-scroll-percentage";

function App() {
    const [ref, percentage] = useScrollPercentage({ threshold: 0 });
    // useEffect(() => setPercentage(percentage), [percentage]);

	return (
        // can create a new div for format if i ever want to use empty space. can move into a component that defines structure of page and wraps other components.
        <div className="grid grid-cols-4 w-full h-full" ref={ref}>
            <div className="col-start-2 col-span-2">
                <AuthProvider>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path='/signin' element={<CounterProtected />}>
                            <Route path="/signin" element={<Signin />} />
                        </Route>
                        <Route path='/signup' element={<CounterProtected />}>
                            <Route path="/signup" element={<Signup />} />
                        </Route>

                        <Route path="*" element={<Home />} />
                    </Routes>
                </AuthProvider>
            </div>
        </div>
	);
}

export default App;
