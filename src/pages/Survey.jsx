import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <br />
      <Link to="/">Precedent</Link>
      <Link to="/survey/42">Suivant</Link>
    </div>
  )
}

export default Survey
