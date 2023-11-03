import React from "react";
import {
    Navigation,
    Pagination,
    EffectCoverflow,
    Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

interface CarouselProps {
    items: {
        url: string;
        thumbnail: string;
        title: string;
    }[];
}

const Carousel = ({ items }: CarouselProps) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            spaceBetween={20}
            slidesPerView={"auto"}
            centeredSlides
            grabCursor
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            rewind
            effect="coverflow"
        >
            {items.map((item, index) => (
                <SwiperSlide key={index}>
                    <a href={item.url} target="_blank">
                        <Image src={item.thumbnail} alt={item.title} />
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
