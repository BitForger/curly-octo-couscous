/**
 * @Author sn1p3r
 */
import * as express from 'express';
import {Request, Response} from 'express';
import TestRouteController from './controllers/TestRouteController';

export class AppRouter {
    protected router: express.Router;
    constructor() {
    }

    public defaultRoute(req: Request, res: Response) {
        res.status(401).send({unauthorized: true});
    }

    public paths(router: express.Router) {
        router.post('/test', TestRouteController.run);

        router.use('*', (req, res) => {
           this.defaultRoute(req, res);
        });
    }
}
