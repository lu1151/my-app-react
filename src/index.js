import React from "react";
import ReactDom from "react-dom";
import "./index.css"

function BookList() {
    return (
        <section className="booklist">
            <Book />
        </section>
    )
}



const Book = () => {
    const title = "Harry Potter and the Order of the Phoenix";
    const author = "J.K. ROWLING";
    return (<article className="book">
        <img src="https://m.media-amazon.com/images/I/81T1F3Dv0YL._SX140_.jpg" alt="" />
        <h3>{title}</h3>
        By <span>{author}</span>
        <p>{}</p>
    </article>)
}

ReactDom.render(<BookList />, document.getElementById("root"));