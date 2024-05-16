import Listittem from "./Listittem"

const List = ({taskList}) =>{
    return(
        <>
        <div className="row">
        <div className="col-6">
          <h4>Tasks</h4>
        </div>

        <div className="col-3">
          <h4>Limit</h4>
        </div>

        <div className="col-3">
          <h4>Location</h4>
        </div>
      </div>

      {
        taskList.map(
            (task) => (
                <Listittem
                key={task.id}
                task={task}
                />
            )
        )
    }

      
    </>
    )
}
export default List