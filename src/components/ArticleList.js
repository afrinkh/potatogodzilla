import React from 'react'
const ArticleList = ({articles}) => {
    return (
        <div>
            {articles.map((article) => (<h3>{article.title}</h3>))}
        </div>
    )
}

export default ArticleList
