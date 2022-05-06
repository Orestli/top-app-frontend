import { NextPage } from 'next';
import { withLayout } from '../layout';
import { Htag } from '../components';

export const Error404: NextPage = () => {
  return <Htag tag="h1">Ошибка 404</Htag>;
};

export default withLayout(Error404);
