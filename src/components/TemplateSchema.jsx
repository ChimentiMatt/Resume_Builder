
import { useEffect } from 'react';
import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';

import { UilPrint } from '@iconscout/react-unicons'
import { UilMobileAndroid } from '@iconscout/react-unicons'
import { UilTelegramAlt } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { UilGithubAlt } from '@iconscout/react-unicons'

const TemplateThree = ({name, careerTitle, phone, description, email, website, socials, jobs, education, skills1Name, skills, skills2Name, secondarySkill, setCareerTitle, setPhone}) => {
    let componentRef = useRef()

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        // onAfterPrint: () => alert('Print Success')
    })

    const extendPageTwo = () => {
        // console.log(document.querySelector('#t2-measuring-container-left').offsetHeight)

        if (document.querySelector('#t3-measuring-container').offsetHeight > 1040 || document.querySelector('#t3-measuring-container-left').offsetHeight > 1040){
            document.querySelector('#contents-template-three').style.height = '2112px'
            document.querySelector('#new-page-marker').style.top = '-1040px'
        }
        else{
            document.querySelector('#contents-template-three').style.height = '1054px'
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

            <div id='contents-template-three' ref={componentRef}>

            {/* base CSS for a template */}

            {/* #contents-template-three{
                border: 1px solid black;
                width: 816px;
                min-height: 1056px;
                border: 1px solid black;
                padding-left: 4rem;
                padding-right: 4rem;
                padding-top: 2rem;
                line-height: 1.6;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                background-color: white;
            } */}



                {/* Measuring containers need to exist for 2nd page */}
                <div id='t3-measuring-container-left'></div>

                <h1 id='name' className='t3-name'>{name}</h1>

                <p id='careers' className='t3-career'>{careerTitle}</p>

                <p id='t3-summary' className='t3-summary'>SUMMARY</p>
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
       

                {/* second measuring container if needed */}
                <div id='t3-measuring-container'></div>

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

                    <h4 className='t3-topic-title'>EXPERIENCE</h4>
                    {jobs.map((object, id) => (
                        <div key={id}>
                            <p id={`job-hidden-padding${id}`} className='hidden'>{object.padding}</p>

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

                    <h4 id='t3-topic-title'>EDUCATION</h4>

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
              
         
            <div className='page-end-line'></div>
            <div id='new-page-marker'>
                <p>(if resume</p>
                <p>spills through</p>
                <p>line,</p>
                <p>push content</p>
                <p>down in</p>
                <p>Work or</p>
                <p>Education)</p>
             </div>
        </div>
    )
}

export default TemplateThree
