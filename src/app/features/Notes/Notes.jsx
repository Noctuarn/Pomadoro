import React from 'react'

import NotesImage from "../../../assets/image/notes.png"

import ComponentHeader from '../../components/ComponentHeader/ComponentHeader'
import NotesForm from '../../components/Notes/NotesForm/NotesForm'


const Notes = () => {
  return (
    <div style={{marginBottom: "10px"}} id='notes' className='notes app-components'>
        <ComponentHeader title={"Notes"} imgSrc={NotesImage} rewerse={true}/>
        <NotesForm/>
    </div>
  )
}

export default Notes
