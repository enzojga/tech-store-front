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
            {/* <DescripitionProduct>
                {description}
            </DescripitionProduct> */}
            <PriceProduct>
               R$ {(price/100).toFixed(2)}
            </PriceProduct>

        </PageProduct>

        </>)

}
const PageProduct = styled.div`
    display: flex ;
    flex-direction:column ;
    justify-content:center ;
    align-items:center ;
    background-color: #FFFF;
    margin-right:20px ;
    height: 180px ;
    border-radius:15px ;
    width:139px ;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
`
const ImageProduct = styled.div`
    width: 100px;
    height:84px ;
    box-shadow: 0 8 10 rgba(0,0,0,0.3);
    img{
        width: 90px;
    border-radius:5px;
    
    }
    margin-bottom:15px ;
`
const NameProduct = styled.div` 
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 12px;
    text-align: center;
    color: #001233;
    width:100%;
    margin-bottom: 8px ;
    margin-top:15px ;
`
/* const DescripitionProduct = styled.div`
        font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 10px;
    text-align: center;
    color: grey;
    width: 122px;
    height:21px ;
    margin-bottom:8px ;
` */
const PriceProduct = styled.div`
        font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 13.976px;
    text-align: center;
    color: #001233;
    
    height:15px ;
`
