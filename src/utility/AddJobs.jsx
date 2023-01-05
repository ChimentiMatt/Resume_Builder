import { useState } from "react"

const AddJobs = ({jobs, setJobs}) => {
    const [company, setCompany] = useState('')
    const [jobDescription, setJobDescription] = useState('')

    const addJob = (event) =>{
        event.preventDefault()
        setJobs(current => [...current, {company: company}])
        setJobDescription('hi')
    }

    return (
        <form id='forms-jobs'>
            <label name='company'>Company</label>
            <input onChange={(event) => setCompany(event.target.value)}></input>
            <label name='job-description'>Job Description</label>
            <input onChange={(event) => setJobDescription(event.target.value)}></input>
            <button onClick={addJob}>Add Job</button>
        </form>
    )
}

export default AddJobs