import MonacoEditor from '@monaco-editor/react'

interface CodeEditorProps{
    initialValue:string;
    onChange(value:string):void;
}

const CodeEditor: React.FC<CodeEditorProps>= ({onChange, initialValue}) => {
    
    const onEditoraDidMount = (getValue:() => string, monacoEditor:any) => {
        monacoEditor.onDidChangeModelContent(() =>{
            onChange(getValue());
        });
    };
    
    
    
    return <MonacoEditor 
    editorDidMount={onEditoraDidMount}
    value = {initialValue}
    theme='dark' 
    language='javascript'
     options={{
        wordWrap:"on",
        minimap:{enabled:false},
        showUnused:false,
        folding:false,
        lineNumbersMinChars:3,
        fontSize:16,
        scrollBeyondLastLine:false,
        automaticLayout:true
     }}
     height="500px" />
};


export default CodeEditor;