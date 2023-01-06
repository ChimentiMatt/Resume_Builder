import { useState } from "react"
import AddJobTask from "./AddJobTask"

const AddJobs = ({jobs, setJobs, job, id, currentTab}) => {
    const [company, setCompany] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [tasks, setTasks] = useState([])
    const [buildTask, setBuildTask] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const addJob = (event) => {
        event.preventDefault()

        setJobs(current => [...current, {
            company: company, 
            jobDescription: jobDescription,
            tasks: tasks,
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
        else if (whichState === 'end'){
            setEndDate(buildString)
        }
        else setEndDate('Present')

    }

    const updateTask = () => {
        setTasks(current => [...current, buildTask])
    }

    const addTask = () => {
        setTasks(current => [...current, 'add task'])
    }

    const removeJob = (propJob) => {
        console.log(propJob)
        setJobs(current => current.filter(job => job === propJob))
    }

    return (
        <div className='forms-jobs'>
            {/* Only show current tab */}
            {currentTab === id && 
            <div>
                <label name='company'>Company</label>
                <input onChange={(event) => setCompany(event.target.value)} placeholder={job.company}></input>

                <br/>
                <label name='job-description'>Job Description</label>
                <input onChange={(event) => setJobDescription(event.target.value)} placeholder={job.jobDescription}></input>

                <br/>
                <label name='start-date'>Start Date</label>
                <input type='date' onChange={(event) => convertDate(event.target.value, 'start')}></input>

                <br/>
    
                <label name='end-date'>End Date</label>
                <input type='date' onChange={(event) => convertDate(event.target.value, 'end')}></input>
                
                <div>
                    <label name='current-job'>Or Current Job</label>
                    <input type='checkbox' onChange={(event) => convertDate(event.target.value, 'current')}></input>
                </div>

                <br/>
                
                <label name='task'>Task</label>
                <input onChange={(event) => setBuildTask(event.target.value)} ></input>
                <button onClick={(event) => updateTask(event.target.value)}>Add!</button>

                {tasks.map(task => (
                    <div key={task}>
                        <label name='task'>Task</label>
                        <input onChange={(event) => setBuildTask(event.target.value)} placeholder={task}></input>
                        <button onClick={(event) => updateTask(event.target.value)}>Add!</button>
                    </div>
                ))}

                <button onClick={addTask}>Add another</button>
                


                <br/>
                <br/>
                <button onClick={addJob}>Add Job</button>
                <button onClick={() => removeJob(job)}>x</button>
                <button>Update</button>
                
            </div>}
        </div>
    )
}

export default AddJobs