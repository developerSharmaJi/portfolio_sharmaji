import style from '../commonstyles/commonstyles.module.css'
import Link from 'next/link';

const Navbar = () => {

    return (
        <nav className={style.navbar}>
            <h1 className={style.navLogo}>
                Sharma Ji
            </h1>
            <ul className={style.navMenu}>
                <li className={style.navItem}>
                    <Link href={'/'} className={style.navLinks}>Home</Link>
                </li>
                <li className={style.navItem}>
                    <Link href={'/'} className={style.navLinks}>About</Link>
                </li>
                <li className={style.navItem}>
                    <Link href={'/'} className={style.navLinks}>Skills</Link>
                </li>
                <li className={style.navItem}>
                    <Link href={'/'} className={style.navLinks}>Project</Link>
                </li>
                <li className={style.navItem}>
                    <Link href={'/'} className={style.navLinks}>Contact</Link>
                </li>
            </ul>
        </nav>
    );

}

export default Navbar