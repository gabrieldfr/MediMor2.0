import { useState } from 'react'
import '../styles/login.scss'
function Login() {

    //Hook usestate
    const [usuario, setUsuario]= useState({
        usuario:"",
        senha:"",
    })

    //Função handleChange
    const handleChange = async (e)=>{
        const {name, value}=e.target;
        setUsuario({...usuario,[name]:value})
    }

    //Função handleSubmit
    const handleSubmit = async (e)=>{
        e.preventDefault();

        let user;

        try{
            const response = await fetch("http://localhost:5000/usuarios");
            if(response.ok){
                const users = await response.json();

                for(let i=0; i < users.length; i++){
                    const use = users[i];
                    user = use;
                    if(use.usuario === usuario.usuario && use.senha === usuario.senha){
                        user = use;
                        break;
                    }
                }
            }
            if(user){
                sessionStorage.setItem('usuarioLogado', JSON.stringify(user));

                setTimeout(()=>{
                    window.location='/';
                },1000)
            }else{
                alert("Usuário/senha inválidos!")
                    setUsuario({
                        usuario:"",
                        senha:"",
                    })
                    window.location = "/login";
            }
        }
        catch(error){
            console.log(error)
        }
    }

  return (
    <>
    <figure>
        <img src="../public/background2.jpg" alt="" />
        <figcaption>    
            <img className='logo' src="../public/logo2.png" alt="" />
            <h1 className='titulo'>Login</h1>
        </figcaption>
    </figure>

    <div className='form'>
        <form onSubmit={handleSubmit}>
            <div className='usuario'>
                <label htmlFor="idUsuario">Usuário</label> <br />
                <input 
                type="text"
                name="usuario"
                value={usuario.usuario}
                onChange={handleChange}
                placeholder="Digite seu usuário" 
                />
            </div>

            <div>
                <label htmlFor="idSenha">Senha</label> <br />
                <input 
                type="password"
                name="senha"
                value={usuario.senha}
                onChange={handleChange}
                placeholder="Digite sua senha" 
                />
            </div>
            <div className='formButton'>
                <button type="submit">Logar</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Login