import './add-cell.css';
import {useActions} from '../hooks/use-actions';

interface AddCellProps {
    nextCellId: string | null;
}

const AddCell:React.FC<AddCellProps> = ({nextCellId}) =>{
    
    const {insert_cell_before} = useActions();

    return <div>
        <button onClick={() => insert_cell_before(nextCellId,'code')}>Code</button>
        <button onClick={() => insert_cell_before(nextCellId,'text')}>Text</button>
    </div>;
}

export default AddCell;