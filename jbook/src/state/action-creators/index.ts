import { ActionType } from "../action-types";
import { Action, DeleteCellAction, InsertCellBeforeAction, MoveCellAction, UpdateCellAction,direction } from "../actions";
import { CellTypes} from "../cell";

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

export const insert_cell_before = (id:string | null, celltype:CellTypes):InsertCellBeforeAction => {
    return{
        type:ActionType.INSERT_CELL_BEFORE,
        payload:{
            id,
            type: celltype
        }
    };
};