import { useState, useEffect } from "react"
import { UilTimes } from '@iconscout/react-unicons'
import { UilPlus } from '@iconscout/react-unicons'
import { UilMinus } from '@iconscout/react-unicons'

const AddEducation = ({education, item, setEducation, id, edObjId, setEdObjId}) => {
    const [degree, setDegree] = useState('')
    const [school, setSchool] = useState('')
    const [description, setDescription] = useState('')
    const [newPagePadding, setNewPagePadding] = useState(0)
    const [currentEducation, setCurrentEducation] = useState(false)

    const updateEducation = (prop) => {
        let startValue = onUpdateConvertFormDateToResume('start')
        let endValue = onUpdateConvertFormDateToResume('end')

        let tempArray = education
        
        tempArray.push({
            id: id,
            degree: degree,
            university: school,
            startDate: startValue,
            endDate: endValue,
            description: description,
            padding: newPagePadding
        })

        // update order in state array
        tempArray.sort(function(a,b) {
            return a.id - b.id
        })

        setEducation(tempArray)
        
        setEducation(current => current.filter(job => job !== prop ))
    }

    // const convertDate = (date, whichState) => {
    //     let buildString = ''
    //     let monthString = ''
    //     let dashCounter = 0


    //     for (let i = 0; i < date.length; i++){
    //         // identify the dates part in string ending at day of month
    //         if (date[i] === '-'){
    //             dashCounter +=1
    //             if (dashCounter === 2) break
    //         }

    //         // if date is year like 2021 concatenate
    //         if (dashCounter === 0) buildString += date[i]
    //         // if date is in month
    //         else {
    //             if (date[i] === '-'){}
    //             else (monthString += date[i])
    //         }
    //     }
        
    //     switch(monthString) {
    //         case '01':
    //             monthString = "January "
    //             break
    //         case '02':
    //             monthString = "February "
    //             break
    //         case '03':
    //             monthString = "March "
    //             break
    //         case '04':
    //             monthString = "April "
    //             break
    //         case '05':
    //             monthString = "May "
    //             break
    //         case '06':
    //             monthString = "June "
    //             break
    //         case '07':
    //             monthString = "July "
    //             break
    //         case '08':
    //             monthString = "August "
    //             break
    //         case '09':
    //             monthString = "September "
    //             break
    //         case '10':
    //             monthString = "October "
    //             break
    //         case '11':
    //             monthString = "November "
    //             break
    //         case '12':
    //             monthString = "December "
    //             break
    //         default:
    //             monthString = "January "
    //     }
  
    //     buildString = monthString + buildString
    //     if (whichState === 'start'){
    //         setStartDate(buildString)
    //     }
    //     else if (whichState === 'end'){
    //         setEndDate(buildString)
    //     }
    //     else setEndDate('Present')
    // }

    const currentEdu = (dateSelector) => {
        // if rollback comment in
        // let date = document.querySelector(`#${dateSelector}`).value

        if (!currentEducation) {
            document.querySelector(`#${dateSelector}`).disabled = true
            // handleFormDateChange(date, 'current')
        }
        else {
            document.querySelector(`#${dateSelector}`).disabled = false
            // handleFormDateChange(date, 'end')
        }
        setCurrentEducation(!currentEducation)
    }

    const removeEducation = (prop) => {
        setEducation(current => current.filter(school => school !== prop))
        // shows school tab 1 on removing a tab
        document.querySelector('#education-tab0').click()
    }


    const onUpdateConvertFormDateToResume = (whichState) => {
        let date = ''

        if (whichState === 'start'){
            date = document.querySelector(`#ed-start-date${id}`).value
        }
        else{
            date = document.querySelector(`#ed-current-date${id}`).value
        }

        let buildStringDate = ''
        let monthString = ''
        let dashCounter = 0

        for (let i = 0; i < date.length; i++){
            // identify the dates part in string ending at day of month
            if (date[i] === '-'){
                dashCounter +=1
                if (dashCounter === 2) break
            }

            // if date is year like 2021 concatenate
            if (dashCounter === 0) buildStringDate += date[i]
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
        
        buildStringDate = monthString + buildStringDate

        if (currentEducation && whichState === 'end') {
            buildStringDate = 'Present'
            return buildStringDate
        }
        else{
            return buildStringDate
        }
    } 

    const handlePageBreak = (value) => {
        if (value < 0) setNewPagePadding(0)
        else if (value > 5 ) setNewPagePadding(5)
        else {setNewPagePadding(value)}
    }

    useEffect(() => {
        const convertDateToInput = (whichState, stateId) => {
            let date = ''
            if (whichState === 'start'){ 
                date = document.querySelector(`#ed-resume-start-date${stateId}`).innerHTML
            }
            else if (whichState === 'end'){
                date = document.querySelector(`#ed-resume-end-date${stateId}`).innerHTML
                if (date === 'Present') {
                    document.querySelector(`#ed-current-date${id}`).disabled = true
                    document.querySelector('#current-ed-checkbox').checked = true
                    setCurrentEducation(true)
                    return '2023-01-01'
                }
            }
    
            let onYear = false
            let buildString = ''
            let rebuiltDate = ''
            let yearString = ''
    
            for (let i = 0; i < date.length; i++){
                if(onYear) yearString += date[i]
                else {
                    if (date[i] !== ' ') buildString += date[i]
                }
                if (date[i] === ' ') onYear = true
            }
            switch(buildString) {
                case 'January':
                    rebuiltDate = "01-01"
                    break
                case 'February':
                    rebuiltDate = "02-01"
                    break
                case 'March':
                    rebuiltDate = "03-01"
                    break
                case 'April':
                    rebuiltDate = "04-01"
                    break
                case 'May':
                    rebuiltDate = "05-01"
                    break
                case 'June':
                    rebuiltDate = "06-01"
                    break
                case 'July':
                    rebuiltDate = "07-01"
                    break
                case 'August':
                    rebuiltDate = "08-01"
                    break
                case 'September':
                    rebuiltDate = "09-01"
                    break
                case 'October':
                    rebuiltDate = "10-01"
                    break
                case 'November':
                    rebuiltDate = "11-01"
                    break
                case 'December':
                    rebuiltDate = "12-01"
                    break
                default:
                    rebuiltDate = "01-01"
                } 
    
            return rebuiltDate = yearString + '-' + rebuiltDate
        }

        document.querySelector(`#ed-start-date${id}`).value = convertDateToInput('start', id)
        document.querySelector(`#ed-current-date${id}`).value = convertDateToInput('end', id)

    }, [id])

    useEffect(() => {
        // Uses current state and populates forms values
        document.querySelector(`#degree${id}`).value = document.querySelector(`#resume-degree${id}`).innerHTML
        setDegree(document.querySelector(`#degree${id}`).value)

        document.querySelector(`#school${id}`).value = document.querySelector(`#resume-school${id}`).innerHTML
        setSchool(document.querySelector(`#school${id}`).value)

        document.querySelector(`#school-description${id}`).value = document.querySelector(`#resume-ed-description${id}`).innerHTML
        setDescription(document.querySelector(`#school-description${id}`).value)

        document.querySelector(`#school-padding`).value = document.querySelector(`#ed-hidden-padding${id}`).innerHTML
        setNewPagePadding(parseInt(document.querySelector(`#school-padding`).value))

    }, [id])
    
    return (
        <div className='education-form'>
            <div className="remove-job-container">
                {id !== 0 && <UilTimes onClick={() => removeEducation(item)} size="15" color="#ff0000" />}
            </div>
            
            <label name='degree title'>Degree</label>
            <input id={`degree${id}`} onChange={(event) => setDegree(event.target.value)}></input>

            <label name='school'>School</label>
            <input id={`school${id}`} onChange={(event) => setSchool(event.target.value)} ></input>

            <label name='start-date'>Start Date</label>
            <input id={`ed-start-date${id}`} type='date'></input>
              
            <label name='end-date'>End Date</label>
            <input id={`ed-current-date${id}`} type='date'></input>
            
            <label name='current-job'>Currently Enrolled <input id='current-ed-checkbox' type='checkbox' onChange={(event) => currentEdu(`ed-current-date${id}`)}></input></label>

            <label name='description'>Description</label>
            <textarea id={`school-description${id}`} onChange={(event) => setDescription(event.target.value)}></textarea>
            <br/>
            <div className="break-for-page-div">
                <label className='ed-padding-label' name='add-padding-bottom'>(adds padding bottom to push down to second page)</label>
                
                <div className="form-padding-container">
                    <p id='school-padding'> Value</p>{newPagePadding}
                    <UilPlus onClick={() => handlePageBreak(newPagePadding +1)}  size="15" color="#0EA4FF" className='icon-btn'/>
                    <UilMinus onClick={() => handlePageBreak(newPagePadding -1)}  size="15" color="#0EA4FF" className='icon-btn'/>
                </div>
            </div>
            <br/>

            <button onClick={() => updateEducation(item)}>Update</button>

        </div>
    )
}

export default AddEducation