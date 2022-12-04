import {Fragment} from 'react';
import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./code-list-item";
import AddCell from "./add-cell";

const CellList:React.FC = () => {
    const cells = useTypedSelector(({cells:{order,data}}) => {
        return order.map((id) =>{
            return data[id]
        });
    });

    const renderedCells = cells.map( cell  => 
        <Fragment key={cell.id} >
            <CellListItem cell={cell} />
            <AddCell previousCellId={cell.id} /> 
        </Fragment>
    )
   

    return <div>
        <div className={cells.length === 0 ? 'force-visible' : ''}>
            <AddCell forceVisible={cells.length === 0} previousCellId={null}/>
        </div>
        {renderedCells} 
    </div>
};

export default CellList