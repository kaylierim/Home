import reviews from "../reviews";
import ReviewCard from "./ReviewCard";
import Books from "../public/images/book-stack.png"
import Candle from "../public/images/candle.png"
import Cup from "../public/images/cup.png"

function App() {

  return (
    <>
      <h1>⋆｡°✩ Kaylie's Library ⋆｡°✩</h1>
      <div className="grid middle">
        <p>I have been an avid reader since junior year of high school. In 2023, I read 50 books and
        this year, my goal is 40 books. I read nonfiction, fantasy, romance, and literary fiction.

      </p>
      <p>This page serves as a curated space to document and share the books that leave a lasting impression on me. If
        you share my love for books, don't hesitate to reach out!</p>
      </div>
      
      
      {reviews.map((review, index) => {
        return <ReviewCard
          key={index}
          id={review.id}
          title={review.title}
          author={review.author}
          content={review.content}
          img={review.image} />
      })}
      <img src={Books} id='books'/>
      <img src={Candle} id='candle'/>
      <img src={Cup} id='cup'/>
    </>
  )
}

export default App;
