/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import baseUrl from '../config';

const server = setupServer(
  rest.get(`${baseUrl}/products/:productId`, (req, res, ctx) => {
    const { productId } = req.params;
    if (!productId || productId <= 0) {
      return res(ctx.status(404));
    }
    return res(ctx.json({
      id: 1,
      manufacturer: '메가테라',
      imagePath: '../resources/test.jpg',
      name: '테스트 아이템',
      description: '테스트용 아이템입니다.',
      pieces: 2,
      price: 10000,
    }));
  }),

  rest.get(`${baseUrl}/products`, (req, res, ctx) => (
    res(ctx.json({
      products: [{
        id: 1,
        manufacturer: '메가테라',
        imagePath: '../resources/test.jpg',
        name: '테스트 아이템',
        description: '테스트용 아이템입니다.',
        pieces: 2,
        price: 10000,
      }],
      productPages: [
        { productPage: 1 },
      ],
    }))
  )),

  rest.post(`${baseUrl}/orders`, async (req, res, ctx) => {
    const { id, orderCount, totalPrice } = await req.json();

    if (id <= 0 || orderCount <= 0 || totalPrice <= 0) {
      return res(
        ctx.status(400),
        ctx.json({
          code: 1002,
          message: '금액이 잘못되었습니다.',
        }),
      );
    }

    return res(ctx.status(200));
  }),
);

export default server;
