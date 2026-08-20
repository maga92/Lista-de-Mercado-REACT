import React from 'react' // rafce  


const ItemLista = ({ itemLista, listaMercado, setlistaMercado }) => {
    console.log(itemLista);

  const removerItem =  () => {
     const novaLista  = [...listaMercado];
      const novaListaOk =  listaMercado.filter((itemAtual) => itemAtual !== itemLista);
       setlistaMercado(novaListaOk); // Rerenderiza os componentes 
    };


  return (
    <li className='flex justify-between gap-2' >
 <p>{itemLista}</p>
 <button className="rounded-md bg-red-800 text-white px-2 py-1 cursor-pointer hover:bg-red-700 transition"
  onClick={() =>removerItem()}>
    Remover
    </button>
  </li>
  )
}  

export default ItemLista