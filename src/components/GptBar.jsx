import React from 'react'
import lang from '../utils/languageContant'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from '../utils/configSlice';

function GptBar() {
    const dispatch = useDispatch();
    const language = useSelector(store=>store.config.lang)
    const handleLanguageChange = (e) =>{
        dispatch(changeLanguage(e.target.value));
    }

  return (
    <div className='mx-auto max-w-3xl px-4 mt-4 flex gap-4'>
        <input className='border-black border-2 p-2 w-4/5 rounded 
        flex-grow min-w-0' type="text" name="" id="" 
        placeholder={lang[language].GptSearchPlaceholder} />
        <button className='px-2 py-1 border-2 rounded-md bg-gray-300 font-semibold w-36 whitespace-nowrap'>{lang[language].search}</button>
        <select className='p-2 bg-gray-300 rounded' onClick={handleLanguageChange} name="" id="">
            <option value="en">English</option>
            <option value="hindi">Hindi</option>
            <option value="spanish">Spanish</option>
        </select>
    </div>
  )
}

export default GptBar