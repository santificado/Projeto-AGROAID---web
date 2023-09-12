'use client'
import Logo from './../assets/logo.png'
import Image from "next/image";
import './style.css'
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const [state, setState] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");

  const createNewUser = () => {
    // Simule o cadastro exibindo os dados no console.log
    console.log("Cadastro realizado com sucesso:");
    console.log("Nome:", name);
    console.log("E-mail:", email);
    console.log("Telefone:", number);
    console.log("Senha:", password);
  };

  const login = () => {

    console.log("Tentativa de login...");
    console.log("E-mail:", email);
    console.log("Senha:", password);


    console.log("Login bem-sucedido");
    router.push("/chatgpt");


  };

  const handleEmail = (event) => {
    let code = event.target.value;
    setEmail(code);
  };

  const handlePassword = (event) => {
    let code = event.target.value;
    setPassword(code);
  };

  const handleNumber = (event) => {
    let code = event.target.value;
    setNumber(code);
  };

  const handleName = (event) => {
    let code = event.target.value;
    setName(code);
  };

  const handleState = () => {
    setName("");
    setEmail("");
    setNumber("");
    setPassword("");
    setState(!state);
  };

  return (
    <> 
      {state ? 
        <div className="flex justify-center items-center">
          <Image src={Logo} alt="LOGO"/>

          <main className="bg-green-700 flex flex-col items-center justify-start gap-10 w-[600px] h-[600px] p-10 mt-10 rounded-lg ">
            <h1 className="text-white text-3xl font-semibold">CADASTRO</h1>

            <label className="switch">
              <input type="checkbox" onChange={() => { handleState() }}/>
              <span className="slider"></span>
            </label>

            <div className="flex flex-col items-start gap-3 w-full">
              <div className="flex flex-col w-full">
                <label className="text-xl text-white font-medium">Nome</label>
                <input
                  type="text"
                  className="bg-slate-600 text-white h-10 rounded-lg p-1 focus:outline outline-white"
                  placeholder="digite seu nome..."
                  id="nome"
                  onChange={handleName}
                  value={name}
                />
              </div>

              <div className="flex flex-col gap-1 w-full">
                <label className="text-xl text-white font-medium">E-mail</label>
                <input
                  type="text"
                  className="bg-slate-600 h-10 text-white rounded-lg p-1 focus:outline outline-white"
                  placeholder="digite seu e-mail..."
                  id="email"
                  onChange={handleEmail}
                  value={email}
                />
              </div>

              <div className="flex flex-col gap-1 w-full">   
                <label className="text-xl text-white font-medium">Telefone</label>
                <input
                  type="text"
                  className="bg-slate-600 h-10 text-white rounded-lg p-1 focus:outline outline-white"
                  placeholder="digite seu telefone..."
                  id="number"
                  onChange={handleNumber}
                  value={number}
                />
              </div> 

              <div className="flex flex-col gap-1 w-full">      
                <label className="text-xl text-white font-medium">Senha</label>
                <input
                  type="password"
                  className="bg-slate-600 h-10 text-white rounded-lg p-1 focus:outline outline-white"
                  placeholder="digite sua senha..."
                  id="password"
                  onChange={handlePassword}
                  value={password}
                />
              </div>

              <div className="flex items-center w-full justify-center">
                <button
                  className="bg-slate-200 text-black rounded-lg text-lg font-semibold p-1
                hover:bg-slate-100 hover:text-slate-500"
                  onClick={createNewUser}
                >
                  REGISTRAR
                </button>
              </div>
            </div>
          </main>
        </div>
        : 
        <div className="flex justify-center items-center">
          <Image src={Logo} />

          <main className="bg-green-700 flex flex-col items-center justify-start gap-10 w-[600px] h-[600px] p-10 mt-10 rounded-lg ">
            <h1 className="text-white text-3xl font-semibold">LOGIN</h1>

            <label className="switch">
              <input type="checkbox" onChange={() => handleState()}/>
              <span className="slider"></span>
            </label>

            <div className="flex flex-col items-start gap-10 w-full">

              <div className="flex flex-col gap-1 w-full">
                <label className="text-xl text-white font-medium">E-mail</label>
                <input
                  type="text"
                  className="bg-slate-600 h-10 text-white rounded-lg p-1 focus:outline outline-white"
                  placeholder="digite seu e-mail..."
                  onChange={handleEmail}
                  value={email}
                  id="email"
                />
              </div>

              <div className="flex flex-col gap-1 w-full">      
                <label className="text-xl text-white font-medium">Senha</label>
                <input
                  type="password"
                  className="bg-slate-600 h-10 text-white rounded-lg p-1 focus:outline outline-white"
                  placeholder="digite sua senha..."
                  id="password"
                  onChange={handlePassword}
                  value={password}
                />
              </div>

              <div className="flex items-center w-full justify-center mt-10">
                <button
                  className="bg-slate-200 text-black rounded-lg text-lg font-semibold p-1
                  hover:bg-slate-100 hover:text-slate-500 w-28"
                  onClick={login}
                >
                  LOGIN
                </button>
              </div>
            </div>
          </main>
        </div>
      }
    </>
  )
}
