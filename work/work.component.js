import styles from './work.module.css'
import { useState } from 'react';
import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        name: 'Xưởng sản suất băng dính',
        img: 'image/1.png'
    },
    {
        name: 'Sản xuất PVE',
        img: 'image/2.png'
    },
    {
        name: 'Đóng gói băng dính',
        img: 'image/3.png'
    },
    {
        name: 'Dây chuyền băng dính',
        img: 'image/4.png'
    },
    {
        name: 'Dây chuyền băng dính',
        img: 'image/4.png'
    }
]

export default function WorkComponent() {

    const [works, setWorks] = useState(data);

    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,  
    };

    return (
        <div className={`${styles.wrapper} main `}>
            <h1 className={styles.title}>Hoạt động của doanh nghiệp</h1>
            <div className={`${styles.works} business`}>
                <Slider {...settings}>
                    {works.map(e => {
                        return (
                            <div className={styles.work}>
                                <img  className={styles.image} src={e.img} alt="" />
                                <h2  className={styles.name}>{e.name}</h2>
                            </div>
                        )
                    })
                    }
                </Slider>
            </div>
        </div>
    )
}