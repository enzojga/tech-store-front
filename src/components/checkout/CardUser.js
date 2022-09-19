import { useState } from "react";
import styled from "styled-components";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { postCheckout } from "../../Service/api";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/userContext";

import { useContext } from "react";

export default function CardUser({totalPrice}){
    const [cardNumber, setCardNumber] = useState("");
    const [cardOwner, setCardOwner] = useState("");
    const [cardExpiration, setCardExpiration] = useState("");
    const [cardCVV, setCardCVV] = useState("");
    const [focus, setFocus] = useState("");
    const {users, setUsers}= useContext(UserContext)

    const navigate = useNavigate();
    function confirmPaymentData(e){
        e.preventDefault();

        const body = {
            
            numberCard: cardNumber,
            cv:cardCVV,
            name: cardOwner,
            cardExpiration:cardExpiration,
            value: Number(totalPrice)
            
        }
        console.log(body, 'BODY DO FRONT')
    
        postCheckout (body,users.token)
            .then((response) => {
                toast.success(`Status: ${response.data.status}`);
                toast.success(`Valor: ${response.data.value}. Data: ${response.data.date}`);
                setTimeout(()=>{
                    navigate('/');
                },4000) 
            })
            .catch((err) => {
                console.error(err);
                if(err.status !== 200){
                    toast.error("Login errado")
                } 
    
            });
    }

    return(
        <PaymentDataContainer>
            <ToastContainer/>
            <PaymentData onSubmit={confirmPaymentData}>
                <h2>Dados de pagamento</h2>
                <PaymentDataInput 
                    placeholder='Número do cartão'
                    type='string'
                    name='cardNumber'
                    value={cardNumber}
                    pattern='[0-9]{16}'
                    onChange={(e)=> setCardNumber(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                    required
                />
                <PaymentDataInput 
                    placeholder='Titular do cartão'
                    type='text'
                    name='cardOwner'
                    value={cardOwner}
                    onChange={(e)=> setCardOwner(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                    required
                />
                <SmallerInputsContainer>
                    <PaymentDataInput 
                        placeholder='Vencimento'
                        type='text'
                        name='cardExpiration'
                        value={cardExpiration}
                        pattern='[0-9]{2}/[0-9]{2}'
                        onChange={(e)=> setCardExpiration(e.target.value)}
                        onFocus={(e) => setFocus(e.target.name)}
                        required
                    />
                    <PaymentDataInput 
                        placeholder='CVV'
                        type='tel'
                        name='cardCVV'
                        value={cardCVV}
                        pattern='[0-9]{3}'
                        onChange={(e)=> setCardCVV(e.target.value)}
                        onFocus={(e) => setFocus(e.target.name)}
                        required
                    />
                </SmallerInputsContainer>
                <ConfirmDataButton type='submit'>
                    Confirmar dados
                </ConfirmDataButton>
            </PaymentData>
            <CardContainer>
                <Cards
                    number={cardNumber}
                    name={cardOwner}
                    expiry={cardExpiration}
                    cvc={cardCVV}
                    focused={focus}
                />
            </CardContainer>
        </PaymentDataContainer>
    );
}

const PaymentDataContainer = styled.div`
    width: 70%;
    padding: 30px;
    display: flex;
    @media (max-width: 1080px){
        width: 90%;
        margin-bottom: 20px;
    }
    @media (max-width: 750px){
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`;

const PaymentData = styled.form`
    width: 330px;
    height: 100%;
    h2{
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 10px;
    }
    @media (max-width: 750px){
       padding-right: 15px;
    }
`;

const PaymentDataInput = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #CECECE;
    border-radius: 20px;
    margin-top: 15px;
    padding-left: 15px;
    outline-color: #001233;
    ::placeholder{
        color: #CECECE;
        font-size: 15px;
    }
`;

const SmallerInputsContainer = styled.div`
    input:first-child{
        width: 47%;
        margin-right: 15px;
    }
    input:last-child{
        width: 22%;
        padding-left: 0;
        text-align: center;
        ::placeholder{
            text-align: center;
        }
    }
`;

const ConfirmDataButton = styled.button`
    margin-top: 25px;
    width: 100px;
    height: 40px;
    background-color:#001233 ;
    border: none;
    border-radius: 5px;
    font-family: 'Play', sans-serif;
    font-size: 17px;
    color: white;
    :hover{
        cursor: pointer;
        filter: brightness(1.4);
    }
    @media (max-width: 750px){
        width: 100%;
    }
`;

const CardContainer = styled.div`
    margin-left: 20px;
    height: 100%;
    padding-top: 48px;
    @media (max-width: 750px){
        margin: 0;
    }
`;