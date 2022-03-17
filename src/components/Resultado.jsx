import styled from "@emotion/styled";


const Container = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;

`
const Image = styled.img`
    display: block;
    width: 120px;

`

const Text = styled.p`
     font-size: 18px;
    span {
        font-weight: 700;
    }

`
const Price = styled.p`
    font-size: 30px;
    span {
        font-weight: 700;
    }
`
const Resultado = ({ result }) => {
    const { 
        PRICE, 
        HIGHDAY, 
        LOWDAY, 
        CHANGEPCT24HOUR, 
        IMAGEURL,
        LASTUPDATE, 
    } = result;
  return (
    <Container>
      <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt='Cripto Currency'/>
      <div>
        <Price>El precio actual es de: <span>{PRICE}</span></Price>
        <Text>Precio máximo del día: <span>{HIGHDAY}</span></Text>
        <Text>Precio mínimo del día: <span>{LOWDAY}</span></Text>
        <Text>Variación en las últimas 24h: <span>{CHANGEPCT24HOUR}%</span></Text>
        <Text>Última actualización: <span>{LASTUPDATE}</span></Text>
      </div>
    </Container>
  );
};

export default Resultado;
