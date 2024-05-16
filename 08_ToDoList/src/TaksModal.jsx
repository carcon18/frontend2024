import Swal from "sweetalert2"
import PropTypes from  "prop-types"
import { useForm } from "./Hooks/useForm"
const taskInfo ={
    task: "",
    description: "",
    location: "",
    limit: "",
}

const TaskModal = ({taskList, setTaskList}) => {
    const [values, handleInputChange, reset] = useForm(taskInfo)

    const handleSaveClick = () => {
        const newTaskList = [
            ...taskList,
            {
            id: taskList.length + 1,
            ...values,
            isDone: false
            }

        ]
        setTaskList(newTaskList)
        localStorage.setItem("taskList", JSON.stringify(newTaskList))
        
        reset()
        //'Task Added'
        Swal.fire({
            icon: 'success',
            title: 'Task Added'
        })
    }
    return(
        <div className="modal fade" id={"taskModal"}>
            <div className="modal-dialog mdoal-dialog-centered">
                <div className="modal-content">
            <div className="modal-header">
                    <h5 
                    className="modal-title"
                    id="taskModalLabel"
                    >
                        Add New Task
                    </h5>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col text-start">

                            <label 
                            className="form-label"
                            htmlFor="task"
                            >Task</label>
                            <input 
                            className="form-control"
                            id="task"
                            name="task"
                            onChange={handleInputChange}
                            type="text"
                            value={values.task}
                            />

                            <label 
                            className="form-label"
                            htmlFor="description"
                            >Descripción</label>

                            <textarea 
                            className="form-control"
                            id="description" 
                            name="description"
                            onChange={handleInputChange}
                            value={values.description}
                            ></textarea>

                            <label 
                            className="form-laber"
                            htmlFor="location"
                            >Location</label>

                            <input 
                            className="form-control"
                            name="location" 
                            id="location"
                            onChange={handleInputChange}
                            value={values.location} 
                            type="text" 
                            />

                            <label className="form-label"
                            htmlFor="limit"
                            >Limit</label>

                            <input 
                            className="form-control"
                            name="limit" 
                            id="limit" 
                            onChange={handleInputChange}
                            type="time" 
                            value={values.limit}
                            />
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-sm btn-outline-primary"
                    onClick={handleSaveClick}
                    data-bs-dismiss="modal"
                    >
                    <i className="bi bi-pencil-square"></i> 
                    Save

                    </button>
                    <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-dismiss="modal"
                    >
                    <i className="bi bi-x-lg"></i>
                        Close
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

TaskModal.propTypes = {
    taskList: PropTypes.array.isRequired,
    setTaskList: PropTypes.func.isRequired,
}

export default TaskModal