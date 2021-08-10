import styles from './footer.module.css'
export default function FooterComponent() {
    return (

        <div className={styles.footes} style={{ background: "url('image/N.png')" }}>
            <div className={`${styles.wapper} main`}>
                <div className={styles.wapperL}>
                    <img className={styles.laptop} src="image/laptop.png" alt="" />
                    <img className={styles.mobile} src="image/Mobile.png" alt="" />
                </div>
                <div className={styles.wapperR}>
                    <div className={styles.title}>
                        <p className={styles.load}>Tải</p>
                        <p className={styles.app}>APP Chí Kiên</p>
                    </div>
                    <p className={styles.title}>để nhận nhiều ưu đãi</p>
                    <p className={styles.content}>Băng keo hay còn gọi là băng dính, từ loại băng keo kỹ thuận như là dán gạch, cách điện,...., đến các loại các loại băng keo thông dụng như dán thùng đa năng đều...</p>
                    <img className={styles.image} src="image/app.png" alt=""  />
                </div>
            </div>
        </div>


    )
}