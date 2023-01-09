import { useState, useEffect } from "react"

const AddJobs = ({jobs, setJobs, job, id}) => {
    const [jobTitle, setJobTitle] = useState('')
    const [company, setCompany] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [tasks, setTasks] = useState(['caught all 150','never evolved starter pokemon'])
    const [buildTask, setBuildTask] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

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

    const addTask = () => {
        setTasks(current => [...current, buildTask])
    }

    // const updateTask = () => {
    //     setTasks(current => [...current, buildTask])
    // }

    const removeTask = (prop) => {
        console.log(prop)
        setTasks(current => current.filter(task => task !== prop))
    }


    const removeJob = (propJob) => {
        console.log(propJob)
        setJobs(current => current.filter(job => job !== propJob))
        // shows job tab 1 on removing a tab
        document.querySelector('#tab0').click()

    }




    const updateJob = (propJob) => {
        // Task section
        let buildTasksArray = []
        for (let i = 0; i < tasks.length; i++)
        {
            let value = document.querySelector(`#task${i}`).value
            buildTasksArray.push(value)
        }
        // setTasks(buildTasksArray)


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

    }




    useEffect(() => {
        // document.querySelector('#test').value = document.querySelector('#origin').innerHTML
        // setJobTitle(document.querySelector('#origin').innerHTML)


        document.querySelector(`#content${id}`).value = document.querySelector(`#resume-title${id}`).innerHTML
        setJobTitle(document.querySelector(`#content${id}`).value)

        // content${id}
        // resume-title${id}
     
    }, [id])




    return (
        <div className='forms-jobs'>
            {/* Only show current tab */}
            {/* {currentTab === id &&  */}
            <div>
                
                <label name='job title'>Job Title</label>
                <input id={`content${id}`} onChange={(event) => setJobTitle(event.target.value)}  ></input>
                {/* {id} */}

                <br/>
                <label name='company'>Company</label>
                <input onChange={(event) => setCompany(event.target.value)} placeholder={job.company}></input>

                <br/>
                <label name='job-description'>Job Description</label>
                <textarea onChange={(event) => setJobDescription(event.target.value)} placeholder={job.jobDescription}></textarea>

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

                <button onClick={addTask}>Add another task</button>
                <br/>
                {/* {tasks.length < 1 &&
                    <div>
                        <label name='task'>Task</label>
                        <input onChange={(event) => setBuildTask(event.target.value)} ></input>
                        <button onClick={updateTask}>Update</button>
                    </div>
                } */}

                {tasks.map((task, id) => (
                    <div key={id}>
                        <label name='task'>Task</label>
                        <input id={`task${id}`} onChange={(event) => setBuildTask(event.target.value)} ></input>
                        {/* <button onClick={addTask}>Add</button> */}
                        {id > 1 && 
                            <button onClick={() => removeTask(task)}>Remove</button>
                        }
                    </div>
                ))}

                <br/>

                <br/>
                <br/>
 
                {id !== 0 && <button onClick={() => removeJob(job)}>Remove Job</button>}
                
                <button onClick={() => updateJob(job)}>Update</button>
                
            </div>
            {/* } */}
        </div>
    )
}

export default AddJobs