import { HeaderStyle } from "../themes/themes";
import { useState, useContext, useEffect } from "react";
import UserContext from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

export default function Header() {

    const [clicked, setClicked] = useState(false);
    const { cartItens, setCartItens} = useContext(UserContext);
    console.log(cartItens);

    return (
        <HeaderStyle>
            <div>
                <h2>Tech Store</h2>

                <div>
                    <p>Home</p>
                    <p>Produtos</p>
                    <ion-icon name="search-outline"></ion-icon>
                    <ion-icon onClick={() => !clicked ? setClicked(true) : setClicked(false)} name="cart-outline"></ion-icon>
                    <ion-icon name="person-circle"></ion-icon>
                </div>
            </div>
            <div style={{display:clicked === false ? "none" : "initial"}}>
                <h1>Seu carrinho:</h1>
                {cartItens[0] ? cartItens.map(p => <div> <img src={p.image}></img> <div><p>{p.name}</p> <p>R$: {(p.price / 100).toFixed(2)}</p></div> </div>) : <h1>Seu carrinho esta vazio</h1>}
            </div>
    </HeaderStyle >
)
}