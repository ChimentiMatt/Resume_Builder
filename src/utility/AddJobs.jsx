import { useState, useEffect } from "react"
import { UilPlus } from '@iconscout/react-unicons'
import { UilMinus } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import JobTask from "./JobTask"

const AddJobs = ({jobs, setJobs, job, id, setCurrentTab, updateCurrentTab}) => {
    const [jobTitle, setJobTitle] = useState('')
    const [company, setCompany] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [tasks, setTasks] = useState(['Designed software architecture','Managed software programs'])
    const [buildTask, setBuildTask] = useState('')
    const [newPagePadding, setNewPagePadding] = useState(0)
    const [currentJobState, setCurrentJobState] = useState(false)

    const updateJob = (propJob) => {
        // Makes tabs become active again (disabled from addJobs in Home component and removeJob())
        for (let i = 0; i < jobs.length; i++){
            document.querySelector(`#tab${i}`).disabled = false;
        }

        // alert('clicked')
        let startValue = onUpdateConvertFormDateToResume('start')
        let endValue = onUpdateConvertFormDateToResume('end')

        // Task section
        let buildTasksArray = []
        for (let i = 0; i < tasks.length; i++)
        {
            let value = document.querySelector(`#tasks${id}${i}`).value
            buildTasksArray.push(value)
        }

        // job section
        let tempArray = jobs
        tempArray.push({
            id: id,
            jobTitle: jobTitle,
            company: company, 
            jobDescription: jobDescription,
            tasks: buildTasksArray,
            startDate: startValue,
            endDate: endValue,
            padding: newPagePadding
        })

        // update order in state array
        tempArray.sort(function(a,b) {
            return a.id - b.id
        })

        setJobs(tempArray)
        
        setJobs(current => current.filter(job => job !== propJob ))

        setTasks(buildTasksArray)
    }

    const currentJob = (dateSelector) => {
        // if rollback comment in
        // let date = document.querySelector(`#${dateSelector}`).value

        if (!currentJobState) {
            document.querySelector(`#${dateSelector}`).disabled = true
            // handleFormDateChange(date, 'current')
        }
        else {
            document.querySelector(`#${dateSelector}`).disabled = false
            // handleFormDateChange(date, 'end')
        }
        setCurrentJobState(!currentJobState)
    }

    const addTask = () => {
        setTasks(current => [...current, buildTask])

    }

    const removeTask = (prop) => {
        setTasks(current => current.filter(task => task !== prop))
    }

    const removeJob = (propJob) => {
        updateCurrentTab(0)

        // shows job tab 1 on removing a tab
        setCurrentTab(0)
        document.querySelector('#tab0').click()

        // Makes tabs become disabled to avoid losing data on switching tabs
        for (let i = 0; i < jobs.length; i++){
            document.querySelector(`#tab${i}`).disabled = true;
        }
        setJobs(current => current.filter(job => job !== propJob))

    }


    const onUpdateConvertFormDateToResume = (whichState) => {
        let date = ''

        if (whichState === 'start'){
            date = document.querySelector(`#start-date${id}`).value
        }
        else{
            date = document.querySelector(`#current-date${id}`).value
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

        if (currentJobState && whichState === 'end') {
            buildStringDate = 'Present'
            return buildStringDate
        }
        else{
            return buildStringDate
        }
    } 
    
    const deleteWarning = (choice) => {
        if (choice === 'delete') document.querySelector('#warning-container').style.display = 'flex'
        else document.querySelector('#warning-container').style.display = 'none'
    }

    const handlePageBreak = (value) => {
        if (value < 0) setNewPagePadding(0)
        else if (value > 5 ) setNewPagePadding(5)
        else {setNewPagePadding(value)}
    }

    useEffect(() => {
        setTasks(jobs[id].tasks)
        
        const convertDateToInput = (whichState, stateId) => {
            let date = ''
            if (whichState === 'start'){ 
                date = document.querySelector(`#resume-start-date${stateId}`).innerHTML
            }
            else if (whichState === 'end'){
                date = document.querySelector(`#resume-end-date${stateId}`).innerHTML
                if (date === 'Present') {
                    document.querySelector(`#current-date${id}`).disabled = true
                    document.querySelector('#current-job-checkbox').checked = true
                    setCurrentJobState(true)
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

        document.querySelector(`#start-date${id}`).value = convertDateToInput('start', id)
        document.querySelector(`#current-date${id}`).value = convertDateToInput('end', id)

    }, [id, jobs])

    useEffect(() => {
        // Uses current state and populates forms values for jobs
        document.querySelector(`#title${id}`).value = document.querySelector(`#resume-title${id}`).innerHTML
        setJobTitle(document.querySelector(`#title${id}`).value)

        document.querySelector(`#company${id}`).value = document.querySelector(`#resume-company${id}`).innerHTML
        setCompany(document.querySelector(`#company${id}`).value)

        document.querySelector(`#job-description${id}`).value = document.querySelector(`#resume-description${id}`).innerHTML
        setJobDescription(document.querySelector(`#job-description${id}`).value)

        document.querySelector(`#job-padding`).value = document.querySelector(`#job-hidden-padding${id}`).innerHTML
        setNewPagePadding(parseInt(document.querySelector(`#job-padding`).value))

    }, [id])

    return (
        <div className='forms-jobs'>
            <div id="warning-container">
                <p>Are you sure you</p> 
                <p>want to delete Job</p>
                <p>{id +1}, {jobTitle}</p> 
                <div className="warning-options">
                    <button onClick={() => removeJob(job)}>Delete</button>
                    <button onClick={() => deleteWarning('cancel')}>Cancel</button>
                </div>
            </div>
           
            <p className="update-tabs-message">(Update Job before switching tab)</p>

            <div className="remove-job-container">
                { id !== 0 &&<UilTimes onClick={() => deleteWarning('delete')}  size="15" color="#ff0000" />}
            </div>
            
        
            <label name='job title'>Job Title</label>
            <input id={`title${id}`} onChange={(event) => setJobTitle(event.target.value)}  ></input>
            {/* {id} */}

            <label name='company'>Company</label>
            <input id={`company${id}`} onChange={(event) => setCompany(event.target.value)} placeholder={job.company}></input>

            <label name='job-description'>Description</label>
            <textarea id={`job-description${id}`} className="priority-field" onChange={(event) => setJobDescription(event.target.value)} placeholder={job.jobDescription}></textarea>

            <label name='start-date'>Start Date</label>
            <input id={`start-date${id}`} type='date' ></input>


            <label name='end-date'>End Date</label>
            <input id={`current-date${id}`} type='date' ></input>

            <label name='current-job'>Current Job <input id='current-job-checkbox' type='checkbox' onChange={(event) => currentJob(`current-date${id}`)}></input></label>

            <br/>

            <label name='task'>Job Tasks 
                <UilPlus onClick={addTask}  size="15" color="#0EA4FF" className='icon-btn'/>
            </label>
            
         
            {tasks.map((task, taskId) => (
                <JobTask key={taskId} task={task} taskId={taskId} componentId={id} setBuildTask={setBuildTask} removeTask={removeTask}/>
            ))}

            <br/>
        
            <div className="break-for-page-div">
                <label name='add-padding-bottom'>(adds padding bottom to push down to second page)</label>

                <div className="form-padding-container">
                    <p id='job-padding'> Value</p><p>{newPagePadding}</p>
                    <UilPlus onClick={() => handlePageBreak(newPagePadding +1)} size="15" color="#0EA4FF" className='icon-btn'/>
                    <UilMinus onClick={() => handlePageBreak(newPagePadding -1)}  size="15" color="#0EA4FF" className='icon-btn'/>
                </div>
            </div>
            <br/>
                
            <button id='update-job-btn' className="update-job-btn" onClick={() => updateJob(job)}>UPDATE JOB {id +1}</button>

        </div>
    )
}

export default AddJobs