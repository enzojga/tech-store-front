import styled from "styled-components"

const Header = styled.div`
    width: 100vw;
    height: 80px;
    background-color: #001233;
    border-bottom: 3px solid white;
    display: flex;
    color: white;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    h2{
        font-weight: 700;
        font-size: 27px;
        margin-left: 15px;
    }
    div{
        display: flex;
        font-size: 22px;
        width: 50%;
        justify-content: space-around;
        ion-icon{
            font-size: 25px;
        }
    }
`
const Content = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
`


export { Header, Content }