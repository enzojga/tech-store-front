import styled from "styled-components";
import { Content } from "../themes/themes";

export default function ProductsPage(){

        return(
            <Content color={"#002855"}>
                <HighlightItens>
                    <h1>Itens em destaque</h1>
                    <div>
                        <HighlightItem/>
                        <HighlightItem/>
                        <HighlightItem/>
                        <HighlightItem/>
                    </div>
                    <h2>Itens por cateogria:</h2>
                </HighlightItens>
            </Content>
        )
}

const HighlightItens = styled.div`
    width: 100%;
    height: 100%;
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

