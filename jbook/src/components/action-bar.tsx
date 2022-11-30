import { Cell } from "../state";


interface ActionBarProp{
    id:string;
}




const ActionBar:React.FC<ActionBarProp> = ({id}) =>{
    return <div>
        <button>Up</button>
        <button>Down</button>
        <button>Delete</button>
    </div>
}

export default ActionBar;