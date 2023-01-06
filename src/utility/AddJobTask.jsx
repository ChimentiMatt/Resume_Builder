

const AddJobTask = ({addTask, task}) => {
    console.log(task)
  return (
    <div>
        <label name='task'>Task</label>
        <input placeholder={task}></input>
    </div>
  )
}

export default AddJobTask