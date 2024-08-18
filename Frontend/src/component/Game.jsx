import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Game.css';
import { Button } from './Button';

const Game = () => {
    const [words, setWords] = useState([]);
    const [selectedWords, setSelectedWords] = useState([]);
    const [correctGroups, setCorrectGroups] = useState([]);
    const [groups, setGroups] = useState({});
    const [message, setMessage] = useState('');
    const [gameCompleted, setGameCompleted] = useState(false);
    const [lives, setLives] = useState(4);
    const [userStats, setUserStats] = useState({ streak: 0, maxStreak: 0, completed: 0, wins: 0 });
    const [canPlay, setCanPlay] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get('https://connections-backend-uo7c.onrender.com/api/user/check-can-play', {
                headers: { 'Authorization': `Bearer ${token}` }
            })
                .then(response => {
                    setCanPlay(response.data.canPlay);
                    if (!response.data.canPlay) {
                        showSolution(response.data.words, response.data.groups);
                    } else {
                        fetchGameData();
                    }
                })
                .catch(error => {
                    console.error('Error checking play status:', error);
                });
        } else {
            fetchGameData();
        }
    }, []);

    const fetchGameData = () => {
        axios.get('https://connections-backend-uo7c.onrender.com/api/game/game-data')
            .then(response => {
                const shuffledWords = shuffleArray(response.data.words);
                setWords(shuffledWords);
                setGroups(response.data.groups);
            })
            .catch(error => {
                console.error('There was an error fetching the game data!', error);
            });
    };

    const shuffleArray = (array) => {
        let shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const handleShuffle = () => {
        const shuffledWords = shuffleArray(words);
        setWords(shuffledWords);
        setMessage('The grid has been shuffled!');
    };

    const handleWordClick = (word) => {
        if (selectedWords.includes(word)) {
            setSelectedWords(selectedWords.filter(w => w !== word));
        } else {
            setSelectedWords([...selectedWords, word]);
        }
    };

    const updateStats = (win) => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.post('https://connections-backend-uo7c.onrender.com/api/user/update-stats', { win }, {
                headers: { 'Authorization': `Bearer ${token}` }
            })
                .then(response => {
                    setUserStats(response.data);
                })
                .catch(error => {
                    console.error('Error updating user stats:', error);
                });
        }
    };

    const showSolution = (words = null, groups = null) => {
        setMessage('Game over! Here are the correct groups:');
        setGameCompleted(true);
        if (words && groups) {
            setWords(words);
            setGroups(groups);
        }
    };

    const checkSelection = () => {
        let foundGroup = false;

        for (let groupName in groups) {
            const groupWords = groups[groupName];
            if (selectedWords.every(word => groupWords.includes(word)) && selectedWords.length === 4) {
                setCorrectGroups([...correctGroups, { groupName, words: selectedWords }]);
                setWords(words.filter(word => !selectedWords.includes(word)));
                setMessage(`You found a group: ${groupName}`);
                foundGroup = true;
                break;
            }
        }

        if (!foundGroup) {
            setLives(lives - 1);
            setMessage(`This is not a valid group. You have ${lives - 1} lives left.`);

            if (lives - 1 === 0) {
                showSolution();
                updateStats(false);
            }
        }

        setSelectedWords([]);

        if (correctGroups.length + 1 === Object.keys(groups).length) {
            setGameCompleted(true);
            setMessage('Congratulations! You have completed the game!');
            updateStats(true);
        }
    };

    const currentDate = new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className="game-all">
            <div className="game-time-show">
                <h1>Connections</h1>
                <p className="date">{currentDate}</p>
            </div>
            <div className='game-grid-all'>
                {canPlay ? (
                    <>
                        {!gameCompleted && (
                            <>
                                <Button
                                    className='btns game-shuffle'
                                    buttonStyle='btn--outline'
                                    buttonSize='btn--large'
                                    onClick={handleShuffle}
                                >
                                    Shuffle
                                </Button>
                                <div className="grid">
                                    {words.map(word => (
                                        <div
                                            key={word}
                                            className={`word ${selectedWords.includes(word) ? 'selected' : ''}`}
                                            onClick={() => handleWordClick(word)}
                                        >
                                            {word}
                                        </div>
                                    ))}
                                </div>
                                <Button
                                    className='btns'
                                    buttonStyle='btn--outline'
                                    buttonSize='btn--large'
                                    onClick={checkSelection}
                                >
                                    Submit
                                </Button>
                            </>
                        )}
                        {message && <p className='game-message'>{message}</p>}
                        <div className="correct-groups">
                            {correctGroups.map((group, index) => (
                                <div key={index} className={`group-display ${group.groupName.toLowerCase()}`}>
                                    <h2><strong>{group.groupName}</strong></h2>
                                    <p className='group-display-names'>{group.words.join(', ')}</p>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <p className='the-game-has-been'>The game has already been completed. Please come back tomorrow!</p>
                        <div className="grid">
                            {words.map(word => (
                                <div
                                    key={word}
                                    className="word"
                                >
                                    {word}
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Game;
















