import React from "react";
import blogData from "../data/blog";
import Article from "./Article";
function ArticleList(){
    const articleList = blogData.posts
    const atricles = articleList.map((blog)=>(Article(blog)))
    return(
        <main>
            {atricles}
        </main>
    );
}

export default ArticleList