/**
 * @Author sn1p3r
 */
import {NextFunction, Request, Response} from 'express';

class TestRouteController {
    constructor() {
        this.run = this.run.bind(this);
    }

    public async run(req: Request, res: Response, next: NextFunction) {
        res.status(200).send('OK');
    }
}

export default new TestRouteController();
