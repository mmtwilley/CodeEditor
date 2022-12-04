import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { DeleteCellAction, InsertCellAfterAction,
    MoveCellAction, UpdateCellAction,
    Action, direction} from "../actions";
import { CellTypes} from "../cell";
import bundle from "../../bundler";

export const  update_cell = (id:string, content:string): UpdateCellAction => {
    return {
        type: ActionType.UPDATE_CELL,
        payload:{id,content}
    };
};

export const delete_cell = (id:string): DeleteCellAction => {
    return{
        type:ActionType.DELETE_CELL, 
        payload: id
    };

};

export const  move_cell = (id:string, direction:direction): MoveCellAction => {
    return{
        type:ActionType.MOVE_CELL,
        payload: {
            id, 
            direction
        }
    };

};

export const insert_cell_after = (id:string | null, celltype:CellTypes):InsertCellAfterAction => {
    return{
        type:ActionType.INSERT_CELL_AFTER,
        payload:{
            id,
            type: celltype
        }
    };
};


export const createBundle = (cellId:string, input:string) =>{
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.BUNDLE_START,
            payload:{
                cellId
            }
        });

        const result = await bundle(input);
        
        dispatch({
            type: ActionType.BUNDLE_COMPLETE,
            payload:{
                cellId,
                bundle:result
            }
        })
    }
}