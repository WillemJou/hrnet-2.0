import './error.css'

export function ErrorPage() {
  return (
    <div className="error-container">
      <h1 className="error-title">Erreur 404</h1>
      <span className="error-text">La requête réseau n'a pas été trouvé.</span>
    </div>
  )
}
