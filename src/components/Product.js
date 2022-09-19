import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Content, CategoryItem } from "../themes/themes";
import { useNavigate } from "react-router-dom";
import { MainProduct, ProductInfo, ProductImage, BigButton } from "../themes/themes";
import Header from "./Header";
import UserContext from "../contexts/userContext";

export default function Product() {

    const { idProduct } = useParams();
    const navigate = useNavigate();
    const {cartVerify} = useContext(UserContext);
    const [product, setProduct] = useState({});
    const [clicked,setClicked] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://techstore-back-end.herokuapp.com/idProduct/${idProduct}`).then(p => setProduct({ ...p.data }));
        axios.get(`https://techstore-back-end.herokuapp.com/getProduct`).then(p => {setProducts(p.data); console.log(p.data)});
    }, []);
    console.log(products);
    return (
        <>
            <Header />
            <Content style={{alignItems:"center",justifyContent:"center"}}>
                <MainProduct style={{width:"80%",alignItems:"center",justifyContent:"center"}}>
                    <ProductImage>
                        <img style={{width:"30vw",height:"60vh",marginRight:"30px"}} src={product?.image} />
                    </ProductImage>
                    <ProductInfo>
                        <h1>{product?.name}</h1>
                        <h2>{product?.description}</h2>
                        <h3>{(product?.price / 100).toFixed(2)}</h3>
                        {!clicked ? <BigButton color="red" onClick={() => {cartVerify(product);setClicked(true)}}>Adicionar ao carrinho</BigButton> : <BigButton color="blue">Voltar ao site</BigButton>}
                        <div>
                        </div>
                        <h2 style={{ marginTop: "20px" }}>Produtos relacionados:</h2>
                        <div>
                            {product[0] ? products.map(p => <CategoryItem>
                                <img src={p?.image} />
                                <ion-icon name="search" onClick={() => navigate(`/product/${p?.productId}`)}></ion-icon>
                                <ion-icon name="cart" onClick={() => cartVerify(p)}></ion-icon>
                            </CategoryItem>) : null}
                        </div>
                    </ProductInfo>
                </MainProduct>
            </Content>
        </>
    )
}