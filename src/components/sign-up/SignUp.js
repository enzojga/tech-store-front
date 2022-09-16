import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {ThreeDots} from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { postSignUp } from "../../Service/api";

export default function SignUp (){

    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [name,setName]= useState('');
    const [cpf, setCpf] = useState('');
    const navigate=useNavigate();
    const [isloading, setIsLoading] =useState (false)
    console.log("comecei ")
    


    function confirmLogin(e){

        e.preventDefault();
        setIsLoading(true)
    
        const body = {
            email: email,
            name: name,
            password: password,
            cpf:cpf
        }
    
        postSignUp(body)
            .then(() => {
                toast.success("Tudo certo, vamos la, Faça seu login :)!!");
                setTimeout(()=>{
                    navigate('/sign-in');
                },2000) 
            })
            .catch((err) => {
                setIsLoading(false)
                console.error(err);
                if(err.status == 409){
                    toast.error("Email já está sendo utilizado :( - Tente outro :D")
                } 
    
            });
    
        setEmail('');
        setName('');
        setPassword('');
        setCpf('');
    }
    
    
        return (
            <Page>
                <ToastContainer/>
                <TextTittle>
                    <span>function</span>  techStore  <span>(cadastro)</span> 
                </TextTittle>
    
                <FormPage>
                    <form  onSubmit={confirmLogin}>
                        <Data>  
    
                            <TextInput>
                                <Input type="text" onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        required
                                        placeholder='nome'
                                />
                            </TextInput>  
                            <TextInput>
                                <Input type="email" onChange={(e) => setEmail(e.target.value)} 
                                       value={email} 
                                        required
                                        placeholder='email'
                                />
                            </TextInput>
                            <TextInput>
                                <Input type="password" onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        required
                                        placeholder='senha'
                                />
                            </TextInput>
    
                            <TextInput>
                                <Input type="text" onChange={(e) => setCpf(e.target.value)}
                                        value={cpf}
                                        required
                                        placeholder='cpf'
                                />
                            </TextInput>
                            
                            {
                                isloading?
                                <Button> <ThreeDots color={'white'} height={30} width={30}/></Button>
                                :
                                <Button> <p>Cadastrar</p></Button>
                            }
                        
                            <Link to="/sign-in">
                            <TextSignup>Já tem uma conta? Faça login!</TextSignup>
                            </Link>
                        
                        </Data>
                    </form>
                </FormPage>
                </Page>
    
        )
    }
    
    const Page = styled.div`
        width: 100%;
        height:100vh ;
        background: rgb(2,0,36);
        background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 64%, rgba(6,15,166,1) 80%, rgba(4,19,202,1) 91%, rgba(0,26,255,1) 100%);
        display:flex ;
        flex-direction: column ;
        justify-content: center ;
        align-items: center;
    `;
    
    const FormPage = styled.div`
    margin-top: 32.62px;
    `
    const Input =  styled.input`
    background: #001aff;
    box-shadow:inset 0 -4px 8px rgba(0,0,0,0.4) ;
    border: none;
    border-radius: 5px;
    width: 303px;
    height:45px ;
    color: #FFFF ;
    padding-left: 11px;
    box-sizing: border-box ;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    ::placeholder{
       color: #FFFF;

    }
    `
    const TextInput = styled.div `
        margin-bottom: 12px ;
    
    `
    const Data = styled.div`
    
    
    `
    const Button = styled.button`
    background: #020024;
    border-radius: 4.63636px;
    width: 303px ;
    height:45px ;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    border: none ;
    color: #FFFF;
    margin-top: 15px;
    box-shadow: 0 -6px 10px rgba(0,0,0,0.4) ;
    :hover{
        filter:brightness(1.2) ;
        cursor: pointer;
    }
    
    `
    const TextSignup = styled.div` 
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: none;
    margin-top:25px ;
    outline: #0000;
    color: #FFFF ;
    `
    const TextTittle = styled.div` 
        font-family: 'Michroma', sans-serif;
        font-size: 32px;
        font-weight: 400;
        line-height: 50px;
        letter-spacing: 0em;
        color: #FFFFFF;
        text-align: center;
        width: 80%;

        span{
            font-size: 25px;
            opacity:0.4 ;
        }
    `
