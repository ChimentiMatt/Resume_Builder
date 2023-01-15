
import { useEffect } from 'react';
import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';

import { UilPrint } from '@iconscout/react-unicons'
import { UilMobileAndroid } from '@iconscout/react-unicons'
import { UilTelegramAlt } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { UilGithubAlt } from '@iconscout/react-unicons'

const TemplateTwo = ({name, careerTitle, phone, description, email, website, socials, jobs, education, skills1Name, skills, skills2Name, secondarySkill, setCareerTitle, setPhone}) => {
    let componentRef = useRef()

    useEffect(() => {
        populateFormInputs()
        extendPageTwo()

    })

    const extendPageTwo = () => {
        // console.log(document.querySelector('#t2-measuring-container').offsetHeight)

        if (document.querySelector('#t2-measuring-container').offsetHeight > 1040){
            document.querySelector('#contents-template-two').style.height = '2112px'
        }
        else{
            document.querySelector('#contents-template-two').style.height = '1054px'
        }
    }

    const populateFormInputs = () => {
        document.querySelector(`#career-input`).value = document.querySelector(`#career`).innerHTML
        setCareerTitle(document.querySelector(`#career-input`).value)

        document.querySelector(`#phone-input`).value = document.querySelector(`#phone`).innerHTML
        setPhone(document.querySelector(`#phone-input`).value)
    }


    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        // onAfterPrint: () => alert('Print Success')
    })
     return (
        <div>
            <button className='print-btn' onClick={handlePrint}>Print Resume as PDF 
                <UilPrint size="15" color="#ffffff" className='icon-btn m-l'/>
            </button>
            <br/><br/>

            <div id='contents-template-two' ref={componentRef}>
                <div id='t2-left-column'>
                    <h1 id='name'>{name}</h1>

                    <p id='careers'>{careerTitle}</p>
                    
                    <p id='t2-summary'>SUMMARY</p>
                    <p id='description'>{description}</p>

                    <p id='t2-skills1'>{skills1Name}</p>
                    {skills.map((skill, id) => (
                        <p className='t2-no-wrap' key={id}>{skill}</p>
                    ))}

<                   p id='t2-skills2'>{skills2Name}</p>
                    {secondarySkill.map((skill, id) => (
                        <p className='t2-no-wrap' key={id}>{skill}</p>
                    ))}
                </div>

                <div id='t2-right-column'>
                    <div id='t2-measuring-container'>
                        <div className='t2-icon-row'>
                            <div className='t2-icon-border'>
                                <UilMobileAndroid size="15" color="#f5b548" />
                            </div>
                            <p>{phone}</p>  
                        </div>

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
                                <p id='website'>{website}</p>  
                            </div>
                        }

                        {socials && 
                            <div className='t2-icon-row'>
                                <div className='t2-icon-border'>
                                    <UilGithubAlt size="15" color="#f5b548" />
                                </div>
                                <p id='socials'>{socials}</p>  
                            </div>
                        }   

                        <div className='t2-line-through'></div>

                        <h4 className='t2-topic-title'>EXPERIENCE</h4>
                        {jobs.map((object, id) => (
                            <div key={id}>
                                <p className='t2-job-title' id={`resume-title${id}`}>{object.jobTitle}</p>
                                <p className='t2-company-and-date'><span id={`resume-company${id}`}>{object.company}</span>. <span id={`resume-start-date${id}`}>{object.startDate}</span> - <span id={`resume-end-date${id}`}>{object.endDate}</span></p>
                                <p className='t2-job-description' id={`resume-description${id}`}>{object.jobDescription}</p>

                                {object.tasks.map((task, id) => (
                                    <div key={id} className='t2-task-container'>
                                        <li className='t2-job-items'></li>
                                        <p id={`resume-tasks${id}`}>{task}</p>
                                    </div>
                                ))}
                                {/* <div></div> */}
                                <div id={`new-page-spacing${id}`}></div>
                            </div>
                        ))}

                        <div className='t2-line-through'></div>      
                        <h4 className='t2-topic-title'>EDUCATION</h4>

                        {education.map((object, id) => (
                            <div  key={id}>
                                <h4 className='t2-education-title' id={`resume-degree${id}`}>{object.degree}</h4>
                                <p className='t2-school-and-date'><span id={`resume-university${id}`} >{object.university}. {object.startDate} - {object.endDate}</span></p>
                                <p id={`resume-description${id}`}>{object.description}</p>

                                <div id={`ed-new-page-spacing${id}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='page-end-line'></div>
        </div>
    )
}

export default TemplateTwo
