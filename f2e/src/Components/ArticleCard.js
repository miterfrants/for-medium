import { useEffect, useState } from "react";
import './ArticleCard.css';
import { Link } from 'react-router-dom';

function ArticleCard(props) {
    const {article} = props;
    const [author, setAuthor] = useState(null);
    useEffect(()=> {
        if(!article ) {
            return;
        }
        getAuthor(article.userId)
            .then((data)=>{
                setAuthor(data);
            });
    }, [article])
    
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
        <article className="article-card">
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <Link className="profile" to={`../users/${article.author?.id}`}>
                {author?.name}
            </Link>
        </article>
    );
  }
  
  export default ArticleCard;