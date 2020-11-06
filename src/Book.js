import React from 'react'

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
export default Book
