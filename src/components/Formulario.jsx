import {useEffect, useState} from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../Hooks/useSelectMonedas";
import {monedas} from '../data/monedas'
import Error from "./Error";


const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = ({setCoins}) => {

  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)
 
  const [moneda, SelectMonedas] = useSelectMonedas("Elige una moneda", monedas);
  const [criptomoneda, SelectCriptos] = useSelectMonedas("Elige una criptomoneda", criptos);

  useEffect(() => {
      const getAPI = async () => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
        const response = await fetch(url)
        const result = await response.json()

        const arrayCriptos = result.Data.map(cripto => {
            const object = {
              id: cripto.CoinInfo.Name,
              name: cripto.CoinInfo.FullName,
            }
            return object
        })
        setCriptos(arrayCriptos)
      }
      getAPI()
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([moneda, criptomoneda].includes('')) {
      setError(true)
      return
    }

    setError(false)
    setCoins({moneda, criptomoneda})
  }

  return (
    <>
    {error && <Error>Todos los campos son obligatorios</Error>}
    <form
        onSubmit={handleSubmit}
    >
      <SelectMonedas />
      <SelectCriptos />
      <InputSubmit type="submit" value="cotizar" />
    </form>
    </>
  );
};

export default Formulario;
