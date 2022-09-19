import { HeaderStyle, Button } from "../themes/themes";
import { useState, useContext } from "react";
import UserContext from "../contexts/userContext";

import { useNavigate, useResolvedPath } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Header() {

    const [clicked, setClicked] = useState(false);
    const { cartItens, setCartItens} = useContext(UserContext);
    const navigate=useNavigate();
    
    const { users, setUsers } = useContext(UserContext);

    function removeCartProduct(obj) {
        const filteredCartItens = cartItens.filter(p => p.name !== obj.name);
        setCartItens([...filteredCartItens])
    }
    console.log(users, '*************')
    function verifyLogin(){
        if(users.length===0){
            
            setTimeout(() => {
                navigate('/sign-in')
            }, 2000); 
            toast.error("Você não possui um login :c")
        }
         if(users.token!==0){
            navigate('/checkout')}
    }
    
    let acumulador = 0;
    cartItens.forEach(t =>  acumulador += Number(t.price));

    return (
        <>
            <ToastContainer/>
        <HeaderStyle>
                
            <div>
                <h2 onClick={() => navigate("/")}>Tech Store</h2>

                <div>
                    <ion-icon name="search-outline"></ion-icon>
                    <div> { cartItens[0] ? <div><p>{cartItens.length}</p></div> : null} <ion-icon onClick={() => !clicked ? setClicked(true) : setClicked(false)} name="cart-outline"></ion-icon></div>
                    <ion-icon name="person-circle" onClick={()=>{navigate('/sign-in')}}></ion-icon>
                </div>
            </div>
            <div style={{display:clicked === false ? "none" : "initial"}}>
                <h2>Seu carrinho:</h2>
                {cartItens[0] ? cartItens.map(p => <div> <img src={p.image}></img> <div><p>{p.name}</p> <p>R$: {(p.price / 100).toFixed(2)}</p></div> <ion-icon onClick={() => removeCartProduct(p)} name="trash"></ion-icon> </div> ) : <h2>Seu carrinho esta vazio</h2>}
                {cartItens[0] ? <><h2>Total: {(acumulador / 100).toFixed(2)}</h2><Button onClick={verifyLogin}>Finalizar compra</Button></> : null}
            </div>
    </HeaderStyle >
    </>
)
}