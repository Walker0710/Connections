import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const isAuthenticated = !!localStorage.getItem('token');

    return (
        <div className='home-all'>
            <h1 className='home-heading'>Connections But For Doctors</h1>
            <p className='home-content'>Group words that share a common thread</p>

            <Link to='/game' >
                <button
                    className='btns btns-play'
                >
                    Play
                </button>
            </Link>

            {isAuthenticated ? (
                <>
                    <Link to='/profile' >
                        <button
                            className='btns btns-below'
                        >
                            Profile
                        </button>
                    </Link>
                </>
            ) : (
                <>
                    <p className='home-content-small'>If you want to see your stats</p>
                    <Link to='/register' >
                        <button
                            className='btns btns-below'
                        >
                            Register
                        </button>
                    </Link>
                    <Link to='/login' >
                        <button
                            className='btns btns-below'
                        >
                            login
                        </button>
                    </Link>
                </>
            )}
        </div>
    )
}

export default Home;