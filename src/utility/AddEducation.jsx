import { useState, useEffect } from "react"

const AddEducation = ({education, item, setEducation, id, edObjId, setEdObjId}) => {
    const [degree, setDegree] = useState('degree')
    const [school, setSchool] = useState('school')
    const [startDate, setStartDate] = useState('s')
    const [endDate, setEndDate] = useState('e')
    const [description, setDescription] = useState('Received a 4.0 and was the only student who evolved a Magikarp')

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

    const updateEducation = (prop) => {

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
    }

    const removeEducation = (prop) => {
        setEducation(current => current.filter(school => school !== prop))
    }
    
    return (
        <div className='education-form'>
            <label name='degree title'>Degree</label>
            <input onChange={(event) => setDegree(event.target.value)}></input>

            <label name='school'>School</label>
            <input onChange={(event) => setSchool(event.target.value)} ></input>

            <label name='start-date'>Start Date</label>
            <input type='date' onChange={(event) => convertDate(event.target.value, 'start')}></input>
              
            <label name='end-date'>End Date</label>
            <input type='date' onChange={(event) => convertDate(event.target.value, 'end')}></input>

            <label name='description'>Description</label>
            <textarea onChange={(event) => setDescription(event.target.value)}></textarea>

            <button onClick={() => updateEducation(item)}>Update</button>
            
            <br/>
            <button onClick={() => removeEducation(item)}>Remove </button>
        </div>
    )
}

export default AddEducation