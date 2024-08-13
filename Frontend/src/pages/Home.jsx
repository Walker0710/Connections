import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import {Button} from '../component/Button';
import Cover from '../assets/Cover2.jpeg';

const Home = () => {

    return (
        <div className='blog-hero-container'>
            <img className='blog-hero-cover' src={Cover} alt="cover" />

                <h1>Connections</h1>
                <p>Match the groups with same traits</p>
                <div className='hero-btns'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        to='/game'
                    >
                        PLAY
                    </Button>
                </div>
        </div>
    )

}

export default Home;