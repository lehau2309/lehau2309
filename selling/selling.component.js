import axios from 'axios';
import { useEffect, useState } from 'react'
import styles from './styles.module.css'
export default function SellingComponent() {


    const [selling, setSelling] = useState([]);

    useEffect(() => {
        fetchSelling()
    }, []);


    const fetchSelling = () => {
        axios.get('http://api.chikienpackaging.com/product?type=HOT_SALE').then((res) => {
            console.log('res111', res)
            const data = res.data.data
            console.log('data11', data)
            setSelling(data)
        })
    }
    return (
        <div className={`${styles.wapper} main`}>
            <div className={styles.wapperTop}>
                <i className={styles.sell}>BÁN CHẠY</i>
                <h2 className={styles.one}>NHẤT</h2>

            </div>
            <div className={styles.wapperButton}>
                {selling.map((e) => {
                    return (
                        <div className={styles.selling}>
                            <img className={styles.image} src={e.imageInfo[0].url} alt="" />
                            <h3 className={styles.name}>{e.name}</h3>
                            <p className={styles.size}>{e.sizes.join(', ')}</p>
                            <h4>Đã bán (234)</h4>
                            <div className={styles.price}>
                                <p className={styles.priceLeft}>{e.price}</p>
                                <p className={styles.priceRight}>{e.promotionPrice}</p>
                            </div>
                            <img className={styles.run} src="image/ngay.png" alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}