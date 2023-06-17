import './TaskItem.scss';
import Card from '../UI/Card';

const TaskItem = (props) =>{

    return (
    <Card>
        <div className="notify__inner">
            <h5>{props.task}</h5>
        </div>
    </Card>
    );
}

export default TaskItem;