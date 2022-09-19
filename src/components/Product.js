import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { Content } from "../themes/themes";
import { MainProduct, ProductInfo, ProductImage } from "../themes/themes";
import Header from "./Header";

export default function Product(){

    const {idProduct} = useParams();
    console.log(idProduct);
    const [product, setProduct] = useState({});
    console.log(product)

    useEffect(() =>{
        axios.get(`http://localhost:5000/idProduct/${idProduct}`).then(p => setProduct({...p.data}));
    },[]);
    return(
            <>
            <Header/>
            <Content>
            <MainProduct>
                    <ProductImage>
                        <img src={product?.image}/>
                    </ProductImage>
                    <ProductInfo>
                        <h1>{product?.name}</h1>
                        <h2>{product?.description}</h2>
                        <h3>{(product?.price / 100).toFixed(2)}</h3>
                    </ProductInfo>
                </MainProduct>
            </Content>
            </>
    )
}