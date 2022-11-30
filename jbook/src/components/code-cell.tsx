import { useState, useEffect} from "react";
import CodeEditor from './code-editor';
import Preview from './preview';
import bundle from '../bundler';
import Resizable from "./resizeable";
import { Cell } from "../state";
import {useActions} from '../hook/use-actions'



interface CodeCellProps{
  cell: Cell
}

const CodeCell:React.FC<CodeCellProps> = ({cell}) => {
  

  const [err,setErr] = useState('')
  const [code, setCode] = useState('');
  const {update_cell} = useActions();
  

  useEffect(()=>{
    const timer = setTimeout(async ()=>{
      const output = await bundle(cell.content);
      setCode(output.code);
      setErr(output.err);
    },2500)

    return () =>{
      clearTimeout(timer);
    }
  },[cell.content])


  return (
    <Resizable direction="vertical">
      <div style={{height:'100%',display:'flex', flexDirection:'row'}}>
       <Resizable direction="horizontal">
          <CodeEditor 
          initialValue={cell.content}
          onChange={(value) => (cell.id,value)}
          />
        </Resizable>
        <Preview code={code} err={err}/>
        </div>
    </Resizable>
  );
};
export default CodeCell;