import { useState,createContext } from "react";
// asi se crea un context en react y se exporta para poder usarlo en cualquier componente
// no te olvides del value el contexprovider que por ahi vas a pasar states o funciones 

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        marca: "",
        year: "",
        plan: "",

    });

const handlerChangeDatos = (e) => {
   
    setDatos({
        ...datos,
        [e.target.name]: e.target.value,
    })
   
  }

  const [error,setError] = useState("");


    return (
        <CotizadorContext.Provider value={{
            // aqui van los states y funciones que vas a pasar a los componentes
            handlerChangeDatos,
            datos,
            setError,
            error
        }}>
        {children}
        </CotizadorContext.Provider>
    );
}
// export el provider para poder usarlo en cualquier componente 
export {
    CotizadorProvider
} 

// exporto el context para poder usarlo en cualquier componente 
export default CotizadorContext;