
import { useEffect } from 'react';
import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';

import { UilPrint } from '@iconscout/react-unicons'
// import { UilMobileAndroid } from '@iconscout/react-unicons'
// import { UilTelegramAlt } from '@iconscout/react-unicons'
// import { UilUser } from '@iconscout/react-unicons'
// import { UilGithubAlt } from '@iconscout/react-unicons'

const TemplateThree = ({name, careerTitle, phone, description, email, linkedIn, website, socials, jobs, education, skills1Name, skills, skills2Name, secondarySkill, setCareerTitle, setPhone}) => {
    let componentRef = useRef()

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        // onAfterPrint: () => alert('Print Success')
    })

    const extendPageTwo = () => {
        // console.log(document.querySelector('#t3-measuring-container').offsetHeight)

        if (document.querySelector('#t3-measuring-container').offsetHeight > 1040){
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

    // const jobLoop = () => {
    //     for (let i = 0; i < jobs.length; i++ )
    //     {
    //         makeStartDateOnlyYear(jobs[i].startDate)
    //     }
    // }

    // const makeStartDateOnlyYear = (sDate) => {
    //     let yearPortion = false
    //     let yearString = ''
    //     for(let i = 0; i < sDate.length; i++){
    //         if (sDate[i] === 2){
    //             yearPortion = true
    //         }
    //         if (yearPortion) yearString += sDate[i]
    //     }
    //     sDate = 
    // } 

    useEffect(() => {
        populateFormInputs()
        extendPageTwo()
        // jobLoop()
    })

     return (
        <div>
            <button className='print-btn' onClick={handlePrint}>Print Resume as PDF 
                <UilPrint size="15" color="#ffffff" className='icon-btn m-l'/>
            </button>
            <br/><br/>

            <div id='contents-template-three' ref={componentRef}>
                <div id='t3-measuring-container'>
                    <div id='t2-title-div'>
                        <h1 id='name' className='t3-name'>{name}</h1>
                        <h2 id='careers' className='t3-career'>{careerTitle}</h2>
                    </div>

                    <div id='t3-contact-container'>
                        {website && 
                            <div>
                                <a href={`https://${website}`} target="blank" className='t3-a-tag'>{website}</a>
                                <span>•</span>
                            </div>
                        }
                        {socials && 
                            <div>
                                <a href={`https://github.com/${socials}`} target="blank"  className='t3-a-tag'>github.com/{socials}</a>
                                <span>•</span>
                            </div>
                        }
                        {email && 
                            <div>
                                <span>{email}</span> 
                                <span>•</span>
                            </div>
                        }
                        {phone && 
                            <div>
                                <span>{phone}</span> 
                                
                            </div>
                        }
                        {linkedIn && 
                            <div>
                                <span>•</span>
                                <a href={`https:/linkedin.com${socials}`} target="blank" className='t3-a-tag'>linkedin.com/{linkedIn}</a>
                       
                            </div>
                        }
         
                    </div>

                    <div className='line-break'></div>

                    <div id='t3-description-container'>
                        <h3>Professional Summary</h3>
                        <p id='description'>{description}</p>
                    </div>

                    <div className='line-break'></div>


                    <div id='t3-skills-container'>
                        {skills.length !== 0 && 
                            <>
                                <h3 id=''>{skills1Name}</h3>
                                <div id='t3-skills-centering-container'>
                                    <div id='t3-mapped-skills-container'>

                                        {skills.map((skill, id) => (
                                            <span key={id}>•<p className='' >{skill}</p></span>
                                            ))}
                                    </div>
                                </div>
                            </>
                        }
                    </div>

    
       
                    {/* <p id='t2-summary'>SUMMARY</p> */}

                    <div className='line-break'></div>

      

                    <h3 id='t4-topic-title'>Relevant History</h3>
                    {jobs.map((object, id) => (
                        <div className='t3-jobs-container' key={id}>
                            <p id={`job-hidden-padding${id}`} className='hidden'>{object.padding}</p>

                            <h4 className='' id={`resume-title${id}`}>{object.jobTitle}</h4>
                            <p className=''><span className='t4-company' id={`resume-company${id}`}>{object.company}</span>. <span id={`resume-start-date${id}`}>{object.startDate}</span> - <span id={`resume-end-date${id}`}>{object.endDate}</span></p>
                            <p className='' id={`resume-description${id}`}>{object.jobDescription}</p>

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

                    <div className='line-break'></div>

                    <h4 className='t4-education-title'>EDUCATION</h4>

                    {education.map((object, id) => (
                        <div key={id}>
                            <p id={`ed-hidden-padding${id}`} className='hidden'>{object.padding}</p>

                            <h4 className='' id={`resume-degree${id}`}>{object.degree}</h4>

                            <span className='t3-school-row'><h4 id={`resume-school${id}`}>{object.university} </h4>.&nbsp;<span id={`ed-resume-start-date${id}`}>{object.startDate}</span> - <span id={`ed-resume-end-date${id}`}>{object.endDate}</span></span>
                            
                            <p className='' id={`resume-ed-description${id}`}>{object.description}</p>
                            <br/>
                            {object.padding === 1 && <><br/><br/></>}
                            {object.padding === 2 && <><br/><br/><br/><br/></>}
                            {object.padding === 3 && <><br/><br/><br/><br/><br/><br/></>}
                            {object.padding === 4 && <><br/><br/><br/><br/><br/><br/><br/><br/></>}
                            {object.padding === 5 && <><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></>}
                        </div>
                    ))}
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

export default TemplateThree
