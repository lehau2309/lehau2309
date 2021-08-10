import styles from './types.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function StypesComponent() {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        fetchTypes();
    }, []);

    const fetchTypes = () => {
        axios.get('http://api.chikienpackaging.com/product?q=bang+dinh').then((res) => {
            console.log('res1', res)
            const data = res.data.data
            console.log('data1', data)
            setTypes(data)
        })
    }

    return (
        <div className={`${styles.wapper} main`}>
            <h2 className={styles.title}>Băng dính các loại</h2>
            <div className={styles.types}>
                {types.map((e) => {
                    return (
                        <div className={styles.type}>
                            <img className={styles.image} src={e.imageInfo[0].url} alt="" />
                            <h4 className={styles.name}>{e.name}</h4>
                            <p className={styles.sizes}>{e.sizes.slice(0, 2).join(', ')}</p>
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