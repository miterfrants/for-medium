import { useEffect, useState } from "react";
import './Articles.css';
import ArticleCard from '../Components/ArticleCard';
import { dataContext } from '../Repositories/DataContext';

function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const articleRepo = dataContext.getArticleRepositoryInstance();
        articleRepo.findAll()
            .then(articles=> {
                setArticles(articles);
            });
    },[]);

    return (
      <div className="articles">
        {
            articles.map((article) =>{ 
                return (
                    <ArticleCard key={article.id} article={article}></ArticleCard>
                )
            })
        }
      </div>
    );
  }
  
  export default Articles;