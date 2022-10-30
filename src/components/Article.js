import React from "react";

function Article({id,title,date="January 1, 1970",preview,minutes}){
    let minRead = ""
    if(minutes<30){
        minRead ="☕️"
        for (let i = minutes; i > 5; i--){
            minRead= minRead+"☕️"
            i=i-4
        }
        minRead= minRead+minutes+" min read"
    }else{
        minRead ="🍱"
        for (let i = minutes; i > 10; i--){
            minRead= minRead+"🍱"
            i=i-9
        }
        minRead= minRead+minutes+" min read"
    }

    
    return(
        <article key={id}>
            <h3>{title}</h3>
            <small>{date} {minRead}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article