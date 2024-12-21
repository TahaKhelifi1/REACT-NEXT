import styles from '../styles/Home.module.css'
import styled from 'styled-components'
export default function Home() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <Container>
            <Title>Welcome to My Portfolio</Title>
        </Container>
    </div>
  )
}

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;
