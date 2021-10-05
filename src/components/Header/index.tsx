
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'


interface HeaderProps{
  //tipando funcao adivinda de props
  OnOpenNewTransaction: () => void;
}

export function Header({OnOpenNewTransaction} : HeaderProps) {


  return (
    <Container>

      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={OnOpenNewTransaction}>
          Nova transação
        </button>


      </Content>

    </Container>
  )
}