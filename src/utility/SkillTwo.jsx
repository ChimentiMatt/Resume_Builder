
import { UilTrashAlt } from '@iconscout/react-unicons'
import { UilPlus } from '@iconscout/react-unicons'

const SkillTwo = ({setSkills2Name, setBuildSecondarySkill, addSecondarySkill, secondarySkill, removeSecondarySkill, template}) => {
  return (
    <div>
        {(template === 1 || template === 2)  && 
            <>

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
                
                <br/><br/>
            </>
        }
    </div>
  )
}

export default SkillTwo
