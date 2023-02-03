
import { UilTrashAlt } from '@iconscout/react-unicons'
import { UilPlus } from '@iconscout/react-unicons'
import { UilArrowUp } from '@iconscout/react-unicons'
import { UilArrowDown } from '@iconscout/react-unicons'

const SkillTwo = ({setSkills2Name, setBuildSecondarySkill, addSecondarySkill, secondarySkill, removeSecondarySkill, template, moveSkill2}) => {
    const enterSubmits = (event) => {
        if (event.key === "Enter"){
            addSecondarySkill()
            setBuildSecondarySkill('')
            document.querySelector('#skill-two-input').value = ''
        }
    }
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

                    <input className='skills-input-and-btn' id='skill-two-input' onChange={(event) => setBuildSecondarySkill(event.target.value)} onKeyDown={(event) => enterSubmits(event)}></input>
                    <UilPlus onClick={addSecondarySkill}  size="15" color="#0EA4FF" className='icon-btn m-l'/>
                    
                    <div className='skill-box'>
                        {secondarySkill.map((skill, index) => (
                            <div className='skills-row' key={index}>
                                <p>{skill}</p>
                                <div>
                                    {index !== 0 &&<UilArrowUp onClick={() => moveSkill2('up', index, skill)} size="15" color="#0EA4FF" className='icon-btn'/> }
                                    {index +1 !== secondarySkill.length && <UilArrowDown onClick={() => moveSkill2('down', index, skill)} size="15" color="#0EA4FF" className='icon-btn'/>}
                                    <UilTrashAlt onClick={() => removeSecondarySkill(skill)} size="15" color="#0EA4FF" className='icon-btn'/>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <br/><br/>
                </>
            }
        </div>
  )
}

export default SkillTwo
