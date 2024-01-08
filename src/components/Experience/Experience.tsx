import style from "../commonstyles/commonstyles.module.css";
import workExperience from "./experience";

const WorkExperience = ({ }) => {
    return (
        <div className={style.subcontainer}>
            <h4 className="uppercase_text">Work Experience </h4>
            <div className={style.cardholder}>
                {workExperience.map((work: any, index: number) => {
                    return (
                        <div key={index} className={`${style.exp_card_container}`}>
                            <div className={style.workSection}>
                                <h2>{work.company_name}</h2>
                                <p>{work.work_location}</p>
                                <p>{work.start_date} - {work.end_date}</p>
                                <p>{work.work_title}</p>
                                <div className={`${style.skill_set} mt-5`}>{work.work_skills?.map((skill: any, index: number) => {
                                    return (
                                        <span key={index} className={`${style.skillBox} mt-5`}>
                                            {skill}
                                        </span>
                                    )
                                })}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default WorkExperience;
