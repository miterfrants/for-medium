import { useEffect, useState } from "react";
import './ArticleCard.css';
import { Link } from 'react-router-dom';
import { dataContext } from '../Repositories/DataContext';

function ArticleCard(props) {
    const {article} = props;
    const [author, setAuthor] = useState(null);
    useEffect(()=> {
        if(!article ) {
            return;
        }
        dataContext.getUserRepositoryInstance().find(article.userId)
            .then((data)=>{
                setAuthor(data);
            });
    }, [article])
    
    return (
        <article className="article-card">
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <Link className="profile" to={`../users/${author?.id}`}>
                {author?.name}
            </Link>
        </article>
    );
  }
  
  export default ArticleCard;