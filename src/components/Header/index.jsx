import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <Link to="/">Acceuil</Link>
      <Link to="/survey/3">Questionnaire</Link>
      <Link to="/freelances">Freelances</Link>
    </nav>
  )
}

export default Header
