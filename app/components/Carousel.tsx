import React from "react";
import {
    Navigation,
    Pagination,
    EffectCoverflow,
    EffectCube,
    Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image, { StaticImageData } from "next/image";
import leetCodeThumbnail from "../../public/thumbnail-leetcode.png";
import roboFriendsThumbnail from "../../public/thumbnail-robofriends.png";
import aboutMeThumbnail from "../../public/about-me-main.jpg";

interface CarouselProps {
    url: string;
    thumbnail: StaticImageData;
    title: string;
}

const Carousel = () => {
    const items: CarouselProps[] = [
        {
            url: "https://github.com/mimanjh/leetcode",
            thumbnail: leetCodeThumbnail,
            title: "Mimanjh",
        },
        {
            url: "https://github.com/mimanjh/robofriends",
            thumbnail: roboFriendsThumbnail,
            title: "Robofriends",
        },
        {
            url: "https://github.com/mimanjh",
            thumbnail: aboutMeThumbnail,
            title: "Mimanjh",
        },
        {
            url: "https://github.com/mimanjh",
            thumbnail: aboutMeThumbnail,
            title: "Mimanjh",
        },
    ];

    return (
        <>
            <Swiper
                modules={[Pagination, EffectCube]}
                grabCursor={true}
                pagination={{ clickable: true, dynamicBullets: true }}
                rewind={true}
                effect={"cube"}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                className="w-auto"
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <a
                            href={item.url}
                            target="_blank"
                            className="cursor-grab"
                        >
                            <Image
                                src={item.thumbnail}
                                alt={item.title}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto",
                                }}
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Carousel;
