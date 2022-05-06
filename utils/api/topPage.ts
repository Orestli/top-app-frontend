import { instance } from './index';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopPageModel } from '../../interfaces/page.interface';

export const topPageApi = {
  async find(category: number = 0) {
    const { data } = await instance.post<MenuItem[]>('/api/top-page/find', {
      firstCategory: category,
    });
    return data;
  },
  async byAlias(alias: string | string[] | undefined) {
    const { data } = await instance.get<TopPageModel>(
      `/api/top-page/byAlias/${alias}`
    );
    return data;
  },
};
