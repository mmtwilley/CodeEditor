import 'bulmaswatch/superhero/bulmaswatch.min.css'
import { Provider } from 'react-redux';
import {store} from './state';


//1a) Import useState
// import { useState} from "react";

// 1) Import ReactDOM library
import ReactDOM from "react-dom/client";

// import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';
// 2) Get a reference to the div with ID root
const el = document.getElementById("root");


 
// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el!);
 
// 4) Create a component
const App = () => {
  
  return (
    <Provider store={store}>
      <div>
        <TextEditor/>
     </div>
    </Provider>
  
  );
};

// 5) Show the component on the screen
root.render(<App />);