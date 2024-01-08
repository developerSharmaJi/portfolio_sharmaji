import Link from 'next/link';
import style from '../commonstyles/commonstyles.module.css'
import Image from 'next/image';
import APP_IMAGES from '@/assets/image';

const Footer = () => {

    return (
        <div className={style.footerContainer}>
            <div className={style.maine_container}>
                <h3 className='uppercase_text'>Arvind Sharma</h3>
                <div className=''>
                    <div className='mb-10'>
                        Let&apos;s Connect
                    </div>
                    <div className={style.socials}>
                        <Link href={'/'} className='mr-10'>
                            <Image src={APP_IMAGES.LINKEDIN} alt="linkedin" width={30} height={30} quality={100}
                                style={{ objectFit: "contain" }}
                                loading="lazy" />
                        </Link>
                        <Link href={'/'} className='mr-10'>
                            <Image src={APP_IMAGES.GITHUB} alt="github" width={30} height={30} quality={100}
                                style={{ objectFit: "contain" }}
                                loading="lazy" />
                        </Link>
                        <Link href={'/'} className='mr-10'>
                            <Image src={APP_IMAGES.TWITTER} alt="twitter" width={30} height={30} quality={100}
                                style={{ objectFit: "contain" }}
                                loading="lazy" />
                        </Link>
                        <Link href={'/'} className='mr-10'>
                            <Image src={APP_IMAGES.INSTAGRAM} alt="instagram" width={30} height={30} quality={100}
                                style={{ objectFit: "contain" }}
                                loading="lazy" />
                        </Link>
                        <Link href={'/'} className='mr-10'>
                            <Image src={APP_IMAGES.WHATSAPP} alt="whatsapp" width={30} height={30} quality={100}
                                style={{ objectFit: "contain" }}
                                loading="lazy" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`${style.main_footer}`}>
                © Copyright 2024. Made by <strong className={style.toPortfolio}>Arivnd Sharma</strong>
            </div>
        </div>
    );
}

export default Footer