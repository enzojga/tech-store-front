import styled from "styled-components";

export default function ProductResume({price, totalPrice, description, image, name}){
    
    
    
    return (
        <>
        <PageProduct>
            <ImageProduct>
               <img src={image}/> 
            </ImageProduct>
            <NameProduct>
                {name}
            </NameProduct>
            <DescripitionProduct>
                {description}
            </DescripitionProduct>
            <PriceProduct>
               R$ {price}
            </PriceProduct>

        </PageProduct>

        </>)

}
const PageProduct = styled.div`
    display: flex ;
    flex-direction:column ;
    justify-content:center ;
    align-items:center ;
    background-color: #EAEAEA;
    margin-right:12px ;
    height: 200px ;
    border-radius:5px ;
    width:160px ;
`
const ImageProduct = styled.div`
    width: 100px;
    
    box-shadow: 0 8 10 rgba(0,0,0,0.3);
    img{
        width: 90px;
    border-radius:5px;
    }
`
const NameProduct = styled.div` 
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    color: #001233;
    margin-bottom:6px ;
`
const DescripitionProduct = styled.div`
        font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    color: #0353A4;

    margin-bottom:6px ;
`
const PriceProduct = styled.div`
        font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    color: #001233;

    margin-bottom:6px ;
`
