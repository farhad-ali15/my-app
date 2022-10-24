

function Header({person}){

  console.log()
    return(
      <header>
      <p>
        {person.name}
      </p>
      <p>
        {person.age}
      </p>
      <p>
        {person.salary}
      </p>
      
    </header>
    )
  }
export default Header; 