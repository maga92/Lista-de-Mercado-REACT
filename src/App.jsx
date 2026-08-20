import { useRef, useState } from "react";
import ItemLista from "./ItemLista";

function App() {


  // Hook e useState(Cria var de estado)
  // UseState não retorna uma informação - retorna array
  // UseRef - cria uma referência dentro de uma var

const [listaMercado, setlistaMercado] = useState([]); // Variável de estado

const inputAdicionar = useRef();

  const adiconarElemento = () => {
    const novaLista = [...listaMercado]; //Pega uma cópia da listaMercado

    const valorInput = inputAdicionar.current.value;
     
    if(valorInput !== '') // Ou só 'if(valorInput)'
    {
    novaLista.push(valorInput);
     setlistaMercado(novaLista)

    inputAdicionar.current.value = "";
    }

  }

  return (
    <div className="w-full max-w-96 flex flex-col items-center gap-4">
  <h1 className="text-3xl font-bold">Lista de mercado</h1>
    <div className="w-full flex gap-2"> 
    <input className="w-full border border-gray-600 rounded-md px-2 py-1" 
    ref={inputAdicionar} 
    type="text" 
    placeholder="Digite um item"/> 
    {/* Linkou o input a variável inputAdicionar */}
    <button className="rounded-md bg-gray-800 text-white px-2 py-1 cursor-pointer hover:bg-gray-600 transition"
     onClick={() => adiconarElemento()}>
      Adicionar
      </button>
    </div>


   {
   listaMercado.length > 0 ? (
  <ul className="flex w-full flex-col gap-2">
    {listaMercado.map((itemLista, index) => (
      <ItemLista key={index} 
      itemLista={itemLista} 
       listaMercado={listaMercado} 
        setlistaMercado={setlistaMercado}
        
        />
    ))}
  </ul>
   ) : (
    <p>Você não tem nenhum item na sua lista</p>
)

}

  </div>
  );

  
}

export default App
