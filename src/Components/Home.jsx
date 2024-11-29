import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToPastes, updateToPastes } from '../Features/PasteSlice'

const Home = () => {

  const [title,setTitle] = useState('')
  const [value,setvalue] = useState('')
  const [searchParams,setSearchParams] = useSearchParams()
  const pasteId = searchParams.get("pasteId")
  const dispatch = useDispatch()
  const allPastes = useSelector((state) => state.paste.pastes)

  function createPaste(){
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString()
    }
    if(pasteId){
      //update
      dispatch(updateToPastes(paste))
    }
    else if(paste.title==="" || paste.content===""){
      alert("Title or Content can't be empty.")
    }
    else{
      dispatch(addToPastes(paste))
    }
    //after creation or updation
    setTitle('')
    setvalue('')
    setSearchParams({})
  }

  useEffect(() => {
    if(pasteId){
      const apnaPaste = allPastes.find((p) => p._id === pasteId)
      setTitle(apnaPaste.title)
      setvalue(apnaPaste.content)
    }
  }, [pasteId])
  

  return (
    <div id='home'>
    <div className='mt-5 p-2' id='homeBox'>
      <div>
      <input type='text' 
      className='rounded-2 p-2 mt-2 bg-dark-subtle text-dark-emphasis w-50'
      // style={{backgroundColor:"#EECA98"}}
      placeholder='Enter Title here' 
      value={title} onChange={(e) => setTitle(e.target.value)
      }></input>

      <button className='btn ms-3 mb-1' onClick={createPaste} style={{backgroundColor:"#6A1E55",color:"white"}}>
        {
          pasteId ? "Update Note" : "Create Note"
        }
      </button>
      </div>

      <div>
        <textarea
        className='p-3 mt-3 rounded-3 bg-dark-subtle text-dark-emphasis w-75'
        value={value} 
        // style={{backgroundColor:"#EECA98"}}
        placeholder='Enter content here' 
        onChange={(e) => setvalue(e.target.value)} 
        rows={20}/>
      </div>
    </div>
    </div>
  )
}

export default Home