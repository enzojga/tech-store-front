import styled from "styled-components"

const HeaderStyle = styled.div`
    & > :nth-child(1){
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
    }}
    & > :nth-child(2){
        width: 30%;
        min-height: 100px;
        background-color: red;
        background-color: #001233;
        position: fixed;
        top: 77px;
        right: 0;
        z-index: 99;
        border-width: 0 0 3px 3px;
        border-color: white;
        border-style:solid;
        h1{
            font-size: 32px;
            color: white;
        }
        div{
            margin: 15px 0 5px 5px;
            display: flex;
            img{
                width: 100px;
                height: 100px;
            }
            p{
                color: white;
                font-size: 27px;
                margin: 0 0 5px 15px;
            }
            div{
                height: 100%;
                display: flex;
                flex-direction: column;
            }
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


export { HeaderStyle, Content }