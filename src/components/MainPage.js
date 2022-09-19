import { Content } from "../themes/themes";
import { useState,useEffect, useContext } from "react";
import Header from "./Header";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Thumbs, Autoplay } from "swiper";
import ProductsPage from "./ProductsPage";
import axios from "axios";
import "swiper/swiper-bundle.css";
import 'swiper/modules/navigation/navigation';
import 'swiper/modules/pagination/pagination';
import '../themes/style.css';
import UserContext from "../contexts/userContext";

SwiperCore.use([Navigation, Pagination, Thumbs, Autoplay])

export default function MainPage() {

    const [thumbSwiper, setThumbSwiper] = useState(null);
    const [products, setProducts] = useState([]);
    const {cartItens, setCartItens} = useContext(UserContext);

    const slides = [];

    useEffect(() =>{
        axios.get("https://techstore-back-end.herokuapp.com/getProduct").then(p => setProducts(p.data.sort(() => Math.random() - 0.5)));
        products.sort(() => Math.random() - 0.5);
    },[]);
    console.log(products)

    for (let i = 0; i < 3; i++) {
        if(products.length === 0){
            break;
        }
        slides.push(
            <SwiperSlide>
                <MainProduct>
                    <ProductInfo>
                        <h1>{products[i].name}</h1>
                        <h2>{products[i].description}</h2>
                        <h3>{(products[i].price / 100).toFixed(2)}</h3>
                    </ProductInfo>
                    <ProductImage onClick={() => setCartItens([...cartItens, products[i]])}>
                        <img src={products[i].image}/>
                    </ProductImage>
                </MainProduct>
            </SwiperSlide>
        )
    }
    const thumb = [];
    for (let i = 0; i < 3; i++) {
        if(products.length === 0){
            break;
        }
        thumb.push(
            <SwiperSlide>
                <img src={products[i].image} />
            </SwiperSlide>
        )
    }

    return (
        <>
            <Header/>
            <Content color={"#001845"}>
                <Swiper navigation pagination={{ clickable: true }} loop autoplay thumbs={{ swiper: thumbSwiper }} >
                    {slides}
                </Swiper>
                <Swiper onSwiper={setThumbSwiper} slidesPerView={3} style={{maxWidth:"650px",position:"absolute",bottom:0,right:"25px",margin:"0 0 20px 0"}}>
                    {thumb}
                </Swiper>
            </Content>
            <ProductsPage/>
        </>
    )
}

const MainProduct = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const ProductInfo = styled.div`
    width: 50%;
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
    }
    h3{
        font-size: 25px;
        align-self: flex-end;
        font-weight: 700;
    }
`
const ProductImage = styled.div`
    img{
        width: 750px;
        height: 750px;
    }
`