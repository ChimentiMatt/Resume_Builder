import '../styles/templateOne.css'
import { useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print';

import AddJobs from '../utility/AddJobs'
import AddEducation from '../utility/AddEducation';

const TemplateOne = () => {
    let componentRef = useRef()
    const [name, setName] = useState("Ash Ketchum")
    const [description, setDescription] = useState('Software developer, masters student and a highly driven individual who loves software and problem solving')
    const [email, setEmail] = useState('hotcat@gmail.com')
    const [website, setWebsite] = useState('alphaExpo.com') 

    const [objId, setObjId] = useState(0)
    const [currentTab, setCurrentTab] = useState(0)
    const [jobs, setJobs] = useState([{
        id: 0,
        jobTitle: 'Pokemon Trainer',
        company: 'Elite Four', 
        jobDescription: 'I just really wanted to be the very best, like no one ever was',
        tasks: ['caught all 150', 'never evolved starter pokemon'],
        startDate: 'Jan 2000',
        endDate: 'December 2022'
    }])

    const [edObjId, setEdObjId] = useState(0)

    const [education, setEducation] = useState([{
        degree: 'Master Trainer',
        university: 'Elite 4 Vocational',
        startDate: 'Jan 2000',
        endDate: 'December 2022',
        description: 'Received a 4.0 and was the only student who evolved a Magikarp'
    }])

    const [skills1Name, setSkills1Name] = useState('Skills')
    const [buildSkill, setBuildSkill] = useState('')
    const [skills, setSkills] = useState(['Battling', 'Evolving', 'Leveling', 'Never Aging'])

   const [skills2Name, setSkills2Name] = useState('Languages')
    const [buildSecondarySkill, setBuildSecondarySkill] = useState('')
    const [secondarySkill, setSecondarySkill] = useState(['gym leader', 'never ages'])

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        // onAfterPrint: () => alert('Print Success')
    })

    const addSkill = (event) => {
        event.preventDefault()
        setSkills(current => [...current, buildSkill])
    }

    const removeSkill = (propSkill) => {
        setSkills(current => current.filter(item => item !== propSkill))
    }

    const addSecondarySkill = (event) => {
        event.preventDefault()
        setSecondarySkill(current => [...current, buildSecondarySkill])
    }

    const removeSecondarySkill = (propSkill) => {
        setSecondarySkill(current => current.filter(item => item !== propSkill))
    }

    const addJob = () => {
        setObjId(objId +1)

        setJobs(current => [...current, {
            id : objId,
            jobTitle: 'Pokemon Trainer',
            company: 'Elite Four', 
            jobDescription: 'I just really wanted to be the very best, like no one ever was',
            tasks: ['caught all 150', 'never evolved starter pokemon'],
            startDate: 'Jan 2000',
            endDate: 'December 2022'
        }])

    }

    const addEducation = () => {
        setEducation(current => [...current, {
            degree: 'Master Trainer',
            university: 'Elite 4 Vocational',
            startDate: 'Jan 2000',
            endDate: 'December 2022',
            description: 'Received a 4.0 and was the only student who evolved a Magikarp'
        }])
    }




    // const currentTab = (id) => {
    //     alert('hi')
    // }

    return (
        <div id='template-one-page'>

            <div id='input-column'>

                <button onClick={handlePrint}>Print</button>
                <br/>

                <div id='primary-info-forms'>
                    <label name='name'>Name</label>
                    <input onChange={(event) => setName(event.target.value)} ></input>

                    <label name='description'>Description</label>
                    <input onChange={(event) => setDescription(event.target.value)}></input>

                    <label name='website'>Website</label>
                    <input onChange={(event) => setWebsite(event.target.value)}></input>

                    <label name='email'>Email</label>
                    <input onChange={(event) => setEmail(event.target.value)}></input>
                </div>

                <br/>

                {/* <label>Jobs</label> */}
                
                <div>
                    {/* <Tabs defaultIndex={1}>
                        <TabList>
                            {jobs.map((job,id) => (
                                    <Tab key={id} onClick={() => setCurrentTab(id)}>
                                        <p  id={`tab${id}`}>
                                            Job {id +1}

                                        </p>
                                    </Tab>
                            ))}
                        </TabList>
                        
                        <div id='tab-content'>
                            {jobs.map((job,id) => (
                                <div key={id}>
                                    <TabPanel>
                                        {jobs.map( (job, id) => (
                                            <AddJobs key={id} jobs={jobs} job={job} setJobs={setJobs} id={id} currentTab={currentTab} objId={objId} setObjId={setObjId}/>    
                                            ))}
                                    </TabPanel>
                                </div>
                            ))}
                        </div>
                    </Tabs> */}


                        {/* HEREEEEEEEEEEE */}


                    <div id='tabs-container'>
                        {jobs.map((job,id) => (
                            <div key={id} >
                                <button id={`tab${id}`} onClick={() => setCurrentTab(id)}>Job {id +1}</button>
                            </div>
                        ))}
                    </div>   
                                
                    <div className='tab-content'>
                        {jobs.map( (job, id) => (
                            <div id={`tab-content${id}`} key={id}>
                                {currentTab === id && 
                                    <AddJobs jobs={jobs} job={job} setJobs={setJobs} id={id} currentTab={currentTab} objId={objId} setObjId={setObjId}/>    
                                }
                            </div>
                        ))}
                    </div>

                    <button onClick={addJob}>Add Another Job</button>
                    <br/>
                    <br/>

                    {education.map((item, id) => (
                        <AddEducation key={id} education={education} item={item} setEducation={setEducation} id={id} edObjId={edObjId} setEdObjId={setEdObjId}/>
                    ))}


                    {/* {education.length === 0 && <button onClick={addEducationSection}>Add Education Section</button>} */}
                   
                    <button onClick={addEducation}>Add Education </button>
                
                               











                </div>

                {/* {jobs.map( (job, id) => (
                    <AddJobs key={id} jobs={jobs} job={job} setJobs={setJobs} id={id}/>    
                ))} */}

                {/* {jobs.map( (object, id) => (
                    <div key={id}>
                        {object.company && 
                            <div>
                                <p>Company:{object.company}</p>
                                <p>Description:</p>
                            </div>
                        }
                    </div>
                ))} */}
            </div>


            {/* Resume Print Section */}

            <div id='contents-template-one' ref={componentRef}>
                <div id='top-row'>
                    <div id='top-row-left'>
                        <h1 className='primary-color' id='name'>{name}</h1>
                        <p id='description'>{description}</p>
                        <br/>
                    </div>
                    <div id='top-row-right'>
                        <p>{email}</p>
                        <p>{website}</p>
                    </div>
                </div>

                <div id='experience-and-skills'>

                    <div id='jobs-section'>
                        <h4 className='primary-color'>EXPERIENCE</h4>
                        {jobs.map((object, id) => (
                            <div key={id}>
                                <h4 id={`resume-title${id}`}>{object.jobTitle}</h4>
                                <p className='company-and-date'>{object.company} {object.startDate} - {object.endDate}</p>
                                <p>{object.jobDescription}</p>
                                {object.tasks.map((task, id) => (
                                    <li className='job-items' key={id}>{task}</li>
                                ))}
                                <div className='m-b'></div>
                            </div>
                        ))}
                        
                    <div>
                        {education.length > 0 && <h4 className='primary-color'>EDUCATION</h4>}
                        
                        {education.map((object, id) => (
                            <div key={id}>
                                <h4>{object.degree}</h4>
                                <p>{object.university} {object.startDate} {object.endDate}</p>
                                <p className='m-b'>{object.description}</p>
                                
                            </div>
                        ))}

                    </div>
                    </div>


                    <div id='skills-column'>
                        <h4 className='secondary-color'>{skills1Name}</h4>
                        <div className='left-border'>
                            {skills.map((skill, id) => (
                                <p key={id}>{skill}</p>
                            ))}
                        </div>
                        <br/>
                        <h4 className='secondary-color'>{skills2Name}</h4>
                        <div className='left-border'>
                            {secondarySkill.map((skill, id) => (
                                <p key={id}>{skill}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div id='skills-forms'>
                <label name='skills'>Skill Section One Name</label>
                <input onChange={(event) => setSkills1Name(event.target.value)} placeholder="Skills"></input>

                <form onSubmit={addSkill}>
                    <label name='skills'>Add Skill</label>
                    <input onChange={(event) => setBuildSkill(event.target.value)}></input>
                    <button onClick={addSkill}>Add</button>
                </form>
                <div className='skill-box'>
                    {skills.map((skill, index) => (<p key={index}>{skill} <button onClick={() => removeSkill(skill)}>x</button></p>))}
                </div>

                <br/>

                <label name='secondary skill'>Skill Section Two Name</label>
                <input onChange={(event) => setSkills2Name(event.target.value)} placeholder="Languages"></input>
                <form onSubmit={addSecondarySkill}>
                    <label name='skills'>Add Skill</label>
                    <input onChange={(event) => setBuildSecondarySkill(event.target.value)}></input>
                    <button onClick={addSecondarySkill}>Add</button>
                </form>

                <div className='skill-box'>
                    {secondarySkill.map((skill, id) => (<p key={id}>{skill} <button onClick={() => removeSecondarySkill(skill)}>x</button></p>))}
                </div>
            </div>
        </div>
    )
}

export default TemplateOne