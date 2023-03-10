
import { useEffect } from 'react';
import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';

import { UilPrint } from '@iconscout/react-unicons'
import { UilMobileAndroid } from '@iconscout/react-unicons'
import { UilTelegramAlt } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { UilGithubAlt } from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'

const TemplateTwo = ({name, careerTitle, phone, description, email, linkedIn, website, socials, jobs, education, skills1Name, skills, skills2Name, secondarySkill, setCareerTitle, setPhone}) => {
    let componentRef = useRef()

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        // onAfterPrint: () => alert('Print Success')
    })

    const extendPageTwo = () => {
        // console.log(document.querySelector('#t2-measuring-container-left').offsetHeight)

        if (document.querySelector('#t2-measuring-container').offsetHeight > 1040 || document.querySelector('#t2-measuring-container-left').offsetHeight > 1040){
            document.querySelector('#contents-template-two').style.height = '2112px'
            document.querySelector('#new-page-marker').style.top = '-1040px'
        }
        else{
            document.querySelector('#contents-template-two').style.height = '1054px'
            document.querySelector('#new-page-marker').style.top = '0px'
        }
    }

    const populateFormInputs = () => {
        document.querySelector(`#career-input`).value = document.querySelector(`#career`).innerHTML
        setCareerTitle(document.querySelector(`#career-input`).value)

        document.querySelector(`#phone-input`).value = document.querySelector(`#phone`).innerHTML
        setPhone(document.querySelector(`#phone-input`).value)
    }

    useEffect(() => {
        populateFormInputs()
        extendPageTwo()
    })

     return (
        <div>
            <button className='print-btn' onClick={handlePrint}>Print Resume as PDF 
                <UilPrint size="15" color="#ffffff" className='icon-btn m-l'/>
            </button>
            <br/><br/>

            <div id='contents-template-two' ref={componentRef}>
                <div id='t2-left-column'>
                    <div id='t2-measuring-container-left'>
                        <h1 id='name' className='t2-name'>{name}</h1>

                        <p id='careers' className='t2-career'>{careerTitle}</p>
                        
                        <p id='t2-summary' className='t2-summary'>SUMMARY</p>
                        <p id='description'>{description}</p>

                        {skills.length !== 0 && 
                        <>
                            <p id='t2-skills1'>{skills1Name}</p>
                            {skills.map((skill, id) => (
                                <p className='t2-no-wrap' key={id}>{skill}</p>
                            ))}
                        </>
                        }
                        {secondarySkill.length !== 0 && 
                            <>
                                <p id='t2-skills2'>{skills2Name}</p>
                                {secondarySkill.map((skill, id) => (
                                    <p className='t2-no-wrap' key={id}>{skill}</p>
                                ))}
                            </>
                        }
                    </div>
                </div>

                <div id='t2-right-column'>
                    <div id='t2-measuring-container'>

                        {phone && 
                            <div className='t2-icon-row'>
                                <div className='t2-icon-border'>
                                    <UilMobileAndroid size="15" color="#f5b548" />
                                </div>
                                <p>{phone}</p>  
                            </div>
                        }

                        {email && 
                            <div className='t2-icon-row'>
                                <div className='t2-icon-border'>
                                    <UilTelegramAlt size="15" color="#f5b548" />
                                </div>
                                <p id='email'>{email}</p>  
                            </div>
                        }
                        {website && 
                            <div className='t2-icon-row'>
                                <div className='t2-icon-border'>
                                    <UilUser size="15" color="#f5b548" />
                                </div>
                                <p id='website'>
                                    <a href={`https://${website}`} target="blank" id='website' className='t2-a-tag'>{website}</a>
                                </p>  
                            </div>
                        }

                        {socials && 
                            <div className='t2-icon-row'>
                                <div className='t2-icon-border'>
                                    <UilGithubAlt size="15" color="#f5b548" />
                                </div>

                                <a href={`https://github.com/${socials}`} target="blank" id='website' className='t2-a-tag'>{socials}</a>

                            </div>
                        }   

                        {linkedIn && 
                            <div className='t2-icon-row'>
                                <div className='t2-icon-border'>
                                    <UilLinkedin size="15" color="#f5b548" />
                                </div>
                                <a href={`https:/linkedin.com/${linkedIn}`} target="blank" className='t2-a-tag'>linkedin.com/{linkedIn}</a>

                            </div>
                        }   

                        <div className='t2-line-through'></div>
                  

                        <h4 className='t2-topic-title'>EXPERIENCE</h4>
                        {jobs.map((object, id) => (
                            <div key={id}>
                                 <p id={`job-hidden-padding${id}`} className='hidden'>{object.padding}</p>
                                 
                                {/* <div id={`new-page-spacing${id}`}></div> */}
                                {/* style={{ marginTop: `${object.padding}`}} */}

                                <p className='t2-job-title' id={`resume-title${id}`}>{object.jobTitle}</p>
                                <p className='t2-company-and-date'><span id={`resume-company${id}`}>{object.company}</span>. <span id={`resume-start-date${id}`}>{object.startDate}</span> - <span id={`resume-end-date${id}`}>{object.endDate}</span></p>
                                <p className='t2-job-description' id={`resume-description${id}`}>{object.jobDescription}</p>

                                {object.tasks.map((task, taskId) => (
                                    <div key={taskId} className='t2-task-container'>
                                        <li className='t2-job-items'></li>
                                        <p id={`resume-tasks${id}${taskId}`}>{task}</p>
                                    </div>
                                ))}

                                {object.padding === 1 && <><br/><br/></>}
                                {object.padding === 2 && <><br/><br/><br/><br/></>}
                                {object.padding === 3 && <><br/><br/><br/><br/><br/><br/></>}
                                {object.padding === 4 && <><br/><br/><br/><br/><br/><br/><br/><br/></>}
                                {object.padding === 5 && <><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></>}

                        
                            </div>
                        ))}

                        <div className='t2-line-through'></div>      
                        <h4 className='t2-topic-title'>EDUCATION</h4>

                        {education.map((object, id) => (
                            <div  key={id}>
                                <p  id={`ed-hidden-padding${id}`} className='hidden'>{object.padding}</p>

                                <h4 className='t2-education-title' id={`resume-degree${id}`}>{object.degree}</h4>

                                <p className='t2-school-and-date'><span id={`resume-school${id}`}>{object.university}</span>. <span id={`ed-resume-start-date${id}`}>{object.startDate}</span> - <span id={`ed-resume-end-date${id}`}>{object.endDate}</span></p>

                                <p id={`resume-ed-description${id}`}>{object.description}</p>

                                {object.padding === 1 && <><br/><br/></>}
                                {object.padding === 2 && <><br/><br/><br/><br/></>}
                                {object.padding === 3 && <><br/><br/><br/><br/><br/><br/></>}
                                {object.padding === 4 && <><br/><br/><br/><br/><br/><br/><br/><br/></>}
                                {object.padding === 5 && <><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='page-end-line'></div>
            <div id='new-page-marker'>
                (if resume
                spills through
                line, push
                content
                down in
                Work or
                Education)
             </div>
        </div>
    )
}

export default TemplateTwo
