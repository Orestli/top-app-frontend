import { instance } from './index';
import { ProductModel } from '../../interfaces/product.interface';

export const productApi = {
  async find(category: string, limit: number = 10) {
    const { data } = await instance.post<ProductModel[]>('/api/product/find/', {
      category,
      limit,
    });
    return data;
  },
};
