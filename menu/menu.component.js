import {useEffect, useState} from 'react';
import styles from './styles.module.css';
import axios from 'axios';

export default function MenuComponent() {
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        fetchMenus()
    }, []);

    const fetchMenus = () => {
        axios.get('http://api.chikienpackaging.com/products/category?status=ACTIVE').then(res => {
            console.log('res: ', res);
            const data = res.data.data
            console.log('data: ', data);
            setMenus(data);
        })
    }


    return (
        <div className={`${styles.menu} main`}>
            <ul >
                {menus.map(e => {
                    return <li key={e._id}><a href="#">{e.name}</a></li>
                })}
                
            </ul>
        </div>
    )
}