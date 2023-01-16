import '../styles/home.css'
import '../styles/templateOne.css'
import '../styles/templateTwo.css'
import { useState, useEffect } from "react";
import AddJobs from '../utility/AddJobs'
import AddEducation from '../utility/AddEducation';
import TemplateOne from './TemplateOne';
import TemplateTwo from './TemplateTwo';
import TemplateSelect from './TemplateSelect';

import { UilTrashAlt } from '@iconscout/react-unicons'
import { UilPlus } from '@iconscout/react-unicons'
import { UilConstructor } from '@iconscout/react-unicons'


const Home = () => {
    const [template, setTemplate] = useState(2)
    const [name, setName] = useState("First Last ")
    const [careerTitle, setCareerTitle] = useState('Career Title')
    const [phone, setPhone] = useState('503-999-9999')
    const [description, setDescription] = useState('Short description on who you are, what you do any why you are valuable')
    const [email, setEmail] = useState('email@gmail.com')
    const [website, setWebsite] = useState('website.com') 
    const [socials, setSocials] = useState('')
    const [objId, setObjId] = useState(0)
    const [currentTab, setCurrentTab] = useState(0)
    const [jobs, setJobs] = useState([{
        id: 0,
        jobTitle: 'Job Title',
        company: 'Company Name', 
        jobDescription: 'Job description. Designed and built computer programs that power mobile devices, desktop computers, and even cars. ',
        tasks: ['Designed software architecture', 'Managed software programs'],
        startDate: 'April 2019',
        endDate: 'December 2022',
        padding: 0
    }])
    const [edObjId, setEdObjId] = useState(0)
    const [currentEducationTab, setCurrentEducationTab] = useState(0)
    const [education, setEducation] = useState([{
        degree: 'Degree',
        university: 'School Name',
        startDate: 'Jan 2000',
        endDate: 'December 2022',
        description: 'Degree description. Received a 3.9 and deployed a production website that generated over six figures of revenue.',
        padding: 0
    }])
    const [skills1Name, setSkills1Name] = useState('SKILLS')
    const [buildSkill, setBuildSkill] = useState('')
    const [skills, setSkills] = useState(['React', 'Express', 'MongoDB', 'Node.js', 'MERN Stack', 'Django', 'GIT'])
    const [skills2Name, setSkills2Name] = useState('LANGUAGES')
    const [buildSecondarySkill, setBuildSecondarySkill] = useState('')
    const [secondarySkill, setSecondarySkill] = useState(['JavaScript', 'Python', 'Java', 'C#', 'HTML', 'CSS'])

    const addSkill = (event) => {
        if (buildSkill !== '') setSkills(current => [...current, buildSkill])
    }

    const removeSkill = (propSkill) => {
        setSkills(current => current.filter(item => item !== propSkill))
    }

    const addSecondarySkill = (event) => {
        if (buildSecondarySkill !== '') setSecondarySkill(current => [...current, buildSecondarySkill])
    }

    const removeSecondarySkill = (propSkill) => {
        setSecondarySkill(current => current.filter(item => item !== propSkill))
    }

    const addJob = (targetId) => {
        setObjId(objId )

        setJobs(current => [...current, {
            id : objId,
            jobTitle: 'Barista',
            company: 'Starbucks', 
            jobDescription: 'Baristas are the face of Starbucks. They are an important part of our customers days, and experts in handcrafting delicious, perfect beverages.',
            tasks: [' making quality beverages', 'speciality drinks'],
            startDate: 'Jan 2000',
            endDate: 'December 2022',
            padding: 0
        }])
        
        // used to update tab as a callback so state is already set
        setTimeout(() => {
            document.querySelector(`#tab${targetId}`).click()
        }, 0)
    }

    const addEducation = (targetId) => {
        setEducation(current => [...current, {
            degree: 'Degree',
            university: 'School Name',
            startDate: 'Jan 2000',
            endDate: 'December 2022',
            description: 'Degree description. Received a BA of ... while earning a prestigious internship.',
            padding: 0
        }])

        // used to update tab as a callback so state is already set
        setTimeout(() => {
            document.querySelector(`#education-tab${targetId}`).click()
        }, 0)
    }

    const updateCurrentTab = (id) => {
        document.querySelector(`#tab${currentTab}`).style.background = 'lightgray'
        setCurrentTab(id)
        document.querySelector(`#tab${id}`).style.background = 'white'
    }

    const updateCurrentEducationTab = (id) => {
        document.querySelector(`#education-tab${currentEducationTab}`).style.background = 'lightgray'
        setCurrentEducationTab(id)
        document.querySelector(`#education-tab${id}`).style.background = 'white'
    }

    const populateFormInputs = () => {
       // Uses current state and populates forms values
       // This function only has inputs and values for fields that are on all templates
       // Template will have specific logic to their values in their useEffects

       // try catch allows for more dynamic conditional rendering so program does not break between components

       try {
           document.querySelector(`#name-input`).value = document.querySelector(`#name`).innerHTML
           setName(document.querySelector(`#name-input`).value)
       }
       catch (error){
        setName('')
       }

       try {
           document.querySelector(`#website-input`).value = document.querySelector(`#website`).innerHTML
           setWebsite(document.querySelector(`#website-input`).value)
       }
       catch (error){
        setWebsite('')
       }

       try {
           document.querySelector(`#email-input`).value = document.querySelector(`#email`).innerHTML
           setEmail(document.querySelector(`#email-input`).value)
       }
       catch (error){
        setEmail('')
       }

       try {
            document.querySelector(`#socials-input`).value = document.querySelector(`#socials`).innerHTML
            setSocials(document.querySelector(`#socials-input`).value)
       } catch (error){
            setSocials('')
       }

       try {
           document.querySelector(`#description-input`).value = document.querySelector(`#description`).innerHTML
           setDescription(document.querySelector(`#description-input`).value)
       } catch (error){
            setDescription('')
       }
       
    }

    useEffect(() => {
        document.querySelector(`#tab${currentTab}`).style.background = 'white'
        document.querySelector(`#education-tab${currentEducationTab}`).style.background = 'white'

        populateFormInputs()

    }, [currentTab, currentEducationTab])

    return (
        <div id='home-page'>
            {/* Following div only viewable on mobile */}

            {/* <div id='no-mobile'>
                <h1 >Resume Builder 
                    <UilConstructor size="25" color="#0EA4FF" className='icon-btn m-l'/>
                </h1>
                <p>Is not available on mobile</p>
                <p id='no-mobile-message'>If on desktop, please maximize your screen</p>
            </div> */}

            <div>
                <h1 id='program-title'><span className=''>ResumeMaker</span><span className='title-color'>.dev </span><UilConstructor size="25" color="#0EA4FF" className='icon-btn '/></h1>

                <div id='primary-info-forms-container'>

                    <div id='primary-info-forms'>
                        <label name='name'>Name</label>
                        <input id='name-input' onChange={(event) => setName(event.target.value)} ></input>

                        {template === 2  && 
                            <>
                                <label name='career title'>Career Title</label>
                                <input id='career-input' onChange={(event) => setCareerTitle(event.target.value)} ></input>
                            </>
                        }
                        {template === 2  && 
                            <>
                                <label name='phone'>Phone</label>
                                <input id='phone-input' onChange={(event) => setPhone(event.target.value)} ></input>
                            </>
                        }
                        <label name='website'>Website</label>
                        <input id='website-input' onChange={(event) => setWebsite(event.target.value)}></input>

                        <label name='email'>Email</label>
                        <input id='email-input' onChange={(event) => setEmail(event.target.value)}></input>

                        <label name='socials'>Socials</label>
                        <input id='socials-input' onChange={(event) => setSocials(event.target.value)}></input>

                        <label name='description'>Description</label>
                        <textarea id='description-input' className="priority-field" onChange={(event) => setDescription(event.target.value)}></textarea>
                    </div>
                </div>

                <br/>
                <br/>
                
                <div id='jobs-container'>
                    <div id='jobs-length'>
                        <div id='tabs-container'>
                            {jobs.map((job,id) => (
                                <div key={id} >
                                    <button className='tab-btn' id={`tab${id}`} onClick={() => updateCurrentTab(id)}>Job {id +1}</button>
                                    {id === jobs.length -1 && 
                                    <UilPlus onClick={() => addJob(id+1)} size="15" color="#0EA4FF" className='icon-btn m-l'/>
                                    }
                                </div>
                            ))}
                            
                        </div>   
                        <div className='tab-content'>
                            {jobs.map( (job, id) => (
                                <div id={`tab-content${id}`} key={id}>
                                    {currentTab === id && <AddJobs jobs={jobs} job={job} setJobs={setJobs} id={id} currentTab={currentTab} objId={objId} setObjId={setObjId}/> }
                                </div>
                            ))}
                        </div>
                    </div>
                    <br/>
                    <br/>

                </div>

            </div>

            <div id='desktop-templates'>
                <TemplateSelect setTemplate={setTemplate}/>

                {template === 1 && <TemplateOne name={name} description={description} email={email} website={website} socials={socials} jobs={jobs} education={education} skills1Name={skills1Name} skills={skills} skills2Name={skills2Name} secondarySkill={secondarySkill} />}
                {template === 2 && <TemplateTwo name={name} careerTitle={careerTitle} phone={phone} description={description} email={email} website={website} socials={socials} jobs={jobs} education={education} skills1Name={skills1Name} skills={skills} skills2Name={skills2Name} secondarySkill={secondarySkill} setCareerTitle={setCareerTitle} setPhone={setPhone}/> }

            </div>

            <div id='right-forms-container'>
                <div id='right-forms'>
                    <label name='skills'>Skill Title One</label>
                    <br/>

                    <input className='skills-input' onChange={(event) => setSkills1Name(event.target.value)} placeholder="SKILLS"></input>
                    <br/>

                    <label name='skills'>Add A Skill</label>
                    <br/>
            
                    <input className='skills-input-and-btn ' onChange={(event) => setBuildSkill(event.target.value)}></input>

                    <UilPlus onClick={addSkill} size="15" color="#0EA4FF" className='icon-btn m-l'/>
                    
                    <div className='skill-box'>
                        {skills.map((skill, index) => (
                        <p key={index}>{skill} 
                            <UilTrashAlt onClick={() => removeSkill(skill)}  size="15" color="#0EA4FF" className='icon-btn '/>
                        </p>))}
                    </div>
                    
                    <br className='mobile-hide'/>
                    <br/>

                    <label className='skills-input' name='secondary skill'>Skill Title Two</label>
                    <br/>

                    <input className='skills-input' onChange={(event) => setSkills2Name(event.target.value)} placeholder="LANGUAGES"></input>
                    <br/>

                    <label className='skills-input' name='skills'>Add A Skill</label>
                    <br/>  

                    <input className='skills-input-and-btn' onChange={(event) => setBuildSecondarySkill(event.target.value)}></input>
                    <UilPlus onClick={addSecondarySkill}  size="15" color="#0EA4FF" className='icon-btn m-l'/>

                    <div className='skill-box'>
                        {secondarySkill.map((skill, id) => (
                        <p key={id}>{skill} 
                            <UilTrashAlt onClick={() => removeSecondarySkill(skill)} size="15" color="#0EA4FF" className='icon-btn'/>
                        </p>
                        ))}
                    </div>
                    <br/>
                    <br/>

                    <div className='mobile-show'>
                        <br /><br /><br />
                    </div>

                    <div id='tabs-container'>
                            {education.map((job,id) => (
                                <div key={id} >
                                    <button className='tab-btn ' id={`education-tab${id}`} onClick={() => updateCurrentEducationTab(id)}>School {id +1}</button>

                                    {id === education.length -1 && <UilPlus onClick={() => addEducation(id +1)}  size="15" color="#0EA4FF" className='icon-btn m-l'/>}
                                </div>
                            ))}
                    </div>   
                    {education.map((item, id) => (
                        <div key={id}>
                            {currentEducationTab === id && <AddEducation key={id} education={education} item={item} setEducation={setEducation} id={id} edObjId={edObjId} setEdObjId={setEdObjId}/>}
                        </div>
                    ))}
                    
                    {/* Hidden div so dom can grab values that would not exist momentarily as dom is changing template components */}
                    <div className='hidden'>
                            <p id='career'>{careerTitle}</p>
                            <p id='phone'>{phone}</p>
                    </div>
                </div>
            </div>

            <div id='mobile-templates'>
                <TemplateSelect setTemplate={setTemplate}/>
                {template === 1 && <TemplateOne name={name} description={description} email={email} website={website} socials={socials} jobs={jobs} education={education} skills1Name={skills1Name} skills={skills} skills2Name={skills2Name} secondarySkill={secondarySkill}/>}
                {template === 2 && <TemplateTwo name={name} careerTitle={careerTitle} phone={phone} description={description} email={email} website={website} socials={socials} jobs={jobs} education={education} skills1Name={skills1Name} skills={skills} skills2Name={skills2Name} secondarySkill={secondarySkill} setCareerTitle={setCareerTitle} setPhone={setPhone}/> }
            </div>
        </div>
    )
}

export default Home