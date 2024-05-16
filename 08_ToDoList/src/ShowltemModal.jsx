import PropTypes from  "prop-types"
const ShowItemModal = ({task}) => {
    return(
        <div className="modal fade" id={"showItemModal"+task.id}>
            <div className="modal-dialog mdoal-dialog-centered">
                <div className="modal-content">
            <div className="modal-header">
                    <h5 
                    className="modal-title"
                    id="showItemModalLabel"
                    >
                        {task.task}
                    </h5>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <p className="col">
                        {task.description}
                        </p>
                    </div>
                    <div className="row">
                        <div className="col">
                        <i className="bi bi-geo-alt-fill"></i> {task.limit}
                        </div>
                    <div className="col">
                        <i className="bi bi-geo-alt-fill"></i> {task.location}
                    </div>
                    </div>
                </div>
                <div className="modal-footer">
                <button className="btn btn-sm btn-outline-danger">
                    <i className="bi bi-trash"></i>
                        Delete
                    </button>
                    <button className="btn btn-sm btn-outline-primary">
                    <i className="bi bi-pencil-square"></i> 
                    Edit
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

ShowItemModal.propTypes = {
    task: PropTypes.object.isRequired,
}

export default ShowItemModal