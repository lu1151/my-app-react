import React from "react";
import ReactDom from "react-dom";
import "./index.css"

// setup vars
const firstBook = {
    img: "https://m.media-amazon.com/images/I/81T1F3Dv0YL._SX140_.jpg",
    title: "Harry Potter",
    author: "J.K. Rowling"
}

const secondBook = {
    img: "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg",
    title: "A Promised Land",
    author: "Barack Obama"
}

function BookList() {
    return (
        <section className="booklist">
            <Book
                img={firstBook.img}
                title={firstBook.title}
                author={firstBook.author}
            />
            <Book
                img={secondBook.img}
                title={secondBook.title}
                author={secondBook.author}
            />
        </section>
    )
}

const Book = ({ img, title, author }) => {
    // const { img, title, author } = props;
    return (
        <article className="book">
            <img src={img} alt="" />
            <h3>{title}</h3>
        By <span>{author}</span>
        </article>)
}

ReactDom.render(<BookList />, document.getElementById("root"));