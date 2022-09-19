import styled from "styled-components"

const HeaderStyle = styled.div`
    & > :nth-child(1){
    width: 100%;
    height: 80px;
    background-color: #001233;
    border-bottom: 3px solid #979DAC;
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
        font-weight: 500;
        font-size: 27px;
        margin-left: 15px;
        font-family: 'Michroma', sans-serif;
        :hover{
            cursor: pointer;
        }
    }
    & > div{
        display: flex;
        font-size: 22px;
        width: 30%;
        justify-content: space-around;
        ion-icon{
            font-size: 25px;
            cursor: pointer;
        }
        p{
            cursor: pointer;
        }
        div{
            position: relative;
            & > div{
                width: 15px;
                height: 15px;
                z-index: 9999;
                bottom: 0;
                right: 0;
                border-radius: 50%;
                background-color: red;
                position: absolute;
                text-align: center;
                align-items: center;
                font-size: 15px;
            }
        }
    }}
    & > :nth-child(2){
        width: 30%;
        min-height: 100px;
        max-height: 50%;
        background-color: red;
        background-color: #001233;
        position: fixed;
        top: 77px;
        right: 0;
        z-index: 99;
        border-width: 0 0 3px 3px;
        border-color: #979DAC;
        border-style:solid;
        overflow-y: auto;
        h1{
            font-size: 32px;
            color: white;
        }
        div{
            margin: 15px 0 5px 5px;
            display: flex;
            position: relative;
            ion-icon{
                position: absolute;
                bottom: 0;
                right: 0;
                font-size: 25px;
                color: red;
                align-self: center;
                justify-self: flex-end;
                :hover{
                    cursor: pointer;
                }
            }
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
        h2{
            font-size: 27px;
            font-weight: 700;
            color: white;
            margin-left: 7px;
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
        width: 150px;
        height: 150px;
    }
`
const Button = styled.div`
    width: 150px;
    height: 50px;
    color: white;
    font-size: 20px;
    background-color: red;
    text-align: center;
    align-items: center;
    font-weight: 700;
    margin-left: 7px;
    align-self: center;
    :hover{
        cursor: pointer;
    }
`
const MainProduct = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    h1{
        font-size: 50px;
        margin-bottom: 50px;
        margin-left: 30px;
        font-weight: 700;
    }
    h2{
        font-size: 30px;
        margin-bottom: 30px;
        font-weight: 500;
        max-height: 50%;
        min-width: 60%;
    }
    h3{
        font-size: 25px;
        align-self: flex-end;
        font-weight: 700;
    }
    div{
        display: flex;
    }
`
const ProductImage = styled.div`
    img{
        max-width: 5100px;
        max-height: 5100px;
    }
`
const BigButton = styled.div`
    width: 200px;
    height: 100px;
    color: white;
    font-size: 2em;
    background-color: ${props => props.color};
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    margin-left: 7px;
    align-self: center;
    border-radius: 10px;
    align-self: flex-start;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    :hover{
        cursor: pointer;
    }
`
const CategoryItem = styled.div`
    position: relative;
    max-width: 230px;
    height: 230px;
    img{
        min-width: 100%;
        min-height: 100%;
    }
    ion-icon{
        position: absolute;
        font-size: 30px;
        color: black;
            :hover{
            cursor: pointer;
        }
        :nth-child(3){
            top: 0;
            right: 0;
        }
        :nth-child(2){
            top: 0;
            left: 0;
        }
    }
`


export { HeaderStyle, Content, Button, MainProduct, ProductInfo, ProductImage, BigButton, CategoryItem }