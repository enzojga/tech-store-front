import styled from "styled-components";
import { Content } from "../themes/themes";

export default function ProductsPage() {

    return (
        <ContentProducts color={"#002855"} style={{ flexDirection: "collum" }}>
            <HighlightItens>
                <h1>Itens em destaque</h1>
                <div>
                    <HighlightItem />
                    <HighlightItem />
                    <HighlightItem />
                    <HighlightItem />
                </div>
            </HighlightItens>
            <CategoryItens>
                <span>
                    <h2>Itens por cateogria:</h2> <p>Games</p> <p>Hardware</p> <p>Celulares</p>
                </span>
                <div>
                    <HighlightItem />
                    <HighlightItem />
                    <HighlightItem />
                    <HighlightItem />
                    <HighlightItem />
                    <HighlightItem />
                    <HighlightItem />
                    <HighlightItem />
                    <HighlightItem />
                    <HighlightItem />
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
    background-color: white;
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
        width: 75%;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        align-self: center;
        margin-top: 30px;
    }
`
