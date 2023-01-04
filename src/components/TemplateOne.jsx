import '../styles/templateOne.css'
import { useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print';

import Skills from '../utility/Skills'

const TemplateOne = () => {
    let componentRef = useRef()
    const [name, setName] = useState("First Last")
    const [description, setDescription] = useState('Software developer, masters student and a highly driven individual who loves software and problem solving')
    const [email, setEmail] = useState('hotcat@gmail.com')
    const [website, setWebsite] = useState('alphaExpo.com') 

    const [buildSkill, setBuildSkill] = useState('')
    const [skills, setSkills] = useState(['Python', 'Java'])

    const [buildSecondarySkill, setBuildSecondarySkill] = useState('')
    const [secondarySkill, setSecondarySkill] = useState(['eating', 'sleeping'])

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

    return (
        <div id='template-one-page'>

            <div id='input-column'>
                <button onClick={handlePrint}>Print</button>
                <label name='name'>Name</label>
                <input onChange={(event) => setName(event.target.value)} ></input>

                <label name='description'>Description</label>
                <input onChange={(event) => setDescription(event.target.value)}></input>

                <label name='website'>Website</label>
                <input onChange={(event) => setWebsite(event.target.value)}></input>

                <label name='email'>Email</label>
                <input onChange={(event) => setEmail(event.target.value)}></input>


                <label name='skills'>Skills</label>
                <form onSubmit={addSkill}>
                    <input onChange={(event) => setBuildSkill(event.target.value)}></input>
                    <button onClick={addSkill}>Add</button>
                </form>
                {skills.map((skill, index) => (<p key={index}>{skill} <button onClick={() => removeSkill(skill)}>x</button></p>))}

                <label name='secondary skill'>Secondary Skill or Achievement</label>
                <form onSubmit={addSecondarySkill}>
                    <input onChange={(event) => setBuildSecondarySkill(event.target.value)}></input>
                    <button onClick={addSecondarySkill}>Add</button>
                </form>
                
                {secondarySkill.map((skill, index) => (<p key={index}>{skill} <button onClick={() => removeSecondarySkill(skill)}>x</button></p>))}
           
                <label>Jobs</label>

            </div>

            

            <div id='contents-template-one' ref={componentRef}>
                <div id='top-row'>
                    <div id='top-row-left'>
                        <h1 id='name'>{name}</h1>
                        <p id='description'>{description}</p>
                    </div>
                    <div id='top-row-right'>
                        <p>{email}</p>
                        <p>{website}</p>
                    </div>
                </div>

                <div id='experience-and-skills'>
                    <h4>EXPERIENCE</h4>
                    <div id='skills-column'>
                        <h4>Skills</h4>
                        <div className='left-border'>
                            {skills.map( (skill, index) => (
                                <Skills key={index} skill={skill} index={index}/>
                            ))}
                        </div>
                        <h4>Achievements</h4>
                        <div className='left-border'>
                            {secondarySkill.map( (skill, index) => (
                                <Skills key={index} skill={skill} index={index}/>
                            ))}
                        </div>
                    </div>
                </div>

                

               
            </div>

        </div>
    )
}

export default TemplateOne