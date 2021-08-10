import styles from './banner.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function BannerComponent() {
    const [banner, setBannner] = useState([]);
    useEffect(() => {
        fetchBanner()
    }, []);
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    };
    const fetchBanner = () => {
        axios.get('http://api.chikienpackaging.com/banner').then((res) => {
            console.log('res', res)
            const data = res.data.data
            console.log('data: ', data)
            setBannner(data)

        })
    }

    return (
        <div className={`${styles.banner} main banner`}>
            <Slider {...settings}>
                {banner.map((e) => {
                    return (

                        <img className={styles.bannerTop} src={e.image.url} alt="" />
                    )
                })}
            </Slider>
            
        </div>
    )
}