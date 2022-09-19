import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState,useContext,useEffect} from "react";
import UserContext from "../../contexts/userContext";
import { getCheckout } from "../../Service/api";
import ProductResume from "./ProductResume";
import CardUser from "./CardUser";


export default function Checkout(){

    const navigate=useNavigate();
    const { users, setUsers } = useContext(UserContext);
    const [updatevalues, setUpdateValues] = useState(true);
    const [productsUser, setProductsUser] = useState([]);
    const [isEmptyCart, setIsEmptyCart] = useState(false);
    const {cartItens, setCartItens} = useContext(UserContext)
    let sumProducts = 0;

/*     useEffect(()=>{
        console.log(cartItens, '********')
        getCheckout(users.token)
        
            .then((resposta) => {
               setProductsUser(resposta.data);
                if(resposta.data.length===0){
                    setIsEmptyCart(true)
                } else{
                    setIsEmptyCart(false)
                }   
                
            })
        
        },[updatevalues])

      /* productsUser.forEach(product => {
        sumProducts += Number(product.price);
      }); */
 
      let acumulador = 0;
    cartItens.forEach(t =>  acumulador += Number(t.price));



    return (
        <Page>
            {
                isEmptyCart === true 
                ?
                    <>
                        <Top>
                            <TextTittleIon>
                                <ion-icon name="chevron-back-circle-outline"></ion-icon>
                            </TextTittleIon>
                            <TextTittle>
                                  techStore 
                                  
                            </TextTittle>
                            
                        </Top>
                      
                            <Resume>
                            <TextTittle>
                                  techStore 
                                  
                            </TextTittle>
                            </Resume>
                    </>
                :
                    <>         
                        <Top>
                            <TextTittleIon>
                                <ion-icon name="chevron-back-circle-outline" onClick={()=>navigate('/')}></ion-icon>
                            </TextTittleIon>
                            <TextTittle>
                                  techStore 
                                  
                            </TextTittle>
                            
                        </Top>
                       {/*  <BlueBox> */}
                            <Resume>
                                <ProductsContainer>
                                    {
                                        cartItens.map((product,index)=>{
                                            return (<ProductResume 
                                                key={index} 
                                                image={product.image} 
                                                description={product.description}
                                                price={product.price}
                                                name={product.name}
                                            />)
                                        })
                                    }
                                </ProductsContainer>
                            
                                <TotalProduct>
                                    <TextValue>RESUMO DA COMPRA</TextValue>
                                    <TextValue>Valor Total  </TextValue>
                                    <TextValue> R$ {(acumulador / 100).toFixed(2)}</TextValue>
                                </TotalProduct>
                            </Resume>
                        {/* </BlueBox> */}
                        <PaymentDiv>
                            <Payment>
                                <CardUser totalPrice={(acumulador / 100).toFixed(2)}/>
                            </Payment>
                        </PaymentDiv>
                    </>
            }
        </Page>
    
    )
}


const Page = styled.div`
    background-color: #001333 ;
    display:flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`
const BlueBox = styled.div`
 background: rgb(0,14,39);
background: linear-gradient(180deg, rgba(0,14,39,1) 0%, rgba(6,40,64,1) 43%, rgba(14,77,100,1) 78%, rgba(24,122,144,1) 99%, rgba(37,184,204,1) 100%);

    height:300px ;
    display:flex ;
    align-items:center ;
    justify-content:center ;
    position:relative;
`
const Top = styled.div`
    background-color:#FFFF;
    width:100% ;
    height:40px ;
    display: flex;
   
    align-items:center ;
    padding: 0 18px;
  
    
`
const Resume = styled.div`
    display: flex;
    align-items:center ;
    width: 100%;
    height:260px ;
    padding: 0 190px 0 40px;
    box-sizing:border-box ;
    background-image: url("https://imejunior.com.br/wp-content/uploads/2018/03/blue-tech-circuit-board-technology-animated-background-video-graphic-design-hd-1920x1080_ewva7rwie__F0000.png");

`
const ProductsContainer = styled.div`
    display: flex;
    align-items:center ;
    width: 100%;
    height:200px ;
        
    overflow-x:scroll;
    /* width */
::-webkit-scrollbar {
  height: 10px;
  margin-top:5px ;
  
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
  
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: black
  ; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #262626; 
}
`;

const Payment = styled.div`
    background-color: #FFFF ;
    width:70%;
    height: 1015px;
    height:438px;
    border-radius:20px ;
    padding:25px ;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index:1 ;
    box-sizing:border-box ;
    display:flex;
    justify-content: space-around ;
`
const TotalProduct = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #001233;
    background-color: #FFFF;

    border-radius:15px 0 0 15px ;
    width:170px;
    height:139px ;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    display: flex;
    flex-direction:column ;
    
    position: absolute;
    right:0;
    padding:15px ;
    div:nth-child(1){
        font-weight: 300;
        font-size: 12px;
        color: #001233;
        margin-bottom:25px ;
    }
    div:nth-child(2){
        font-weight: 400;
        font-size: 18px;
        color: #001233;
        margin-bottom:10px ;
    }
    div:nth-child(3){
        font-weight: 700;
        font-size: 20px;
        color: #001233;
    }

`
const TextValue = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 12px;
    text-align: center;
    color: #001233;
    background-color: #FFFF;


`
const TextTittle = styled.div` 
    font-family: 'Michroma', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0em;
    color: #979DAC;
    text-align: center;

`
const TextTittleIon = styled.div`
    font-family: 'Michroma', sans-serif;
    font-size: 25px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0em;
    color: #979DAC;
    text-align: center;
    margin-right: 12px ;
    cursor: pointer;

`
const PaymentDiv = styled.div`



background-image: url("https://static.vecteezy.com/ti/vetor-gratis/p1/1963657-abstract-technology-background-background-3d-grid-cyber-technology-ai-tech-wire-network-futuristic-wireframe-artificial-intelligence-cyber-security-background-vetor.jpg");
    width:100% ;
    display:flex;
    align-items: center;
    justify-content:center ;
    padding:100px 0;
    box-sizing:border-box ;

`
