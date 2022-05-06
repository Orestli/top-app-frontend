import { useState } from 'react';
import { withLayout } from '../layout';
import { GetStaticProps, NextPage } from 'next';
import { MenuItem } from '../interfaces/menu.interface';
import { Htag, Rating, Tag, P, Input, Textarea, Button } from '../components';
import { topPageApi } from '../utils/api/topPage';

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

const Home: NextPage<HomeProps> = ({ menu }) => {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Hello, World!</Htag>
      <Button appearance="primary" arrow="right">
        Click on me!
      </Button>
      <Button appearance="ghost" arrow="down">
        Click on me!
      </Button>

      <P size="l">Большой</P>
      <P>Средний</P>
      <P size="s">Маленький</P>

      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag size="s" color="green">
        Green
      </Tag>
      <Tag color="primary">Primary</Tag>

      <Rating rating={rating} setRating={setRating} isEditable />
      <Input placeholder="Test" />
      <Textarea placeholder="Test" />
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const menu = await topPageApi.find(firstCategory);

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};
