import React, { useState } from 'react'
import { postData } from '../api/PostApi';

const Form = ({ data, setData}) => {

    const [addData, setAddData] = useState({
        title: "",
        body: "",
    });

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prev) => {
            return {
                ...prev,
                [name] : value,
            }
        });
    }

    const addPostData = async () => {
        const res = await postData(addData);
        console.log('res', res);
        if((res.status == 201)){
            setData([...data, res.data])
            setAddData({title: "", body: ""});
        }
    }
    //form submission

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addPostData();
    }

  return (
    <form onSubmit={handleFormSubmit}>
        <div>
            <label htmlFor='title'></label>
            <input 
            type='text'
            autoComplete='off'
            id='title'
            name='title'
            placeholder='Add Title'
            value={addData.title}
            onChange={handleInputChange}
            />
        </div>
         <div>
            <label htmlFor='body'></label>
            <input 
            type='text'
            autoComplete='off'
            id='body'
            name='body'
            placeholder='Add Post'
            />
        </div>
        <button type='submit'>Add</button>
      
    </form>
  )
}

export default Form
