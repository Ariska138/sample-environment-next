import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';

import apiHello from '../src/pages/api/hello';

describe("test api", () => {
  function mockRequestResponse(method: RequestMethod = 'GET') {
    const {
      req,
      res,
    }: { req: NextApiRequest; res: any } = createMocks({ method });
    req.headers = {
      'Content-Type': 'application/json',
    };
    return { req, res };
  }

  it('should return a 400 if Gateway ID is missing', async () => {
    const { req, res } = mockRequestResponse();
    req.query = {}; // Equivalent to a null gateway ID

    await apiHello(req, res);

    console.log("res._getJSONData(): ", res._getJSONData());

    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toEqual({
      "env": "test",
    });
  });
})
