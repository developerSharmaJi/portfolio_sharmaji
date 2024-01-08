import Image from "next/image";
import style from "../commonstyles/commonstyles.module.css";
import APP_IMAGES from "../../assets/image";
import Link from "next/link";

const AboutMe = ({ }) => {
    return (
        <div className={style.container}>
            <div className="w-50">
                <p className="mb-10">
                    <strong className="uppercase_text">Explore | Develop & Repeat</strong> - Embarking on the journey of development is like setting sail into a
                    vast sea of possibilities. With each line of code, you chart your
                    course, exploring the uncharted realms of technology and creativity,
                    turning the unknown into the known, and transforming ideas into
                    digital realities.
                </p>
                <h1 className="uppercase_text">
                    Hi there, I&apos;m <span className={style.developerName}>Arvind Sharma</span>
                </h1>
                <p>
                    A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.
                    Currently employed as a Front-end Associate Software Developer at an IT company.
                </p>
                <div>
                    <Link href={'https://www.linkedin.com/in/arvind-sharma-235787166/'} target="_blank">
                        <Image
                            src={APP_IMAGES.LINKEDIN}
                            alt="linkedin.com"
                            width={40}
                            height={50}
                            className="mr-5"
                            quality={100}
                            style={{objectFit: "contain"}}
                            loading="lazy"
                        />
                    </Link>
                    <Link href={'https://github.com/developerSharmaJi'} target="_blank">
                        <Image src={APP_IMAGES.GITHUB} alt="github.com" width={40} height={50} quality={100}
                            style={{ objectFit: "contain" }}
                            loading="lazy" />
                    </Link>
                    <Link href={'/'}>
                        <Image src={APP_IMAGES.CV} alt="arvind_sharma_resume" width={50} height={50} quality={100}
                            style={{ objectFit: "contain" }}
                            loading="lazy" />
                    </Link>
                </div>
            </div>
            <div className={style.profile_pic_container}>
                <Image
                    src={APP_IMAGES.PROFILE_IMAGE}
                    alt="profile"
                    className="border-radius"
                    quality={100}
                    style={{ objectFit: "contain" }}
                    loading="lazy"
                    layout="responsive"
                />
            </div>
        </div>
    );
};

export default AboutMe;
