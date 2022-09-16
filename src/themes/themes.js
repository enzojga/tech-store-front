import styled from "styled-components"

const Header = styled.div`
    width: 100%;
    height: 80px;
    background-color: #001233;
    border-bottom: 3px solid white;
    display: flex;
    color: white;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
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
    background: rgb(0,24,69);
    background: linear-gradient(0deg, rgba(0,24,69,1) 60%, rgba(0,18,51,1) 100%);
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    margin-top: 80px    ;
    align-items: center;
    position: relative;
    img{
        width: 200px;
        height: 200px;
    }
`


export { Header, Content }