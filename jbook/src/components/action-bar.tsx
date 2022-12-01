import './action-bar.css';
import {useActions} from '../hooks/use-actions';
import IconButton from './icon-button';

interface ActionBarProp{
    id:string;
}




const ActionBar:React.FC<ActionBarProp> = ({id}) =>{

    const {move_cell,delete_cell} = useActions();

    return <div className='action-bar'> 
        <IconButton icon='fas fa-arrow-up' onClick={() => move_cell(id,'up')} />
        <IconButton icon='fas fa-arrow-down' onClick={() => move_cell(id,'down')} />
        <IconButton icon='fas fa-times' onClick={() => delete_cell(id)} />
    </div>
}

export default ActionBar;