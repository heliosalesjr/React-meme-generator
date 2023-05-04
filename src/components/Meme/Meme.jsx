import React, { useState } from 'react';
import memesData from '../../memesData';
import './Meme.css'

const Meme = () => {

    //const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg")

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)


    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
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

        <img src={meme.randomImage} className='meme--image'/>
    </main>
  )
}

export default Meme