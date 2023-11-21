import { useState, useEffect } from 'react'

function Home() {

  const [userLogado] = useState(JSON.parse(sessionStorage.getItem("usuarioLogado")))


  const handleLogout = ()=>{
      sessionStorage.removeItem("usuarioLogado")
      window.location.reload();
  }
///////////////////////////////////////////////////


  return (
    <>
    <div style={userLogado == null ? {display:"none"}: {display:"block"}}>
      <p>{userLogado != null ? `Usuário logado:${userLogado.usuario}`:""}</p>
      <button id='logout' onClick={handleLogout}>Logout</button>
    </div>
    <h1>
        Home
    </h1>
    </>
  )
}

export default Home