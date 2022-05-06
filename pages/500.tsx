import { NextPage } from 'next';
import { withLayout } from '../layout';
import { Htag } from '../components';

const Error500: NextPage = () => {
  return <Htag tag="h1">Ошибка 500</Htag>;
};

export default withLayout(Error500);
