import React from 'react'

import ComponentHeader from '../../components/ComponentHeader/ComponentHeader'
import NotesForm from '../../components/Notes/NotesForm/NotesForm'


const Notes = () => {
  return (
    <div style={{marginBottom: "10px"}} id='notes' className='notes app-components'>
        <ComponentHeader title={"Notes"} imgSrc={"https://play-lh.googleusercontent.com/36szRvmqeewn6fxpx9V88zhpPU3c84Im9zjAFPZl-cReiztnAD6cn0jSnWBGsNNdPsU"} rewerse={true}/>
        <NotesForm/>
    </div>
  )
}

export default Notes
