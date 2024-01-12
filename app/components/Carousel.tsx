import React from "react";
import { Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image, { StaticImageData } from "next/image";
import leetCodeThumbnail from "../../public/thumbnail-leetcode.png";
import roboFriendsThumbnail from "../../public/thumbnail-robofriends.png";
import aboutMeThumbnail from "../../public/about-me-main.jpg";

interface CarouselProps {
    id: number;
    url: string;
    thumbnail: StaticImageData;
    title: string;
}

const Carousel = () => {
    const items: CarouselProps[] = [
        {
            id: 1,
            url: "https://mimanjh-leetcode.vercel.app/",
            thumbnail: leetCodeThumbnail,
            title: "Mimanjh",
        },
        {
            id: 2,
            url: "https://mimanjh.github.io/robofriends/",
            thumbnail: roboFriendsThumbnail,
            title: "Robofriends",
        },
    ];

    const handleImageClick = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <>
            <Swiper
                modules={[Pagination, EffectFade]}
                grabCursor={true}
                pagination={{ clickable: false, dynamicBullets: true }}
                effect={"fade"}
                centeredSlides={true}
                fadeEffect={{
                    crossFade: true,
                }}
                className="w-auto"
                style={{ maxHeight: "50vh" }}
            >
                {items.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Image
                            src={item.thumbnail}
                            alt={item.title}
                            // onClick={() => {
                            //     handleImageClick(item.url);
                            // }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Carousel;
