import * as S from './style';
import * as C from './_components';

const Home = () => {
  return (
    <S.Container>
      <div>
        <C.Header />
        <C.SearchTable />
      </div>
      <C.Footer />
    </S.Container>
  );
};

export default Home;
