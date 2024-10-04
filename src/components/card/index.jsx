import "./styles.scss"

export function Card({ nome, url }){
  return (
    <div className="card-canal">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIgpyMly_IOd5Q4weVVaD1n-cI-0l9-Pi6TA&s" className="logo-sbt"/>
        <h2>{nome}</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt minima obcaecati alias? Itaque vel autem voluptas impedit, deleniti animi doloribus iste vero deserunt, debitis voluptatem aperiam quia, repellendus sunt voluptate.</p>
    </div>
  )
}