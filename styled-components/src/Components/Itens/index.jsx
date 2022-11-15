import styled from 'styled-components';

const Container = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  font-size: 12px;
`

const ItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Item = ({type, from, value}) => {
  return (
    <ItemStyle>
      <span>{type}</span>
      <span>{from}</span>
      <span>{value}</span>
    </ItemStyle>
  )
}

const Itens = ({item}) => {
  return (
    <Container>
      <Item type={item.type} from={item.from} value={item.value} />
    </Container>
  )
}

export default Itens
