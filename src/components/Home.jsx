import '../styles/intro.css'
import '../styles/introMobile.css'
import '../styles/home.css'
import '../styles/templateOne.css'
import '../styles/templateTwo.css'
import '../styles/templateThree.css'
import '../styles/mobile.css'

import { useState, useEffect } from "react";
import AddJobs from '../utility/AddJobs'
import AddEducation from '../utility/AddEducation';
import TemplateOne from './TemplateOne';
import TemplateTwo from './TemplateTwo';
import TemplateThree from './TemplateThree';
import TemplateSelect from './TemplateSelect';

import { UilPlus } from '@iconscout/react-unicons'
import { UilConstructor } from '@iconscout/react-unicons'
import SkillOne from '../utility/SkillOne'
import SkillTwo from '../utility/SkillTwo'
import IntroScreen from './IntroScreen'


const Home = () => {
    const [template, setTemplate] = useState(2)
    const [name, setName] = useState("First Last ")
    const [careerTitle, setCareerTitle] = useState('Career Title')
    const [phone, setPhone] = useState('503-999-9999')
    const [description, setDescription] = useState('Short description on who you are, what you do any why you are valuable')
    const [email, setEmail] = useState('email@gmail.com')
    const [linkedIn, setLinkedIn] = useState('')
    const [website, setWebsite] = useState('') 
    const [socials, setSocials] = useState('')
    const [objId, setObjId] = useState(0)
    const [currentTab, setCurrentTab] = useState(0)
    const [jobs, setJobs] = useState([{
        id: 0,
        jobTitle: 'Job Title',
        company: 'Company Name', 
        jobDescription: 'Designed and built computer programs that power mobile devices, desktop computers, and even cars. ',
        tasks: ['Designed software architecture', 'Managed software programs'],
        startDate: 'December 2022',
        endDate: 'December 2022',
        padding: 0
    }])
    const [edObjId, setEdObjId] = useState(0)
    const [currentEducationTab, setCurrentEducationTab] = useState(0)
    const [education, setEducation] = useState([{
        degree: 'Degree',
        university: 'School Name',
        startDate: 'December 2022',
        endDate: 'December 2022',
        description: 'Received a 3.9 and deployed a production website that generated over six figures of revenue.',
        padding: 0
    }])
    const [skills1Name, setSkills1Name] = useState('SKILLS')
    const [buildSkill, setBuildSkill] = useState('')
    const [skills, setSkills] = useState(['React', 'Express', 'MongoDB', 'Node.js', 'MERN Stack', 'Django', 'GIT'])
    const [skills2Name, setSkills2Name] = useState('LANGUAGES')
    const [buildSecondarySkill, setBuildSecondarySkill] = useState('')
    const [secondarySkill, setSecondarySkill] = useState(['JavaScript', 'Python', 'Java', 'C#', 'HTML', 'CSS'])

    const addSkill = () => {
        if (buildSkill !== '') setSkills(current => [...current, buildSkill])
        document.querySelector('#skill-one-input').value = ''
        setBuildSkill("")
    }

    const removeSkill = (propSkill) => {
        setSkills(current => current.filter(item => item !== propSkill))
    }

    const moveSkill = (direction, index, propSkill) => {
        let indexDirection = 0
        if (direction === 'up') indexDirection = -1
        if (direction === 'down') indexDirection = 1

        const skillsCopy = []

        // Remove skill from state
        for (let i = 0; i < skills.length; i++){
            if (skills[i] !== propSkill) skillsCopy.push(skills[i])
            // skillsCopy.push(skills[i])
        }

        // Insert value at index -1
        skillsCopy.splice(index + indexDirection, 0, propSkill)

        // Set array from copy
        setSkills(skillsCopy)
    }

    const addSecondarySkill = (event) => {
        if (buildSecondarySkill !== '') setSecondarySkill(current => [...current, buildSecondarySkill])
        document.querySelector('#skill-two-input').value = ''
        setBuildSecondarySkill("")
    }

    const removeSecondarySkill = (propSkill) => {
        setSecondarySkill(current => current.filter(item => item !== propSkill))
    }

    // For the second component, SkillsTwo
    const moveSkill2 = (direction, index, propSkill) => {
        let indexDirection = 0
        if (direction === 'up') indexDirection = -1
        if (direction === 'down') indexDirection = 1

        const skillsCopy = []

        // Remove skill from state
        for (let i = 0; i < secondarySkill.length; i++){
            if (secondarySkill[i] !== propSkill) skillsCopy.push(secondarySkill[i])
            // skillsCopy.push(skills[i])
        }

        // Insert value at index -1
        skillsCopy.splice(index + indexDirection, 0, propSkill)

        // Set array from copy
        setSecondarySkill(skillsCopy)
    }

    const addJob = (targetId) => {
        // Makes tabs become disabled to avoid losing data on switching tabs
        for (let i = 0; i < jobs.length; i++){
            document.querySelector(`#tab${i}`).disabled = true;
        }
        
        // document.querySelector(`#update-job-btn`).click()
        setCurrentTab(targetId)
        setObjId(objId)

        setJobs(current => [...current, {
            id : objId,
            jobTitle: 'Barista',
            company: 'Starbucks', 
            jobDescription: 'Baristas are the face of Starbucks. They are an important part of our customers days, and experts in handcrafting delicious, perfect beverages.',
            tasks: [' making quality beverages', 'speciality drinks'],
            startDate: 'December 2022',
            endDate: 'December 2022',
            padding: 0
        }])
        
        // used to update tab as a callback so state is already set
        setTimeout(() => {
            document.querySelector(`#tab${targetId}`).click()
        }, 0)
    }

    const addEducation = (targetId) => {
        document.querySelector(`#update-education-btn`).click()
        setEducation(current => [...current, {
            degree: 'Degree',
            university: 'School Name',
            startDate: 'December 2022',
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

        for (let i = 0; i < jobs.length; i++){
            document.querySelector(`#tab${i}`).style.background = 'lightgray'
        }

        setCurrentTab(id)
        document.querySelector(`#tab${id}`).style.background = 'white'

        // Makes tabs become disabled to avoid losing data on switching tabs
        for (let i = 0; i < jobs.length; i++){
            document.querySelector(`#tab${i}`).disabled = true;
        }

    }

    const updateCurrentEducationTab = (id) => {
        // document.querySelector(`#update-education-btn`).click()
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

        //    try {
        //        document.querySelector(`#website-input`).value = document.querySelector(`#website`).innerHTML
        //        setWebsite(document.querySelector(`#website-input`).value)
        //    }
        //    catch (error){
        //     setWebsite('')
        //    }

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
        populateFormInputs()
    }, [currentTab, currentEducationTab])

    return (
        <div id='home-page'>
            <IntroScreen />
            <div>
                <h1 id='program-title'><span className=''>ResumeMaker</span><span className='title-color'>.dev </span><UilConstructor size="25" color="#0EA4FF" className='icon-btn '/></h1>

                <div id='primary-info-forms-container'>

                    <div id='primary-info-forms'>
                        <label name='name'>Name</label>
                        <input id='name-input' onChange={(event) => setName(event.target.value)} ></input>

                        {(template === 2 || template === 3)  && 
                            <>
                                <label name='career title'>Career Title</label>
                                <input id='career-input' onChange={(event) => setCareerTitle(event.target.value)} ></input>
                            </>
                        }
                        {(template === 2 || template === 3)  && 
                            <>
                                <label name='phone'>Phone</label>
                                <input id='phone-input' onChange={(event) => setPhone(event.target.value)} ></input>
                            </>
                        }
                        <label name='website'>Website <small>(include .com or url ending)</small></label>
                        <input id='website-input' onChange={(event) => setWebsite(event.target.value)}></input>

                        <label name='email'>Email</label>
                        <input id='email-input' onChange={(event) => setEmail(event.target.value)}></input>

                        <label name='LinkedIn'>LinkedIn</label>
                        <input id='LinkedIn-input' onChange={(event) => setLinkedIn(event.target.value)}></input>

                        <label name='socials'>Github</label>
                        <input id='socials-input' onChange={(event) => setSocials(event.target.value)}></input>

                        <label name='description'>Description</label>
                        <textarea id='description-input' className="priority-field" onChange={(event) => setDescription(event.target.value)}></textarea>
                    </div>
                </div>

                <br/><br/>

                <label id='work-history-label' name='website'>Work History</label>

                <br/><br/>
                
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
                                    {currentTab === id && <AddJobs jobs={jobs} job={job} setJobs={setJobs} id={id} currentTab={currentTab} objId={objId} setObjId={setObjId} setCurrentTab={setCurrentTab} updateCurrentTab={updateCurrentTab}/> }
                                </div>
                            ))}
                        </div>
                    </div>
                    <br/><br/>
                </div>

            </div>

            <div id='desktop-templates'>
                <TemplateSelect setTemplate={setTemplate}/>

                {template === 1 && <TemplateOne name={name} description={description} email={email} linkedIn={linkedIn}website={website} socials={socials} jobs={jobs} education={education} skills1Name={skills1Name} skills={skills} skills2Name={skills2Name} secondarySkill={secondarySkill} />}
                {template === 2 && <TemplateTwo name={name} careerTitle={careerTitle} phone={phone} description={description} email={email} linkedIn={linkedIn} website={website} socials={socials} jobs={jobs} education={education} skills1Name={skills1Name} skills={skills} skills2Name={skills2Name} secondarySkill={secondarySkill} setCareerTitle={setCareerTitle} setPhone={setPhone}/> }
                {template === 3 && <TemplateThree name={name} careerTitle={careerTitle} phone={phone} description={description} email={email} linkedIn={linkedIn} website={website} socials={socials} jobs={jobs} education={education} skills1Name={skills1Name} skills={skills} skills2Name={skills2Name} secondarySkill={secondarySkill} setCareerTitle={setCareerTitle} setPhone={setPhone}/> }
            </div>

            <div id='right-forms-container'>
                <div id='right-forms'>
                    <SkillOne setSkills1Name={setSkills1Name} setBuildSkill={setBuildSkill} addSkill={addSkill} skills={skills} removeSkill={removeSkill} moveSkill={moveSkill}/>

                    <SkillTwo setSkills2Name={setSkills2Name} setBuildSecondarySkill={setBuildSecondarySkill} addSecondarySkill={addSecondarySkill} secondarySkill={secondarySkill} removeSecondarySkill={removeSecondarySkill} template={template} moveSkill2={moveSkill2}/>

                    <div className='mobile-show'>
                        <br /><br /><br />
                    </div>
                    <label id='education-history-label' name='website'>Education History</label>
                    <br/>
                    <br/>

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
                        <p id='socials'>{socials}</p>
                        <p id='website'>{website}</p>
                    </div>
                </div>
            </div>

            <div id='mobile-templates'>
                <TemplateSelect setTemplate={setTemplate}/>
                {template === 1 && <TemplateOne name={name} description={description} email={email} linkedIn={linkedIn} website={website} socials={socials} jobs={jobs} education={education} skills1Name={skills1Name} skills={skills} skills2Name={skills2Name} secondarySkill={secondarySkill}/>}
                {template === 2 && <TemplateTwo name={name} careerTitle={careerTitle} phone={phone} description={description} email={email} linkedIn={linkedIn} website={website} socials={socials} jobs={jobs} education={education} skills1Name={skills1Name} skills={skills} skills2Name={skills2Name} secondarySkill={secondarySkill} setCareerTitle={setCareerTitle} setPhone={setPhone}/> }
                {template === 3 && <TemplateThree name={name} careerTitle={careerTitle} phone={phone} description={description} email={email} linkedIn={linkedIn} website={website} socials={socials} jobs={jobs} education={education} skills1Name={skills1Name} skills={skills} skills2Name={skills2Name} secondarySkill={secondarySkill} setCareerTitle={setCareerTitle} setPhone={setPhone}/> }
            </div>
        </div>
    )
}

export default Home