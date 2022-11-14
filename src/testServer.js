/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import baseUrl from '../config';

const server = setupServer(
  rest.get(`${baseUrl}/products`, (req, res, ctx) => (
    res(ctx.json({
      products: [{
        id: 1,
        manufacturer: '메가테라',
        imagePath: '../resources/test.jpg',
        name: '테스트 아이템',
        description: '테스트용 아이템입니다.',
        price: 10000,
      }],
      productPages: [
        { productPage: 1 },
      ],
    }))
  )),
);

export default server;
