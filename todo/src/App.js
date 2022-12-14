import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import trash from './trash.png'

export default function App() {
  const [list, updateList] = useState([]);
  const [todo, setTodo] = useState('');


  let data = list.map((d, index) => {
    return <div style={{ width: '60%', border: '1px solid #eee', marginTop: '2%', display: 'flex', justifyContent: 'space-between', padding: '1%' }}> <p>{d}</p> <img src={trash} width={17} /></div>
  })

  function clickhandler() {
    //let a = list
    //a.push(todo)
    //updateList(a)
    if (todo.length === 0) {
      alert('Empty data not allowed')
    }
    else {
      setTodo("")
      list.push(todo)
      console.log('List = ', list)
    }

  }

  function deleteHandler(index) {
    console.log(index)
    //list.splice(index, 1);
    let aa = [...list]
    aa.splice(index, 1);
    //let a = list
    updateList(aa)
    console.log('List = ', list)
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div style={{ width: '100%', height: '20%', background: 'linear-gradient(to right bottom,#2980B9,#6DD5FA)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontWeight: '300' }}>TODO LIST</h1>
      </div>
      <div style={{ width: '100%', height: '80%', display: 'flex', alignItems: 'center', padding: '2%', flexDirection: 'column' }}>
        <TextField value={todo} onChange={(e) => { setTodo(e.target.value) }} style={{ width: '50%', marginBottom: '1%' }} id="outlined-basic" label="Type here" variant="outlined" />
        <Button type='button' onClick={clickhandler} variant="contained">Submit</Button>
  
        {list.map((l, index) => (
          <div style={{ width: '60%', border: '1px solid #eee', marginTop: '2%', display: 'flex', justifyContent: 'space-between', padding: '1%' }}> <p>{l}</p> <img onClick={() => { deleteHandler(index) }} src={trash} width={17} /></div>
        ))}
        <p style={{marginTop:'3%'}}>Number of Items: {list.length}</p>
      </div>
    </div>
  )
}