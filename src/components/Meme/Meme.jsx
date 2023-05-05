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

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

  return (
    <main>
        <div className='form'>
            <input 
                type="text" 
                placeholder="Top Text" 
                className='form--input'
                name='topText'
                value={meme.topText}
                onChange={handleChange}
            />

            <input 
                type="text" 
                placeholder="Bottom Text" 
                className='form--input'
                name='bottomText'
                value={meme.bottomText}
                onChange={handleChange}
            />

            <button
                onClick={getMemeImage}
                type="submit" 
                className='form--button'>Click for New Meme!</button>
        </div>

        <div className='meme'>
            <img src={meme.randomImage} className='meme--image'/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        
        
        </div>
    </main>
  )
}

export default Meme