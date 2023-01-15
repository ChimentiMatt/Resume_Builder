import { useState, useEffect } from "react"
import { UilPlus } from '@iconscout/react-unicons'
import { UilMinus } from '@iconscout/react-unicons'
import { UilMultiply } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'

const AddJobs = ({jobs, setJobs, job, id}) => {
    const [jobTitle, setJobTitle] = useState('')
    const [company, setCompany] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [tasks, setTasks] = useState(['Designed software architecture','Managed software programs'])
    const [buildTask, setBuildTask] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [newPagePadding, setNewPagePadding] = useState(0)
    const [currentJobState, setCurrentJobState] = useState(false)

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

    const currentJob = (dateSelector) => {
        let date = document.querySelector(`#${dateSelector}`).value

        if (!currentJobState) {
            document.querySelector(`#${dateSelector}`).disabled = true
            convertDate(date, 'current')
        }
        else {
            document.querySelector(`#${dateSelector}`).disabled = false
            convertDate(date, 'end')
        }
        setCurrentJobState(!currentJobState)
    }

    const addTask = () => {
        setTasks(current => [...current, buildTask])
        // needed as useEffect does not like objects
        // setTasksLength((current => [...current, buildTask]).length)
    }


    const removeTask = (prop) => {
        setTasks(current => current.filter(task => task !== prop))
    }


    const removeJob = (propJob) => {

        setJobs(current => current.filter(job => job !== propJob))
        // shows job tab 1 on removing a tab
        document.querySelector('#tab0').click()
    }

    const updateJob = (propJob, target) => {
        // Task section
        let buildTasksArray = []
        for (let i = 0; i < tasks.length; i++)
        {
            let value = document.querySelector(`#tasks${i}`).value
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
            startDate: startDate,
            endDate: endDate
        })

        // update order in state array
        tempArray.sort(function(a,b) {
            return a.id - b.id
        })

        setJobs(tempArray)
        
        setJobs(current => current.filter(job => job !== propJob ))

        setTasks(buildTasksArray)

        breakForPage(target)
        

    }

    const breakForPage = (target) =>{
        document.querySelector(`#${target}`).style.height = `${newPagePadding}rem`
    }

    const deleteWarning = (choice) => {
        if (choice === 'delete') document.querySelector('#warning-container').style.display = 'flex'
        else document.querySelector('#warning-container').style.display = 'none'
    }

    useEffect(() => {
        // Uses current state and populates forms values for jobs
        document.querySelector(`#title${id}`).value = document.querySelector(`#resume-title${id}`).innerHTML
        setJobTitle(document.querySelector(`#title${id}`).value)

        document.querySelector(`#company${id}`).value = document.querySelector(`#resume-company${id}`).innerHTML
        setCompany(document.querySelector(`#company${id}`).value)

        document.querySelector(`#job-description${id}`).value = document.querySelector(`#resume-description${id}`).innerHTML
        setJobDescription(document.querySelector(`#job-description${id}`).value)

        

        // let tempTasksArray = [] 

        // for (let i = 0; i < tasksLength; i++) {
        //     document.querySelector(`#tasks${i}`).value = document.querySelector(`#resume-tasks${i}`).innerHTML
        //     tempTasksArray.push(document.querySelector(`#resume-tasks${i}`).innerHTML)
        // }
        // setTasks(tempTasksArray)

    }, [id])




    return (
        <div className='forms-jobs'>
            <div id="warning-container">
                <p>Are you sure you want to delete Job {id +1}, {jobTitle}</p>
                <div className="warning-options">
                    <button onClick={() => removeJob(job)}>Delete</button>
                    <button onClick={() => deleteWarning('cancel')}>Cancel</button>
                </div>
            </div>

            {/* Only show current tab */}
            {/* {currentTab === id &&  */}
            {/* {id !== 0 && <button className="remove-job-btn" onClick={() => removeJob(job)}>REMOVE JOB</button>} */}

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
            <input  id={`start-date${id}`} type='date' onChange={(event) => convertDate(event.target.value, 'start')}></input>

            <label name='end-date'>End Date</label>
            <input id={`current-date${id}`} type='date' onChange={(event) => convertDate(event.target.value, 'end')}></input>
            
            <label name='current-job'>Current Job <input type='checkbox' onChange={(event) => currentJob(`current-date${id}`)}></input></label>

            <br/>

            <label name='task'>Job Tasks 
                <UilPlus onClick={addTask}  size="15" color="#0EA4FF" className='icon-btn'/>
            </label>

            {tasks.map((task, id) => (
                <div key={id}>
                    <textarea id={`tasks${id}`} placeholder={task} className="tasks-textarea priority-field" onChange={(event) => setBuildTask(event.target.value)} ></textarea>
                    {id > 0 && 
                    <UilMultiply onClick={() => removeTask(task)}  size="15" color="#ff0000" className='icon-btn m-l'/>
                    }
                </div>
            ))}
            {/* <button className="another-task-btn" onClick={addTask}>ADD ANOTHER TASK</button> */}
            <br/>
            
            <div className="break-for-page-div">
                {/* <button onClick={() => breakForPage(`new-page-spacing${id}`)}>add padding bottom</button> */}
                <label name='add-padding-bottom'>(adds padding bottom for second page. Subtract to reset)</label>
                {/* <div id={`hidden-pb-value${id}`} className="">{newPagePadding}</div> */}

                <div className="form-padding-container">
                    <UilPlus onClick={() => setNewPagePadding(newPagePadding +1)} size="15" color="#0EA4FF" className='icon-btn'/>
                    <UilMinus onClick={() => setNewPagePadding(0)}  size="15" color="#0EA4FF" className='icon-btn'/>
                </div>
            </div>
            <br/>
                
            <button className="update-job-btn" onClick={() => updateJob(job, `new-page-spacing${id}`)}>UPDATE JOB {id +1}</button>
            
            
            {/* } */}
        </div>
    )
}

export default AddJobs