import { useEffect, useState } from "react";
import './Articles.css';
import { Link } from 'react-router-dom';

function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/articles')
            .then((respPromise) => {
                return respPromise.json()
            })
            .then((data)=>{
                return Promise.all(data.map( article => {
                    return getAuthor(article.userId);
                })).then((values)=>{
                    return data.map((article,index)=>{
                        return {
                            ...article,
                            author: values[index]
                        };
                    })
                });
            })
            .then(articles=> {
                setArticles(articles);
            });
    },[]);

    const getAuthor = (userId) => {
        return fetch(`http://localhost:5000/users/${userId}`)
            .then((respPromise)=>{
                return respPromise.json();
            })
            .then((data)=>{
                return data;
            });
    }

    return (
      <div className="articles">
        {
            articles.map((article) =>{ 
                return (
                    <article className="article-card">
                        <h2>{article.title}</h2>
                        <p>{article.content}</p>
                        <Link className="profile" to={`../users/${article.author?.id}`}>
                            {article.author?.name}
                        </Link>
                    </article>
                )
            })
        }
      </div>
    );
  }
  
  export default Articles;