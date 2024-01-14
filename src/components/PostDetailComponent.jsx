// PostDetailComponent.jsx
import React, { useState } from 'react';
 import {useParams , useSearchParams} from 'react-router-dom'

const PostDetailComponent = () => {
    const [name,setName] = useState("")
    let [searchParams, setSearchParams] = useSearchParams();

    const {id} = useParams()

console.log("searchParams  : ", searchParams.get("family"))

console.log("id : " , id)

function handleSubmit(event) {

    setSearchParams({
        family:name
    });
  }


  return (
    <>
      <section className='flex gap-4 mt-4'>
        <div >
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
            <button onClick={handleSubmit} type='submit'>asd</button>
        </div>
        hello world
      </section>
    </>
  );
};

export default PostDetailComponent;
