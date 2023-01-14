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

const Home = () => {
    const [template, setTemplate] = useState(2)
    const [name, setName] = useState("Ash Ketchum")
    const [careerTitle, setCareerTitle] = useState('Software Developer')
    const [phone, setPhone] = useState('503-954-3145')
    const [description, setDescription] = useState('Pokémon trailer who wants to be there very best, like no one ever was. Refused to evolve his starter Pokémon due to the power of friendship.')
    const [email, setEmail] = useState('hotcat@gmail.com')
    const [website, setWebsite] = useState('alphaExpo.com') 
    const [socials, setSocials] = useState('')

    const [objId, setObjId] = useState(0)
    const [currentTab, setCurrentTab] = useState(0)
    const [jobs, setJobs] = useState([{
        id: 0,
        jobTitle: 'Pokemon Trainer',
        company: 'Elite Four', 
        jobDescription: 'Became the world champion after emerging victorious in the Pokémon World Coronation Series.',
        tasks: ['caught 57 unique Pokémon', 'never evolved starter Pokémon Pikachu'],
        startDate: 'April 1997',
        endDate: 'December 2022'
    }])

    const [edObjId, setEdObjId] = useState(0)

    const [currentEducationTab, setCurrentEducationTab] = useState(0)
    const [education, setEducation] = useState([{
        degree: 'Master Trainer',
        university: 'Elite 4 Vocational',
        startDate: 'Jan 2000',
        endDate: 'December 2022',
        description: 'Received a 4.0 and was the only student who evolved a Magikarp'
    }])

    const [skills1Name, setSkills1Name] = useState('SKILLS')
    const [buildSkill, setBuildSkill] = useState('')
    const [skills, setSkills] = useState(['Battling', 'Evolving', 'Leveling', 'Never Aging', 'Weird Voice', 'Friendship', 'Sleeping', 'Eating'])

    const [skills2Name, setSkills2Name] = useState('LANGUAGES')
    const [buildSecondarySkill, setBuildSecondarySkill] = useState('')
    const [secondarySkill, setSecondarySkill] = useState(['Pikachu', 'Charmander', 'Squirtle', 'Bulbasaur', 'MewTwo', 'English', 'Ekans', 'PokeScript', 'Snorlax'])


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
            jobTitle: 'Pokemon Trainer',
            company: 'Elite Four', 
            jobDescription: 'I just really wanted to be the very best, like no one ever was',
            tasks: ['caught all 150', 'never evolved starter pokemon'],
            startDate: 'Jan 2000',
            endDate: 'December 2022'
        }])
        
        // used to update tab as a callback so state is already set
        setTimeout(() => {
            document.querySelector(`#tab${targetId}`).click()
        }, 0)
    }

    const addEducation = (targetId) => {
        setEducation(current => [...current, {
            degree: 'Master Trainer',
            university: 'Elite 4 Vocational',
            startDate: 'Jan 2000',
            endDate: 'December 2022',
            description: 'Received a 4.0 and was the only student who evolved a Magikarp'
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
            <div>
                <h1>Resume Builder</h1>
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

                <br/>
                <br/>
                
                <div>
                    <div id='tabs-container'>
                        {jobs.map((job,id) => (
                            <div key={id} >
                                <button className='tab-btn' id={`tab${id}`} onClick={() => updateCurrentTab(id)}>Job {id +1}</button>
                                {id === jobs.length -1 && 
                                <UilPlus onClick={() => addJob(id+1)} size="15" color="#0EA4FF" className='icon-btn'/>
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
                    
                    <br/>
                    <br/>

                </div>

            </div>

            <div>
                <TemplateSelect setTemplate={setTemplate}/>

                {template === 1 && <TemplateOne name={name} description={description} email={email} website={website} socials={socials} jobs={jobs} education={education} skills1Name={skills1Name} skills={skills} skills2Name={skills2Name} secondarySkill={secondarySkill}/>}
                {template === 2 && <TemplateTwo name={name} careerTitle={careerTitle} phone={phone} description={description} email={email} website={website} socials={socials} jobs={jobs} education={education} skills1Name={skills1Name} skills={skills} skills2Name={skills2Name} secondarySkill={secondarySkill} setCareerTitle={setCareerTitle} setPhone={setPhone}/> }
            </div>

            <div id='right-forms'>
                <label name='skills'>{skills1Name}</label>
                <br/>
                <input className='skills-input' onChange={(event) => setSkills1Name(event.target.value)} placeholder="SKILLS"></input>

                <br/>
                <label name='skills'>Add A Skill</label>
                <br/>
         
                <input className='skills-input' onChange={(event) => setBuildSkill(event.target.value)}></input>

                <UilPlus onClick={addSkill}  size="15" color="#0EA4FF" className='icon-btn'/>
                
                <div className='skill-box'>
                    {skills.map((skill, index) => (
                    <p key={index}>{skill} 
                        <UilTrashAlt onClick={() => removeSkill(skill)}  size="15" color="#0EA4FF" className='icon-btn'/>
                    </p>))}
                </div>
                
                <br/>
                <br/>
                <label className='skills-input' name='secondary skill'>{skills2Name}</label>
                <br/>
                <input className='skills-input' onChange={(event) => setSkills2Name(event.target.value)} placeholder="LANGUAGES"></input>

                <br/>
                <label className='skills-input' name='skills'>Add A Skill</label>

                <br/>    
                <input className='skills-input' onChange={(event) => setBuildSecondarySkill(event.target.value)}></input>
                <UilPlus onClick={addSecondarySkill}  size="15" color="#0EA4FF" className='icon-btn'/>

                <div className='skill-box'>
                    {secondarySkill.map((skill, id) => (
                    <p key={id}>{skill} 
                        <UilTrashAlt onClick={() => removeSecondarySkill(skill)} size="15" color="#0EA4FF" className='icon-btn'/>
                    </p>
                    ))}
                </div>
                <br/>
                <br/>

                <div id='tabs-container'>
                        {education.map((job,id) => (
                            <div key={id} >
                                <button className='tab-btn ' id={`education-tab${id}`} onClick={() => updateCurrentEducationTab(id)}>School {id +1}</button>


                                {id === education.length -1 && 
                                    <UilPlus onClick={() => addEducation(id +1)}  size="15" color="#0EA4FF" className='icon-btn'/>
                                }


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
    )
}

export default Home