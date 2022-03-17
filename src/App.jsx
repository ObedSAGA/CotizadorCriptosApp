import {useState, useEffect} from 'react'
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import ImageCripto from './img/imagen-criptos.png'; 
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`
const Heading = styled.h1`
  font-family: 'Lato', Sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`
function App() {

  const [coins, setCoins] = useState({})
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (Object.keys(coins).length > 0) {

      const cotizarCripto = async () => {
        setLoading(true)
        setResult({})

        const {moneda, criptomoneda} = coins;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const response = await fetch(url)
        const json = await response.json()

        setResult(json.DISPLAY[criptomoneda][moneda])

        setLoading(false)
      }
      cotizarCripto()
    }
  }, [coins]);

  return (
    <Container>
      <Image
        src={ImageCripto}
        alt='ImageCripto'
      />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario
          setCoins={setCoins}
        />
        {loading && <Spinner/>}
        {result.PRICE && <Resultado result={result}/>}
        
      </div>
    </Container>
  )
}

export default App
