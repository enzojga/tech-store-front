import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState,useContext,useEffect} from "react";
import UserContext from "../../contexts/userContext";
import { getCheckout } from "../../Service/api";
import ProductResume from "./ProductResume";

export default function Checkout(){

    const navigate=useNavigate();
    const { users, setUsers } = useContext(UserContext);
    const [updatevalues, setUpdateValues] = useState(true);
    const [productsUser, setProductsUser] = useState([]);
    const [isEmptyCart, setIsEmptyCart] = useState(true);
    /* const [sumProducts, setSumProducts] = useState(0); */
    let sumProducts = 0;
    useEffect(()=>{
        getCheckout('47ff9390-2be2-4147-a911-fa0130675d4e')
        
            .then((resposta) => {
               setProductsUser(resposta.data);
                if(resposta.data.length===0){
                    console.log(resposta.data, 'GET DA RESPOSTA')
                    setIsEmptyCart(true)
                } else{
                    console.log(resposta.data, 'GET DA RESPOSTA')
                    setIsEmptyCart(false)
                }   
                
            })
        
        },[updatevalues])

      productsUser.forEach(product => {
        sumProducts += Number(product.price);
      });

    return (
        <Page>
            {
                isEmptyCart === true 
                ?
                    <>
                        É TRUE
                    </>
                :
                    <>         
                        <Top>
                            <TextTittle>
                                  techStore 
                            </TextTittle>
                        </Top>
                        <GradientBox>
                            <Resume>
                            {
                                productsUser.map((product,index)=>{
                                    return (<ProductResume 
                                        key={index} 
                                        image={product.image} 
                                        description={product.description}
                                        price={product.price}
                                        name={product.name}
                                        totalPrice={sumProducts}
                                    />)
                                })
                            }
                                <TotalProduct>
                                 Total   R$ {sumProducts}
                                </TotalProduct>
                            </Resume>
                        </GradientBox>
                        <Payment>

                        </Payment>
                    </>
            }
        </Page>
    
    )
}


const Page = styled.div`
    background-color: lightgrey ;
    display:flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`
const GradientBox = styled.div`
    background: rgb(4,102,200);
background: linear-gradient(90deg, rgba(4,102,200,1) 0%, rgba(3,83,164,1) 5%, rgba(2,62,125,1) 12%, rgba(0,40,85,1) 20%, rgba(0,24,69,1) 29%, rgba(0,18,51,1) 60%, rgba(51,65,92,1) 83%, rgba(92,103,125,1) 92%, rgba(125,133,151,1) 96%, rgba(151,157,172,1) 100%);
    height:250px ;
    display:flex ;
    align-items:center ;
    justify-content:center ;
`
const Top = styled.div`
    background-color:#FFFF;
    width:100% ;
    height:40px ;
`
const Resume = styled.div`
    display: flex;
    align-items:center ;
   
    width: 100%;
    height:220px ;
    padding: 0 18px;
`
const Payment = styled.div`
    background-color: #FAFAFA ;
    width:80%;
    height:438px;
    border-radius:20px ;
    padding:25px ;

    box-sizing:border-box ;
`
const TotalProduct = styled.div`
            font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    color: green;
    background-color: #EAEAEA;
    margin-bottom:6px ;
    border-radius:5px ;
`
const TextTittle = styled.div` 
    font-family: 'Michroma', sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0em;
    color: #979DAC;
    text-align: center;
    display:flex;
    justify-content:center ;
    width: 80%;

    span{
        font-size: 25px;
        opacity:0.4 ;
    }
`