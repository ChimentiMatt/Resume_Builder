import { useState } from "react"

const AddJobs = ({jobs, setJobs, job}) => {
    const [company, setCompany] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const addJob = (event) => {
        event.preventDefault()
        setJobs(current => [...current, {
            company: company, 
            jobDescription: jobDescription,
            startDate: startDate,
            endDate: endDate
        }])
    }

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
        }
        
        buildString = monthString + buildString
        if (whichState === 'start'){
            setStartDate(buildString)
        }
        else{
            setEndDate(buildString)
        }

    }

    const removeJob = ( propJob) => {
        console.log(propJob)
        setJobs(current => current.filter(job => job === propJob))
    }

    return (
        <div className='forms-jobs'>
            <label name='company'>Company</label>
            <input onChange={(event) => setCompany(event.target.value)}></input>

            <label name='job-description'>Job Description</label>
            <input onChange={(event) => setJobDescription(event.target.value)}></input>

            <label name='start-date'>Start Date</label>
            <input type='date' onChange={(event) => convertDate(event.target.value, 'start')}></input>

            <label name='end-date'>End Date</label>
            <input type='date' onChange={(event) => convertDate(event.target.value, 'end')}></input>
            
            <label name='current-job'>Current Job</label>
            <input type='checkbox'></input>

            <button onClick={addJob}>Add Job</button>
            <button onClick={() => removeJob(job)}>x</button>
            <button>Update</button>
        </div>
    )
}

export default AddJobs