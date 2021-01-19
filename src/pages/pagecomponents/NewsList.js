import React, {useEffect, useState } from 'react';
import Axios from 'axios';
import News from './News';

const NewsList = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const getArticles = async () => {
            const res = await Axios.get('http://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=5c2ccdd2356e4f4cbda9237171b36752')

            // console.log(res);
            setArticles(res.data.articles);
        };

        getArticles();
    }, [])
    return (
        <div>
            {articles.map(({title, description, url, urlToImage}) => (
                <News 
                    key={title}
                    title={title} 
                    description={description}
                    url={url}
                    urlToImage={urlToImage}
                />
            ))}
        </div>
    )
}

export default NewsList
