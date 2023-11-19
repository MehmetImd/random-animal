import '../style/AnimalShow.css';
import { useState } from 'react';
import bird from '../icon/bird.svg';
import cat from '../icon/cat.svg';
import cow from '../icon/cow.svg';
import dog from '../icon/dog.svg';
import gator from '../icon/gator.svg';
import horse from '../icon/horse.svg';
import heart from '../icon/heart.svg';

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
};

const AnimalShow = ({type}) => {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };

    return(
        <div className='animal-show' onClick={handleClick}>
            <img 
                className='animal' 
                src={svgMap[type]} 
                alt="animal" />
            
            <img 
                className='heart'
                src={heart} 
                alt="heart"
                style={{
                    width: 10 + 10 * clicks + 'px'
                }} 
            />
        </div>
    );
};

export default AnimalShow;