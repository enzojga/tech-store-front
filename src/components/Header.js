import { HeaderStyle, Button } from "../themes/themes";
import { useState, useContext } from "react";
import UserContext from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

export default function Header() {

    const [clicked, setClicked] = useState(false);
    const { cartItens, setCartItens} = useContext(UserContext);
    const [type, setType] = useState(null);
    const navigate = useNavigate();
    console.log(cartItens);

    function removeCartProduct(obj) {
        const filteredCartItens = cartItens.filter(p => p.name !== obj.name);
        setCartItens([...filteredCartItens])
    }
    
    let acumulador = 0;
    cartItens.forEach(t =>  acumulador += Number(t.price));

    return (
        <HeaderStyle>
            <div>
                <h2 onClick={() => navigate("/")}>Tech Store</h2>

                <div>
                    <ion-icon name="search-outline"></ion-icon>
                    <div> { cartItens[0] ? <div><p>{cartItens.length}</p></div> : null} <ion-icon onClick={() => {!clicked ? setClicked(true) : setClicked(false); setType(0)}} name="cart-outline"></ion-icon></div>
                    <ion-icon onClick={() => {!clicked ? setClicked(true) : setClicked(false); setType(1)}}  name="person-circle"></ion-icon>
                </div>
            </div>
            <div style={{display:clicked === false ? "none" : "initial"}}>
                {type === 0 ? <><h2>Seu carrinho:</h2>
                {cartItens[0] ? cartItens.map(p => <div> <img src={p.image}></img> <div><p>{p.name}</p> <p>R$: {(p.price / 100).toFixed(2)}</p></div> <ion-icon onClick={() => removeCartProduct(p)} name="trash"></ion-icon> </div> ) : <h2>Seu carrinho esta vazio</h2>}
                {cartItens[0] ? <><h2>Total: {(acumulador / 100).toFixed(2)}</h2><Button>Finalizar compra</Button></> : null}</> : "Carrinho"}

            </div>
    </HeaderStyle >
)
}