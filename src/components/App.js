import MainPage from "./MainPage"
import { useState } from "react";
import {  Routes, Route, Navigate, useLocation } from "react-router-dom";
import SignIn from "./sign-in/SignIn.js";
import SignUp from "./sign-up/SignUp.js";
import UserContext from "../contexts/userContext";
import Checkout from "./checkout/Checkout";
import Product from "./Product";
import "./reset.css"

export default function App() {

    const location = useLocation();
    const serializedUser = localStorage.getItem("userTechstore");
    const loggedUser = JSON.parse(serializedUser)
    const [users, setUsers] = useState(loggedUser);
    const [cartItens, setCartItens] = useState([]);

    function cartVerify(obj) {
        const sameItem = cartItens.filter(p => p.productId === obj.productId);
        if (sameItem[0]) {
            return;
        }
        setCartItens([...cartItens, obj]);
    }


    return (
        <UserContext.Provider value={{ users, setUsers, cartItens, cartVerify, setCartItens }}>
            

                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={loggedUser? <MainPage/> : <Navigate replace to={'sign-in'}/>} />
                    <Route path="/sign-up/" element={<SignUp />} />
                    <Route path="/sign-in/" element={loggedUser? <Navigate replace to={'/'}/>: <SignIn/>} />
                    <Route path="/checkout/" element={<Checkout />} />
                    <Route path="/product/:idProduct" element={<Product />}></Route>
                </Routes>
           
        </UserContext.Provider>
    )
}


