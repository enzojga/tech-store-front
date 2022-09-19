import styled from "styled-components";
import { Content } from "../themes/themes";
import { useState,useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../contexts/userContext";

export default function ProductsPage() {

    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState("");
    const { cartItens, setCartItens,cartVerify } = useContext(UserContext);

    useEffect(() =>{
        axios.get("https://techstore-back-end.herokuapp.com/getProduct").then(p => setProducts(p.data.sort(() => Math.random() - 0.5)));
    },[]);


    return (
        <ContentProducts color={"#002855"} style={{ flexDirection: "collum" }}>
            <HighlightItens>
                <h1>Itens em destaque</h1>
                <div>
                {products[2] ? <>
                    <HighlightItem>
                        <img src={products[0]?.image}/>
                    </HighlightItem>
                    <HighlightItem>
                        <img src={products[1]?.image}/>
                    </HighlightItem>
                    <HighlightItem>
                        <img src={products[2]?.image}/>
                    </HighlightItem>
                    <HighlightItem>
                        <img src={products[3]?.image}/>
                    </HighlightItem></>
                    : null}

                </div>
            </HighlightItens>
            <CategoryItens>
                <span>
                    <h2>Itens por cateogria:</h2> <p style={{borderBottom: filter === "games" ?"3px solid red" : ""}} onClick={() => filter !== "games" ? setFilter("games") : setFilter("")}>Games</p>
                     <p style={{borderBottom: filter === "hardware" ?"3px solid red" : ""}} onClick={() => filter !== "hardware" ? setFilter("hardware") : setFilter("")}>Hardware</p>
                    <p style={{borderBottom: filter === "celulares" ?"3px solid red" : ""}} onClick={() => filter !== "celulares" ? setFilter("celulares") : setFilter("")}>Celulares</p>
                </span>
                <div>
                    {!filter ? products.map((p,i) => { if(i < 10) return <HighlightItem onClick={() => cartVerify(p)}><img src={products[i]?.image}/></HighlightItem>}) :
                     products.map(p => { if(p.category === filter) return <HighlightItem onClick={() => setCartItens([...cartItens, p])}><img src={p.image}/></HighlightItem>} )}
                </div>
            </CategoryItens>
        </ContentProducts>
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
    margin-top: 30px;
    h1{
        font-size: 52px;
        color: white;
        font-weight: 700;
    }
    div{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        margin-top: 70px;
    }
`

const HighlightItem = styled.div`
    max-width: 250px;
    height: 250px;
    img{
        width: 100%;
        height: 100%;
        border-radius: 20%;
        box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }
`

const CategoryItens = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 120px;
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
        width: 1400px;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        align-self: center;
        margin-top: 30px;
    }
`
