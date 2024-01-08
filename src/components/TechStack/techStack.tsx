import Image from "next/image";
import style from "../commonstyles/commonstyles.module.css";
import myTechnologies from './techstack'
import { it } from "node:test";

const TechStack = ({ }) => {

    return (
        <div className={style.subcontainer}>
            <h4 className="uppercase_text">Skills & Tools</h4>
            <p>The skills, tools and technologies I use to bring your products to life:</p>
            <div className={`${style.cardholder}`}>
                {myTechnologies.map((item: any, index: number) => {
                    return (
                        <div key={index} className={style.card}>
                            <Image
                                src={item.img}
                                alt={item.stack}
                                width={50}
                                height={50}
                                quality={100}
                                style={{ objectFit: "contain" }}
                                loading="lazy"
                            />
                            <div className="ml-15">
                                <p className="capitalized-text uppercase_text">{item.stack}</p>
                                {item.rating ? (
                                    [1, 2, 3, 4, 5].map((star, index) => (
                                        <div key={index} className={`${star <= item.rating ? 'bg-btnHighlight' : 'bg-noRate'} rounded-full`}></div>
                                    ))
                                ) : (
                                    <div>Learning...</div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default TechStack;