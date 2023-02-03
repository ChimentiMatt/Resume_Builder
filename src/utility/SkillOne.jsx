
import { UilTrashAlt } from '@iconscout/react-unicons'
import { UilPlus } from '@iconscout/react-unicons'
import { UilArrowUp } from '@iconscout/react-unicons'
import { UilArrowDown } from '@iconscout/react-unicons'

const SkillOne = ({setSkills1Name, setBuildSkill, addSkill, skills, removeSkill, moveSkill}) => {
    const enterSubmits = (event) => {
        if (event.key === "Enter"){
            addSkill()
            setBuildSkill('')
            document.querySelector('#skill-one-input').value = ''
        }
    }

    return (
        <div>
        <label name='skills'>Skill Title One</label>
            <br/>

            <input className='skills-input' onChange={(event) => setSkills1Name(event.target.value)} placeholder="SKILLS"></input>
            <br/>

            <label name='skills'>Add A Skill</label>
            <br/>

            <input className='skills-input-and-btn' id='skill-one-input' onChange={(event) => setBuildSkill(event.target.value)} onKeyDown={(event) => enterSubmits(event)}></input>

            <UilPlus onClick={addSkill} size="15" color="#0EA4FF" className='icon-btn m-l'/>
            
            <div className='skill-box'>
                {skills.map((skill, index) => (
                    <div className='skills-row'  key={index}>
                        <p>{skill}</p>
                        <div>
                            {index !== 0 && <UilArrowUp onClick={() => moveSkill('up', index, skill)} size="15" color="#0EA4FF" className='icon-btn'/>}
                            {index +1 !== skills.length && <UilArrowDown onClick={() => moveSkill('down', index, skill)} size="15" color="#0EA4FF" className='icon-btn'/> }
                            <UilTrashAlt onClick={() => removeSkill(skill)}  size="15" color="#0EA4FF" className='icon-btn '/>
                        </div>
                    </div>
                ))}
            </div>
            
            <br className='mobile-hide'/>
            <br/>
        </div>
  )
}

export default SkillOne
