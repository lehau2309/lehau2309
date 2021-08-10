import styles from './others.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react';
export default function OthersComponent() {
    const [others, setOthers] = useState([]);
    useEffect(() => {
        fetchOthers()
    }, []);
    const fetchOthers = () => {
        axios.get('http://api.chikienpackaging.com/product?q=bang+dinh').then((res) => {
            console.log('res3', res)
            const data = res.data.data
            console.log(data)
            setOthers(data)

        })
    }

    return (
        <div className={`${styles.wapper} main`}>
            <h2 className={styles.title}>Sản phẩm khác</h2>
            <div className={styles.others}>
                {others.map((e) => {
                    return (
                        <div className={styles.other}>
                            <img className={styles.image} src={e.imageInfo[0].url} alt="" />
                            <h4 className={styles.name}>{e.name}</h4>
                            <p className={styles.sizes}>{e.sizes.slice(2, 4).join('-- ')}</p>
                            <div className={styles.price}>
                                <p className={styles.priceLeft}>{e.price}</p>
                                <p className={styles.priceRight}>{e.promotionPrice}</p>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}
