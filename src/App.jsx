import data from './data'
import { useState } from 'react'
import SingleQuestion from './Question'

import './App.css'

function App() {
  const [questions,setquestions] = useState(data);

  return (
    <>
      <main>
        <div className="container">
          <h3>questions and answers about login</h3>
          <section className="info">
            {
            questions.map((question)=>{
              return <SingleQuestion key={question.id} {...question} />
            })
          }
          </section>
        </div>
      </main>
    </>
  )
}

export default App
