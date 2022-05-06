import React from 'react';
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from 'next';
import { withLayout } from '../../layout';
import { firstLevelMenu } from '../../utils/helpers';
import { ParsedUrlQuery } from 'querystring';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { topPageApi } from '../../utils/api/topPage';

interface TypePageProps {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
}

const TypePage: NextPage<TypePageProps> = ({ firstCategory }) => {
  return <div>Type: {firstCategory}</div>;
};

export default withLayout(TypePage);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((m) => `/${m.route}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<TypePageProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  const menu = await topPageApi.find(firstCategoryItem.id);

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};
