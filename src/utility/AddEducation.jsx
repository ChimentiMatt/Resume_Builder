import { useState, useEffect } from "react"
import { UilTimes } from '@iconscout/react-unicons'
import { UilPlus } from '@iconscout/react-unicons'
import { UilMinus } from '@iconscout/react-unicons'

const AddEducation = ({education, item, setEducation, id, edObjId, setEdObjId}) => {
    const [degree, setDegree] = useState('degree')
    const [school, setSchool] = useState('school')
    const [startDate, setStartDate] = useState('s')
    const [endDate, setEndDate] = useState('e')
    const [description, setDescription] = useState('Received a 4.0 and was the only student who evolved a Magikarp')
    const [newPagePadding, setNewPagePadding] = useState(0)
    const [currentEducation, setCurrentEducation] = useState(false)

    const convertDate = (date, whichState) => {
        let buildString = ''
        let monthString = ''
        let dashCounter = 0

        for (let i = 0; i < date.length; i++){
            // identify the dates part in string ending at day of month
            if (date[i] === '-'){
                dashCounter +=1
                if (dashCounter === 2) break
            }

            // if date is year like 2021 concatenate
            if (dashCounter === 0) buildString += date[i]
            // if date is in month
            else {
                if (date[i] === '-'){}
                else (monthString += date[i])
            }
        }
        
        switch(monthString) {
            case '01':
                monthString = "January "
                break
            case '02':
                monthString = "February "
                break
            case '03':
                monthString = "March "
                break
            case '04':
                monthString = "April "
                break
            case '05':
                monthString = "May "
                break
            case '06':
                monthString = "June "
                break
            case '07':
                monthString = "July "
                break
            case '08':
                monthString = "August "
                break
            case '09':
                monthString = "September "
                break
            case '10':
                monthString = "October "
                break
            case '11':
                monthString = "November "
                break
            case '12':
                monthString = "December "
                break
            default:
                monthString = "January "
        }
        
        buildString = monthString + buildString
        if (whichState === 'start'){
            setStartDate(buildString)
        }
        else if (whichState === 'end'){
            setEndDate(buildString)
        }
        else setEndDate('Present')
    }

    const updateEducation = (prop, target) => {

        let tempArray = education
        
        tempArray.push({
            id: id,
            degree: degree,
            university: school,
            startDate: startDate,
            endDate: endDate,
            description: description,
        })

        // update order in state array
        tempArray.sort(function(a,b) {
            return a.id - b.id
        })

        setEducation(tempArray)
        
        setEducation(current => current.filter(job => job !== prop ))

        breakForPage(target)
    }

    const removeEducation = (prop) => {
        setEducation(current => current.filter(school => school !== prop))

        document.querySelector('#education-tab0').click()
    }

    const breakForPage = (target) =>{
        document.querySelector(`#${target}`).style.height = `${newPagePadding}rem`
    }


    const currentEdu = (dateSelector) => {
        let date = document.querySelector(`#${dateSelector}`).value

        if (!currentEducation) {
            document.querySelector(`#${dateSelector}`).disabled = true
            convertDate(date, 'current')
        }
        else {
            document.querySelector(`#${dateSelector}`).disabled = false
            convertDate(date, 'end')
        }
        setCurrentEducation(!currentEducation)
    }

    useEffect(() => {
        // Uses current state and populates forms values
        document.querySelector(`#degree${id}`).value = document.querySelector(`#resume-degree${id}`).innerHTML
        setDegree(document.querySelector(`#degree${id}`).value)

        document.querySelector(`#school${id}`).value = document.querySelector(`#resume-university${id}`).innerHTML
        setSchool(document.querySelector(`#school${id}`).value)

        document.querySelector(`#school-description${id}`).value = document.querySelector(`#resume-description${id}`).innerHTML
        setDescription(document.querySelector(`#school-description${id}`).value)
    }, [id])
    
    return (
        <div className='education-form'>

            <div className="remove-job-container">
                {id !== 0 && 
                <UilTimes onClick={() => removeEducation(item)} size="15" color="#ff0000" />
                }
            </div>
            
            <label name='degree title'>Degree</label>
            <input id={`degree${id}`} onChange={(event) => setDegree(event.target.value)}></input>

            <label name='school'>School</label>
            <input id={`school${id}`} onChange={(event) => setSchool(event.target.value)} ></input>

            <label name='start-date'>Start Date</label>
            <input type='date' onChange={(event) => convertDate(event.target.value, 'start')}></input>
              
            <label name='end-date'>End Date</label>
            <input id={`ed-current-date${id}`} type='date' onChange={(event) => convertDate(event.target.value, 'end')}></input>
            
            <label name='current-job'>Currently Enrolled <input type='checkbox' onChange={(event) => currentEdu(`ed-current-date${id}`)}></input></label>

            <label name='description'>Description</label>
            <textarea id={`school-description${id}`} onChange={(event) => setDescription(event.target.value)}></textarea>
            <br/>
            <div className="break-for-page-div">
                {/* <button onClick={() => breakForPage(`new-page-spacing${id}`)}>add padding bottom</button> */}
                <label name='add-padding-bottom'>(adds padding bottom for second page. Subtract to reset)</label>
                
                <div className="form-padding-container">

                    <UilPlus onClick={() => setNewPagePadding(newPagePadding +1)}  size="15" color="#0EA4FF" className='icon-btn'/>
                    <UilMinus onClick={() => setNewPagePadding(0)}  size="15" color="#0EA4FF" className='icon-btn'/>

                </div>
            </div>
            <br/>

            <button onClick={() => updateEducation(item, `ed-new-page-spacing${id}`)}>Update</button>

            
        </div>
    )
}

export default AddEducation