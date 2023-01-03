import '../styles/templateOne.css'
import { useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print';

import Skills from '../utility/Skills'

const TemplateOne = () => {
    let componentRef = useRef()
    const [name, setName] = useState("First Last")
    const [email, setEmail] = useState('hotcat@gmail.com')
    
    const [buildSkill, setBuildSkill] = useState('')
    const [skills, setSkills] = useState(['Python', 'Java'])

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        // onAfterPrint: () => alert('Print Success')
    })

    const addSkill = () => {
        setSkills(oldArray => [...oldArray, buildSkill])
    }

    return (
        <div id='template-one-page'>


            <div id='input-column'>
                <button onClick={handlePrint}>Print</button>
                <label name='name'>Name</label>
                <input onChange={(event) => setName(event.target.value)} ></input>

                <label name='email'>Email</label>
                <input onChange={(event) => setEmail(event.target.value)}></input>

                <label name='skills'>Skills</label>
                <input onChange={(event) => setBuildSkill(event.target.value)}></input>
                <button onClick={addSkill}>Add</button>

                {skills.map(skill => (
                        <p>{skill}</p>
                    ))}
            </div>

            

            <div id='contents-template-one' ref={componentRef}>
                <div>
                    <h1>{name}</h1>
                    {skills.map(skill => (
                        <Skills skill={skill}/>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default TemplateOne