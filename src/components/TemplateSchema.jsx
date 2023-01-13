import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';

// NOT FOR USING only to make new template components outside this file

const TemplateTwo = ({name, description, email, website, socials, jobs, education, skills1Name, skills, skills2Name, secondarySkill}) => {
    let componentRef = useRef()

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        // onAfterPrint: () => alert('Print Success')
    })
     return (
        <div>
            <button onClick={handlePrint}>Print Resume as PDF <i className="uil uil-print"></i></button>
            <br/><br/>
            <div id='contents-template-two' ref={componentRef}>

                <div >
                    <div >
                        <h1 id='name'>{name}</h1>
                        <p id='description'>{description}</p>
                        <br/>
                    </div>
                    <div >
                        <p id='email'>{email}</p>
                        <p id='website'>{website}</p>
                        <p id='socials'>{socials}</p>
                    </div>
                </div>

                <div id='experience-and-skills'>

                    <div>
                        <h4>EXPERIENCE</h4>
                        {jobs.map((object, id) => (
                            <div key={id}>
                                <h4 id={`resume-title${id}`}>{object.jobTitle}</h4>
                                <p ><span id={`resume-company${id}`}>{object.company}</span> <span id={`resume-start-date${id}`}>{object.startDate}</span> - <span id={`resume-end-date${id}`}>{object.endDate}</span></p>
                                <p id={`resume-description${id}`}>{object.jobDescription}</p>

                                {object.tasks.map((task, id) => (
                                    <div key={id} >
                                        <li ></li>
                                        <p id={`resume-tasks${id}`}>{task}</p>
                                    </div>
                                ))}
                                <div ></div>
                                <div id={`new-page-spacing${id}`}></div>
                            </div>
                        ))}
                        
                    <div>
                        {education.length > 0 && <h4>EDUCATION</h4>}
                        
                        {education.map((object, id) => (
                            <div  key={id}>
                                <h4 id={`resume-degree${id}`}>{object.degree}</h4>
                                <p><span id={`resume-university${id}`} >{object.university} {object.startDate} - {object.endDate}</span></p>
                                <p id={`resume-description${id}`}>{object.description}</p>

                                <div id={`ed-new-page-spacing${id}`}></div>
                            </div>
                        ))}

                    </div>
                    </div>


                    <div >
                        <h4 >{skills1Name}</h4>
                        <div >
                            {skills.map((skill, id) => (
                                <p  key={id}>{skill}</p>
                            ))}
                        </div>
                        <br/>
                        <h4 >{skills2Name}</h4>
                        <div>
                            {secondarySkill.map((skill, id) => (
                                <p key={id}>{skill}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TemplateTwo
