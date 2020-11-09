import React from 'react'

const Book = (props) => {
    const { img, title, author } = props.book

    // attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert('Hello World')
    }
    const complex = (author) => {
        console.log(author);
    }
    return <article className='book' onMouseOver={() => {
        console.log(title);
    }}>
        <img src={img} alt="" />
        <h1>{title}</h1>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}>Example</button>
        <button type="button" onClick={() => complex(author)}>Another Example</button>

    </article>
}

export default Book