import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import { books } from './books'
import Book from './Book'

// JSX rules:
// return single element
// div / section / article or Fragment
// use camelCase for html attributes
// className instead of class
// close every element
// formatting

// setup variables


// React knows this is a component cause it begings with a capital letter
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <Book key={book.id} book={book}></Book>
        );
      })}
    </section>
  );
}


ReactDom.render(<BookList />, document.getElementById('root'))