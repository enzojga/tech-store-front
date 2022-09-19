import { HeaderStyle, Button, BigButton } from "../themes/themes";
import { useState, useContext } from "react";
import UserContext from "../contexts/userContext";

import { useNavigate, useResolvedPath } from "react-router-dom";



export default function Header() {

    const [clicked, setClicked] = useState(false);

    const [type, setType] = useState(null);
    const { cartItens, setCartItens } = useContext(UserContext);
    const navigate = useNavigate();
    console.log(cartItens);

    const { users, setUsers } = useContext(UserContext);

    function removeCartProduct(obj) {
        const filteredCartItens = cartItens.filter(p => p.name !== obj.name);
        setCartItens([...filteredCartItens])
    }
    console.log(users, '*************')

    function verifyLogin() {
        if (users.length === 0) {
            toast.error("Você não possui um login :c")
            setTimeout(() => {
                navigate('/sign-in')
            }, 2000);
        }
        if (users.token !== 0) {
            navigate('/checkout')

        }
    }

    let acumulador = 0;
    cartItens.forEach(t => acumulador += Number(t.price));

    return (
        <>

        <HeaderStyle>
                
            <div>
                <h2 onClick={() => navigate("/")}>Tech Store</h2>


                <div>
                    <h2 onClick={() => navigate("/")}>Tech Store</h2>
                    <div>
                        <div onClick={() => { !clicked ? setClicked(true) : setClicked(false); setType(0) }}> {cartItens[0] ? <div><p>{cartItens.length}</p></div> : null} <ion-icon name="cart-outline"></ion-icon></div>
                        <ion-icon onClick={() => { !clicked ? setClicked(true) : setClicked(false); setType(1) }} name="person-circle"></ion-icon>
                    </div>
                </div>
                <div style={{ display: clicked === false ? "none" : "initial" }}>
                    {type === 0 ? <><h2>Seu carrinho:</h2>
                        {cartItens[0] ? cartItens.map(p => <div> <img src={p.image}></img> <div><p>{p.name}</p> <p>R$: {(p.price / 100).toFixed(2)}</p></div> <ion-icon onClick={() => removeCartProduct(p)} name="trash"></ion-icon> </div>) : <h2>Seu carrinho esta vazio</h2>}
                        {cartItens[0] ? <><h2>Total: {(acumulador / 100).toFixed(2)}</h2><Button onClick={verifyLogin}>Finalizar compra</Button></> : null}</> :
                        users.length === 0 ? <div style={{ justifyContent: "space-between", alignItems: "center" }}>
                            <BigButton onClick={() => navigate("sign-in")} color="Blue">Logar</BigButton>
                            <h2>Não tem conta?</h2>
                            <BigButton onClick={() => navigate("sign-up")} color="Red">Cadastrar</BigButton>
                        </div> :
                            <h1>Ola {users.name}</h1>
                    }
                </div>
            </HeaderStyle >
        </>
    )
}