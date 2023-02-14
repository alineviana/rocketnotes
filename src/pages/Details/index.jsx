import { Container, Links, Content } from './styles';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';

export function Details() {
  
  return(
    <Container>
      <Header/>

      <main>
        <Content>     
          <ButtonText title="Excluir Nota"/>

          <h1>Introdução ao React</h1>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis rerum, 
            praesentium obcaecati dolor amet aliquam laboriosam similique accusamus odit 
            ratione provident nisi dolorum alias vitae quo dolore sit consequatur asperiores.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis rerum, 
            praesentium obcaecati dolor amet aliquam laboriosam similique accusamus odit 
            ratione provident nisi dolorum alias vitae quo dolore sit consequatur asperiores.
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
          </Section>

          <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  );
}