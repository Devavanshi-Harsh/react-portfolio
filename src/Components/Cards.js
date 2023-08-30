import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './CSS/Cards.css'
const Card = ({ img, title, msg }) => {
    const [readMode, setReadMode] = useState(false);
    return (
        <div>
            <div className="card-box">
                <img className='card-image' src={img} />
                <section className='card-text-container'>
                    <article className='card-title'>{title}</article>
                    {
                        readMode ?
                            <>
                                <article className='card-message'>{msg}</article>
                                <a onClick={() => setReadMode(readMode ? false : true)}>Hide extra </a>
                                <FontAwesomeIcon icon={faArrowLeft} size="1x" />
                            </> :
                            <>
                                <article className='card-message'>{msg.slice(0, 100)}</article>
                                <a onClick={() => setReadMode(readMode ? false : true)}>Read More </a>
                                <FontAwesomeIcon icon={faArrowRight} size="1x" />
                            </>
                    }
                </section>
            </div>
        </div>
    )
}
export default Card;