import React from "react";
import ReactDom from "react-dom";
import "./index.css"

// setup vars
const books = [
    {
        id: 1,
        img: "https://m.media-amazon.com/images/I/81T1F3Dv0YL._SX140_.jpg",
        title: "Harry Potter",
        author: "J.K. Rowling"
    },
    {
        id: 2,
        img: "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg",
        title: "A Promised Land",
        author: "Barack Obama"
    },
    {
        id: 3,
        img: "https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg",
        title: "If Animals Kissed Good Night",
        author: "Ann Whitford Paul"
    }
];


function BookList() {
    return (
        <section className="booklist">
            {books.map((book) => {
                return <Book key={book.id} {...book}></Book>;
            })}
        </section>
    );
}

const Book = (props) => {
    const { img, title, author } = props;
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert("Hello");
    }
    const more = (author) => {
        console.log(author);
    }

    return (
        <article className="book" onMouseOver={() => {
            console.log(title);
        }}>
            <img src={img} alt="" />
            <h3 onClick={() => { console.log(title) }}>{title}</h3>
        By <span>{author}</span>
            <button type="button" onClick={clickHandler}>Button</button>
            <button type="button" onClick={() => more(author)}>More</button>
        </article>)
}

ReactDom.render(<BookList />, document.getElementById("root"));