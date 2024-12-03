import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HelloReact from './views/HelloReact'
import TodoList from './views/TodoList'
import TodoWrite from './views/TodoWrite'
import TodoList1 from './views/TodoList1'




function Hello(){
  return <h1>Hello</h1>  
}

function App() {
  return ( 
    <div> 
       <BrowserRouter>
        <Link to="/"> Home</Link> 
        | <Link to="/hello">Hello</Link>
        | <Link to="/todo">TodoList</Link>
        | <Link to="/todo1">TodoList1</Link>
        <Routes>
          <Route path='/hello' Component={HelloReact}></Route>
          <Route path='/todo' Component={TodoList}></Route>
          <Route path='/todo1' Component={TodoList1}></Route>
          <Route path='/write' Component={TodoWrite}></Route>
        </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
