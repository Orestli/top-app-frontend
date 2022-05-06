import { instance } from './index';
import { IReviewForm } from '../../components';

export const reviewApi = {
  async createDemo(formData: IReviewForm, productId: string) {
    const { data } = await instance.post<{ message: string }>(
      '/api/review/create-demo',
      {
        ...formData,
        productId,
      }
    );
    return data;
  },
};
