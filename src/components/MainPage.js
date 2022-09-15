import { Header,Content } from "../themes/themes";
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation,Pagination} from "swiper";
import "swiper/swiper-bundle.css"

SwiperCore.use([Navigation,Pagination])

export default function MainPage(){

    const slides = [];
    for(let i = 0; i < 5; i++){
        slides.push(
            <SwiperSlide>
                <MainProduct>
                    <ProductInfo>
                        <h1>Nome do produto</h1>
                        <h2>Descrição enorme de grande Descrição enorme de grande Descrição enorme de grande Descrição enorme de grande Descrição enorme de grande</h2>
                        <h3>RS 9.99</h3>
                    </ProductInfo>
                    <ProductImage>
                    </ProductImage>
                </MainProduct>
            </SwiperSlide>
        )
    }

    return(
        <>
            <Header>
                <h2>Tech Store</h2>

                <div>
                    <p>Home</p>
                    <p>Paginas</p>
                    <p>Produtos</p>
                    <ion-icon name="search-outline"></ion-icon>
                    <ion-icon name="cart-outline"></ion-icon>
                    <ion-icon name="person-circle"></ion-icon>
                </div>
            </Header>
            <Content color={"#001845"}>
                <Swiper navigation pagination>
                    {slides}
                </Swiper>
            </Content>
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
    width: 750px;
    height: 500px;
    background-color: white;
`