

function Header({name,title}) {
    return (
      <div className="App" style={{background:'red',padding:20,width:400}}>
          <h1>{title}</h1>
          <h1>{name}</h1>
          <p>This is header components </p>
      </div>
    );
  }

  export default Header;