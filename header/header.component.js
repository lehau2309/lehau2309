import styles from './styles.module.css'
export default function HeaderComponent() {
    return (
        <div className={`${styles.header} main`}>

            <img className={styles.logoLeft} src="image/logo.png" alt=""  />
            <input type="text" placeholder="tìm kiếm" />
            <ul className={styles.menu}>
                <li>Khuyến mại</li>
                <li className={styles.menu2}>Tin tức</li>
                <li className={styles.menu3}>Giới thiệu</li>
            </ul>
            <img className={styles.logoRight} src="image/cart-plus.png" alt="" width={26.75} height={26.75} />
            <div className={styles.silo}>
                <button className={styles.sign}>Đăng ký</button>
                <button className={styles.login}>Đăng nhập</button>
            </div>
        </div>
    )
}