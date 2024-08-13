import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import {Button} from '../component/Button';
import Cover from '../assets/Cover2.jpeg';

const Home = () => {
    // const isAuthenticated = !!localStorage.getItem('token');

    // return (
    //     <div className='home-all'>
    //         <h1 className='home-heading'>Connections</h1>
    //         {/* <p className='home-content'>Group words that share a common thread</p> */}

    //         <Link to='/game' >
    //             <button
    //                 className='btns btns-play'
    //             >
    //                 Play
    //             </button>
    //         </Link>

    //         {isAuthenticated ? (
    //             <>
    //                 <Link to='/profile' >
    //                     <button
    //                         className='btns btns-below'
    //                     >
    //                         Profile
    //                     </button>
    //                 </Link>
    //             </>
    //         ) : (
    //             <>
    //                 <p className='home-content-small'>If you want to see your stats</p>
    //                 <Link to='/register' >
    //                     <button
    //                         className='btns btns-below'
    //                     >
    //                         Register
    //                     </button>
    //                 </Link>
    //                 <Link to='/login' >
    //                     <button
    //                         className='btns btns-below'
    //                     >
    //                         login
    //                     </button>
    //                 </Link>
    //             </>
    //         )}
    //     </div>
    // )

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