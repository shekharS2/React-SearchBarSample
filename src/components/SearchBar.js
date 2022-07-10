import { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
    const [ searchedPlayers, setSearchedPlayers ] = useState([]);
    const handleChange = (e) => {
        const inputText = e.target.value;
        console.log(inputText)
        if(inputText === '') {
            setSearchedPlayers([]);
        }else{
            setSearchedPlayers(props.playersData.filter( (player) => player.name.toLowerCase().includes(inputText.toLowerCase()) ));
        }

        console.log(searchedPlayers);
    }

    return (
        <div>
            <div className='searchInputs' >
                <input 
                    onChange={handleChange} 
                    placeholder={props.placeHolder}
                />
            </div>
            {searchedPlayers.length !== 0 && 
                <div className='data-result'>
                    {searchedPlayers.map((player) => {
                        return <div className='data-item' key={player.name}>
                            <p>
                                {player.name}
                            </p>
                        </div>
                    })}
                </div>
            }
        </div>
    );
}

export default SearchBar;