import styles from './floating.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';


export default function FloatingComponent() {
    const [floating, setFloating] = useState([]);
    useEffect(() => {
        fetchFloating()
    }, []);


    const fetchFloating = () => {
        axios.get('http://api.chikienpackaging.com/news?exceptCategoryId=6104b9a22c5262600f3fc5a2').then((res) => {
            console.log('res8', res)
            const data = res.data.data
            console.log('data8', data)
            setFloating(data)

        })
    }

    return (
        <div className={`${styles.wapper} main`}>
            <h1 className={styles.title}>Tin nổi bật</h1>
            <div className={styles.float}>
                <div className={styles.floatLeft}>
                    {floating.slice(0, 4).map((e) => {
                        return (
                            <div className={styles.item}>
                                <img className={styles.image} src={e.medias[0].url} alt="" />
                                <div className={styles.Left}>
                                    <h5 className={styles.title}>{e.title}</h5>
                                    <p className={styles.time}>{moment(e.createdAt).fromNow()}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.floatRight}>
                    {floating.slice(4, 7).map((e, i) => {
                        return (
                            <div className={styles.item}>
                                <div className={styles.image}>
                                    {i === 0 && <img src={e.medias[0].url} alt="" />}
                                </div>
                                <div className={styles.content}>
                                    <img className={styles.image} src="image/t.png" alt=""  />
                                    <div className={styles.right}>
                                        <h4 className={styles.title}>{e.title}</h4>
                                        <p className={styles.time}>{moment(e.createdAt).format('DD/MM/YYYY')}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}