import React from "react";
import { Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image, { StaticImageData } from "next/image";
import leetCodeThumbnail from "../../public/thumbnail-leetcode.png";
import roboFriendsThumbnail from "../../public/thumbnail-robofriends.png";
import wowGuildMonitorThumbnail from "../../public/thumbnail-wowguildmonitor.png";

interface CarouselItem {
    id: number;
    url: string;
    thumbnail: StaticImageData;
    title: string;
}

const Carousel = () => {
    const items: CarouselItem[] = [
        {
            id: 1,
            url: "https://mimanjh-leetcode.vercel.app/",
            thumbnail: leetCodeThumbnail,
            title: "Mimanjh Leetcode",
        },
        {
            id: 2,
            url: "https://mimanjh.github.io/robofriends/",
            thumbnail: roboFriendsThumbnail,
            title: "Robofriends",
        },
        {
            id: 3,
            url: "https://github.com/mimanjh/wow-guild-monitor",
            thumbnail: wowGuildMonitorThumbnail,
            title: "WowGuildMonitor",
        },
    ];

    return (
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
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${item.title}`}
                    >
                        <Image src={item.thumbnail} alt={item.title} />
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
