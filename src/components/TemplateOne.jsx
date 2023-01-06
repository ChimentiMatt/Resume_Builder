import '../styles/templateOne.css'
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print';

import AddJobs from '../utility/AddJobs'

const TemplateOne = () => {
    let componentRef = useRef()
    const [name, setName] = useState("Ash Ketchum")
    const [description, setDescription] = useState('Software developer, masters student and a highly driven individual who loves software and problem solving')
    const [email, setEmail] = useState('hotcat@gmail.com')
    const [website, setWebsite] = useState('alphaExpo.com') 
    const [jobs, setJobs] = useState([{
        id: 0,
        company: 'Elite Four', 
        jobDescription: 'Pokemon Trainer',
        tasks: ['caught all 150', 'never evolved starter pokemon'],
        startDate: 'Jan 2000',
        endDate: 'December 2022'
    }])

    const [currentTab, setCurrentTab] = useState(0)

    const [buildSkill, setBuildSkill] = useState('')
    const [skills, setSkills] = useState(['Python', 'Java'])

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
                    <Tabs>
                        <TabList>
                            {jobs.map((job,id) => (
                                <Tab key={id} onClick={() => setCurrentTab(id)}>Job {id +1}</Tab>
                            ))}
                        </TabList>
                        
                        <div id='tab-content'>
                            {jobs.map((job,id) => (
                                <div key={id}>
                                    <TabPanel>
                                        {jobs.map( (job, id) => (
                                            <AddJobs key={id} jobs={jobs} job={job} setJobs={setJobs} id={id} currentTab={currentTab} />    
                                            ))}
                                    </TabPanel>
                                </div>
                            ))}
                        </div>

                    </Tabs>
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
                                <h4>{object.company}</h4>
                                <p>{object.startDate} - {object.endDate}</p>
                                <p>{object.jobDescription}</p>
                                {object.tasks.map(task => (
                                    <li key={task}>{task}</li>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div id='skills-column'>
                        <h4>Skills</h4>
                        <div className='left-border'>
                            {skills.map(skill => (
                                <p key={skill}>{skill}</p>
                            ))}
                        </div>
                        <h4>Achievements</h4>
                        <div className='left-border'>
                            {secondarySkill.map(skill => (
                                <p key={skill}>{skill}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div id='skills-forms'>
                <label name='skills'>Skills</label>
                <form onSubmit={addSkill}>
                    <input onChange={(event) => setBuildSkill(event.target.value)}></input>
                    <button onClick={addSkill}>Add</button>
                </form>
                <div className='skill-box'>
                    {skills.map((skill, index) => (<p key={index}>{skill} <button onClick={() => removeSkill(skill)}>x</button></p>))}
                </div>

                <br/>

                <label name='secondary skill'>Secondary Skill / Achievement</label>
                <form onSubmit={addSecondarySkill}>
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