import MainPage from "./MainPage"
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./sign-in/SignIn.js";
import SignUp from "./sign-up/SignUp.js";
import UserContext from "../contexts/userContext";
import Checkout from "./checkout/Checkout";

export default function App(){

    const [users, setUsers] = useState([]);
    const [cartItens,setCartItens] = useState([]);
    
    return (
        <UserContext.Provider value={{users, setUsers, cartItens, setCartItens}}>
        <BrowserRouter>
		
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/sign-up/" element={<SignUp/>}/>
                <Route path="/sign-in/" element={<SignIn />}/>

                <Route path="/checkout/" element={<Checkout />}/>
			</Routes>
		</BrowserRouter>
        </UserContext.Provider>
    )
}
      
    
