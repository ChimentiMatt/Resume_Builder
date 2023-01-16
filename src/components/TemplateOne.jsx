import { useRef, useEffect } from 'react'
import { useReactToPrint } from 'react-to-print';
import { UilPrint } from '@iconscout/react-unicons'

const TemplateOne = ({name, description, email, website, socials, jobs, education, skills1Name, skills, skills2Name, secondarySkill}) => {
    let componentRef = useRef()

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        // onAfterPrint: () => alert('Print Success')
    })

    const extendPageTwo = () => {
        if (document.querySelector('#jobs-section').offsetHeight > 890){
            document.querySelector('#contents-template-one').style.height = '2112px'
        }
        else if (document.querySelector('#jobs-section').offsetHeight < 891){
         
            document.querySelector('#contents-template-one').style.height = '1056px'
        }
    }

    useEffect(() => {
        extendPageTwo()
        console.log(secondarySkill.length)
    })

    return (
        <div>
            <button className='print-btn' onClick={handlePrint}>Print Resume as PDF 
                <UilPrint size="15" color="#ffffff" className='icon-btn m-l'/>
            </button>
            <br/><br/>
            <div id='contents-template-one' ref={componentRef}>

                <div id='top-row'>
                    <div id='top-row-left'>
                        <h1 className='primary-color' id='name'>{name}</h1>
                        <p id='description'>{description}</p>
                        <br/>
                    </div>
                    <div id='top-row-right'>
                        <p id='email'>{email}</p>
                        <p id='website'>{website}</p>
                        <p id='socials'>{socials}</p>
                    </div>
                </div>

                <div id='experience-and-skills'>

                    <div id='jobs-section'>
                        <h4 className='primary-color'>EXPERIENCE</h4>

                        {jobs.map((object, id) => (
                            <div key={id}>
                                <p  id={`job-hidden-padding${id}`} className='hidden'>{object.padding}</p>
                                {/* <div id={`new-page-spacing${id}`}></div> */}

                                {object.padding === 1 && <><br/><br/></>}
                                {object.padding === 2 && <><br/><br/><br/><br/></>}
                                {object.padding === 3 && <><br/><br/><br/><br/><br/><br/></>}

                                <h4 id={`resume-title${id}`}>{object.jobTitle}</h4>
                                <p className='company-and-date'><span id={`resume-company${id}`}>{object.company}</span>. <span id={`resume-start-date${id}`}>{object.startDate}</span> - <span id={`resume-end-date${id}`}>{object.endDate}</span></p>
                                <p id={`resume-description${id}`}>{object.jobDescription}</p>
                                
                                {object.tasks.map((task, id) => (
                                    <div key={id} className='task-container'>
                                        <li className='job-items'></li>
                                        <p id={`resume-tasks${id}`}>{task}</p>
                                    </div>
                                ))}
                                <div className='m-b'></div>
                            </div>
                        ))}
                        
                        <div>
                            {education.length > 0 && <h4 className='primary-color'>EDUCATION</h4>}
                            
                            {education.map((object, id) => (
                                <div key={id}>
                                    <p  id={`ed-hidden-padding${id}`} className='hidden'>{object.padding}</p>
                                    {/* <div id={`ed-new-page-spacing${id}`}></div> */}

                                    {object.padding === 1 && <><br/><br/></>}
                                    {object.padding === 2 && <><br/><br/><br/><br/></>}
                                    {object.padding === 3 && <><br/><br/><br/><br/><br/><br/></>}

                                    <h4 id={`resume-degree${id}`}>{object.degree}</h4>
                                    <p id={`resume-university${id}`} className='uni-and-dates'>{object.university}. <span id={`ed-resume-start-date${id}`}>{object.startDate}</span> - <span id={`ed-resume-end-date${id}`}>{object.endDate}</span></p>
                                    <p id={`resume-description${id}`} className='m-b'>{object.description}</p>

                                </div>
                            ))}

                        </div>
                    </div>

                    <div id='skills-column'>
                        {skills.length !== 0 && 
                            <>
                                <h4 className='secondary-color'>{skills1Name}</h4>
                                <div className='left-border'>
                                    {skills.map((skill, id) => (
                                        <p className='no-wrap' key={id}>{skill}</p>
                                        ))}
                                </div>
                            </>
                        }
                        <br/>
                        {secondarySkill.length !== 0 && 
                            <>
                                <h4 className='secondary-color'>{skills2Name}</h4>
                                <div className='left-border'>
                                    {secondarySkill.map((skill, id) => (
                                        <p className='no-wrap' key={id}>{skill}</p>
                                    ))}
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
            <div className='page-end-line'></div>
        </div>
    )
}

export default TemplateOne