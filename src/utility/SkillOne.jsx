
import { UilTrashAlt } from '@iconscout/react-unicons'
import { UilPlus } from '@iconscout/react-unicons'

const SkillOne = ({setSkills1Name, setBuildSkill, addSkill, skills, removeSkill}) => {
  return (
    <div>
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
    </div>
  )
}

export default SkillOne
