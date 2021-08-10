import styles from './last.module.css'
export default function LastComponent() {
    return (
        <div className={styles.wapper}>
            <div className={`${styles.last} main`}>
                <div className={styles.lastLeft}>
                    <h5 className={styles.title}>Cơ sở xản xuất</h5>
                    <div className={styles.content}>
                        <p>Công ty trách nhiệm hữu hạn sản xuất và
                            thương mại dịch vụ Chí Kiên</p>
                        <p>MST:  0108764868</p>
                        <p>STK:  19134458111666</p>
                        <p>SĐT:  0904883885</p>
                        <p>Ngân hàng:  Techcombank hội sở chính</p>
                        <p>Địa chỉ:  Số 33A ngõ 164 đường Ỷ La là Phường
                            Dương Kinh, quận Hà Đông thành Phố Hà Nội</p>
                    </div>
                    <img className={styles.map} src="image/map.png" alt="" />
                </div>
                <div className={styles.lastCenter}>
                    <h5 className={styles.title}>Về Chí Kiên </h5>
                    <div className={styles.content}>
                        <p>Giới thiệu Chí Kiên</p>
                        <p>Tuyển dụng</p>
                        <p>Chính sách giải quyết khiếu nại</p>
                    </div>
                    <img className={styles.image} src="image/sign.png" alt="" />
                </div>
                <div className={styles.lastRight}>
                    <h5 className={styles.title}>KẾT NỐI VỚI CHÚNG TÔI</h5>
                    <div className={styles.imageTop}>
                        <img src="image/facebook.png" alt="" />
                        <img src="image/youtobe.png" alt="" />
                        <img src="image/tiktok.png" alt="" />
                    </div>
                    <h5 className={styles.title}>ÚNG DỤNG TRÊN ĐIỆN THOẠI</h5>
                    <img className={styles.app} src="image/APP Store.png" alt="" /><br />
                    <img className={styles.play} src="image/GG play.png" alt="" />


                </div>
            </div>
        </div>
    )
}