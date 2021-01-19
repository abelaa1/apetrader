import React from 'react'
import './News.css';

function News({title, description, url, urlToImage}) {
    return (
        <div className='news-item'>
            <img className='news-img' src={urlToImage} alt="News Images"/>
            <h3>
                <a href={url}>
                    {title}
                </a>
            </h3>
            <p>{description}</p>
        </div>
    )
}

export default News;


//5c2ccdd2356e4f4cbda9237171b36752  