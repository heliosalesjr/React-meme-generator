import React from 'react';
import memesData from '../../memesData';

const Meme = () => {

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }

  return (
    <main>
        <div className='form'>
            <input 
                type="text" 
                placeholder="Top Text" 
                className='form--input'
            />

            <input 
                type="text" 
                placeholder="Bottom Text" 
                className='form--input'
            />

            <button
                onClick={getMemeImage}
                type="submit" 
                className='form--button'>Click for New Meme!</button>
        </div>
    </main>
  )
}

export default Meme