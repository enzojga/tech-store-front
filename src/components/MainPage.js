import { Content } from "../themes/themes";
import { useState,useEffect, useContext } from "react";
import Header from "./Header";
import { MainProduct, ProductInfo, ProductImage } from "../themes/themes";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Thumbs, Autoplay } from "swiper";
import ProductsPage from "./ProductsPage";
import axios from "axios";
import "swiper/swiper-bundle.css";
import 'swiper/modules/navigation/navigation';
import 'swiper/modules/pagination/pagination';
import '../themes/style.css';
import UserContext from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

SwiperCore.use([Navigation, Pagination, Thumbs, Autoplay])

export default function MainPage() {

    const [thumbSwiper, setThumbSwiper] = useState(null);
    const [products, setProducts] = useState([]);
    const {cartVerify} = useContext(UserContext);
    const navigate = useNavigate();

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
                    <ProductImage onClick={() => cartVerify(products[i])}>
                        <img src={products[i].image} onClick={() => navigate(`/product/${products[i].productId}`)}/>
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
