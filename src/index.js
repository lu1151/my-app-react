import React from "react";
import ReactDom from "react-dom";
import "./index.css"

import { data } from "./books"
import Bok from "./Book"
import { greeting } from "./testing/testing"

function BookList() {
    console.log(greeting);
    return (
        <section className="booklist">
            {data.map((book) => {
                return <Bok key={book.id} {...book}></Bok>;
            })}
        </section>
    );
}

ReactDom.render(<BookList />, document.getElementById("root"));