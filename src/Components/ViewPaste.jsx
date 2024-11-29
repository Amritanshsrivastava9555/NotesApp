// import React, { useEffect, useState } from 'react'
// import Paste from './Paste'
// import { useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';

// const ViewPaste = () => {

//   const allPastes = useSelector((state) => state.paste.pastes);
//   // const [title,setTitle] = useState('')
//   // const [content,setContent] = useState('')
//   const [searchParams] = useSearchParams();
//   const id = searchParams.get("id");

//   const apnaPaste = allPastes.filter((p) => p._id === id)[0]
//   // setTitle(apnaPaste.title)
//   // setContent(apnaPaste.content)
//   console.log(allPastes)
//   console.log(apnaPaste)
//   return (
//     <div>
//       <input value={apnaPaste.title || ''} disabled></input> 
//       <textarea value={apnaPaste.content || ''} disabled></textarea>
//       {/* title ^ */}
//       {/* content v  */}
//     </div>
//   )
// }

// export default ViewPaste



import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';

const ViewPaste = () => {
  const allPastes = useSelector((state) => state.paste.pastes);
  // const [searchParams] = useSearchParams();
  // const id = searchParams.get("id");
  const {id} = useParams()

  // const apnaPaste = allPastes.filter((p) => p._id === id);
  const apnaPaste = allPastes.find((p) => p._id === id);

  return (
    // <div>
    //   <input value={apnaPaste?.title || ''} disabled />
    //   <textarea value={apnaPaste?.content || ''} disabled />
    // </div>
    <div id='home'>
    <div className='bg-dark mt-5 p-2' id='homeBox'>
      <div>
      <input type='text' 
      className='rounded-2 p-2 bg-secondary mt-2 text-light w-50'
      disabled
      value={apnaPaste?.title}
      ></input>
      </div>

      <div>
        <textarea
        className='p-3 mt-3 rounded-3 bg-secondary text-light w-75'
        value={apnaPaste?.content} 
        disabled 
        rows={20}/>
      </div>
      </div>
    </div>
  );
};

export default ViewPaste;
