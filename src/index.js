import React from "react";
import ReactDom from "react-dom";
import "./index.css"

function BookList() {
    return (
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    )
}
const Book = () => {
    return <article className="book">
        <Img />
        <Title />
        By <Author />

    </article>
}

const Img = () => <img src="https://m.media-amazon.com/images/I/81T1F3Dv0YL._SX140_.jpg" alt="" />;

const Title = () => <h3>Harry Potter and the Order of the Phoenix</h3>;

const Author = () => <span style={}>J.K. ROWLING</span>;

ReactDom.render(<BookList />, document.getElementById("root"));