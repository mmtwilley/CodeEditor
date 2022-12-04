import './add-cell.css';
import {useActions} from '../hooks/use-actions';

interface AddCellProps {
    previousCellId: string | null;
    forceVisible?:boolean;
}

const AddCell:React.FC<AddCellProps> = ({forceVisible, previousCellId}) =>{

    
    const {insert_cell_after} = useActions();

    return( 
            <div className= {`add-cell ${forceVisible && 'force-visible'}`}>
                <div className='add-buttons'>
                    <button className='button is-round is-primary is-small' onClick={() => insert_cell_after(previousCellId,'code')}>
                        <span>
                            < i className='fa fa-plus' />
                        </span>
                        <span>Code</span>
                    </button>
                    <button className='button is-round is-primary is-small' onClick={() => insert_cell_after(previousCellId,'text')}>
                        <span>
                            < i className='fa fa-negative' />
                        </span>
                        <span>Text</span>
                    </button>
                </div>
                <div className='divider'></div>
            </div>
        )
}

export default AddCell;