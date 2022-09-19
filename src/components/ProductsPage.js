import styled from "styled-components";
import { Content } from "../themes/themes";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../contexts/userContext";

export default function ProductsPage() {

    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState("");
    const { cartItens, setCartItens, cartVerify } = useContext(UserContext);

    useEffect(() => {
        axios.get("https://techstore-back-end.herokuapp.com/getProduct").then(p => setProducts(p.data.sort(() => Math.random() - 0.5)));
    }, []);


    return (
        <ContentProducts color={"#002855"} style={{ flexDirection: "collum" }}>
            <HighlightItens>
                <h1>Itens em destaque</h1>
                <div>
                    {products[2] ? products.map((p,i) => { if(i < 4) return <HighlightItem>
                        <img src={p.image}/> 
                        <h1>{p.name}</h1>
                        <h2>R$: {(p.price / 100).toFixed(2)}</h2>
                        <ion-icon name="cart"></ion-icon>
                        </HighlightItem>})
                        : null
                    }
                </div>
            </HighlightItens>
            <CategoryItens>
                <span>
                    <h2>Itens por categria:</h2> <p style={{borderBottom: filter === "games" ?"3px solid red" : ""}} onClick={() => filter !== "games" ? setFilter("games") : setFilter("")}>Games</p>
                     <p style={{borderBottom: filter === "hardware" ?"3px solid red" : ""}} onClick={() => filter !== "hardware" ? setFilter("hardware") : setFilter("")}>Hardware</p>
                    <p style={{borderBottom: filter === "celulares" ?"3px solid red" : ""}} onClick={() => filter !== "celulares" ? setFilter("celulares") : setFilter("")}>Celulares</p>
                </span>
                <div>
                    {!filter ? products.map((p,i) => { if(i < 10) return <CategoryItem><img src={products[i]?.image}/> <ion-icon name="cart" onClick={() => setCartItens([...cartItens, p])}></ion-icon> </CategoryItem>}) :
                     products.map(p => { if(p.category === filter) return <CategoryItem>
                        <img src={p.image}/>
                        <ion-icon name="cart" onClick={() => setCartItens([...cartItens, p])}></ion-icon>
                        </CategoryItem>} )}
                </div>
            </CategoryItens>
        </ContentProducts >
    )
}

const ContentProducts = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    background: rgb(0,40,85);
    background: linear-gradient(0deg, rgba(0,40,85,1) 60%, rgba(0,24,69,1) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    img{
        width: 200px;
        height: 200px;
    }
`

const HighlightItens = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 15px;
    & > h1{
        font-size: 52px;
        color: white;
        font-weight: 700;
    }
    div{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        margin-top: 35px;
    }
`

const HighlightItem = styled.div`
    max-width: 330px;
    height: 380px;
    background-color: white;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: start;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    img{
        width: 250px;
        height: 250px;
        align-self: center;
    }
    h1{
        font-size: 28px;
        color: black;
        font-weight: 500;
        margin-left: 10px;
    }
    h2{
        font-size: 26px;
        color: black;
        font-weight: 500;
        margin-left: 10px;
    }
    ion-icon{
        position: absolute;
        font-size: 30px;
        color: black;
        top: 0;
        right: 0;
        :hover{
            cursor: pointer;
        }
    }
`

const CategoryItens = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 120px;
    position: relative;
    h2{
        color: white;
        font-size: 30px;
        font-weight: 700;
        margin-left: 30px;
    }
    p{
        color: white;
        font-size: 25px;
        font-weight: 700;
        margin-left: 9px;
    }
    p:hover{
        cursor: pointer;
        border-bottom: 2px solid red;
    }
    span{
        display: flex;
    }
    div{
        width: 1300px;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        align-self: center;
        margin-top: 30px;
    }
`
const CategoryItem = styled.div`
    max-width: 230px;
    height: 230px;
    position: relative;
    img{
        width: 100%;
        height: 100%;
    }
    ion-icon{
        position: absolute;
        font-size: 30px;
        color: black;
        top: 0;
        right: 0;
        z-index: 1111;
        :hover{
            cursor: pointer;
        }
    }
`