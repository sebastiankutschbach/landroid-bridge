import { BaseRouter } from "./BaseRouter";
import { Request, Response, NextFunction } from "express";
import { LandroidDataset } from "./LandroidDataset";
import { LandroidS } from "./LandroidS";

class LandroidSRouter extends BaseRouter {
    protected init(): void {
        this.router.get("/status", this.status.bind(this));
        this.router.post("/start", this.startMower.bind(this));
        this.router.post("/stop", this.stopMower.bind(this));
        this.router.post("/pause", this.pauseMower.bind(this));
        this.router.put("/set/rainDelay/:value", this.setRainDelay.bind(this));
        this.router.put("/set/timeExtension/:value", this.setTimeExtension.bind(this));
        this.router.put("/set/schedule/:weekday", this.setSchedule.bind(this));
        this.router.post("/poll", this.poll.bind(this));
    }

    private status(req: Request, res: Response, next: NextFunction): void {
        let latestUpdate: LandroidDataset = LandroidS.getInstance().getLatestUpdate();
        if (latestUpdate) {
            res.status(200).send(latestUpdate.serialize());
        } else {
            this.internalServerError(res);
        }
    }

    private startMower(req: Request, res: Response, next: NextFunction): void {
        LandroidS.getInstance().startMower();
        this.ok(res);
    }

    private stopMower(req: Request, res: Response, next: NextFunction): void {
        LandroidS.getInstance().stopMower();
        this.ok(res);
    }

    private pauseMower(req: Request, res: Response, next: NextFunction): void {
        LandroidS.getInstance().pauseMower();
        this.ok(res);
    }

    private setRainDelay(req: Request, res: Response, next: NextFunction): void {
        let value = req.params.value;
        try {
<<<<<<< HEAD
            LandroidS.getInstance().setRainDelay(+value);
=======
            LandroidS.getInstance().setRainDelay(parseInt(value, 10));
>>>>>>> 4bca4b3887f3f32cab270a501114540a36481cc5
            this.ok(res);
        } catch (e) {
            this.badRequest(res, e.message);
        }
    }

    private setTimeExtension(req: Request, res: Response, next: NextFunction): void {
        let value = req.params.value;
        try {
<<<<<<< HEAD
            LandroidS.getInstance().setTimeExtension(+value);
=======
            LandroidS.getInstance().setTimeExtension(parseInt(value, 10));
>>>>>>> 4bca4b3887f3f32cab270a501114540a36481cc5
            this.ok(res);
        } catch (e) {
            this.badRequest(res, e.message);
        }
    }

    private setSchedule(req: Request, res: Response, next: NextFunction): void {
        let weekday = req.params.weekday;
        let payload = req.body;
        try {
<<<<<<< HEAD
            LandroidS.getInstance().setSchedule(+weekday, payload);
=======
            LandroidS.getInstance().setSchedule(parseInt(weekday, 10), payload);
>>>>>>> 4bca4b3887f3f32cab270a501114540a36481cc5
            this.ok(res);
        } catch (e) {
            this.badRequest(res, e.message);
        }
    }

    private poll(req: Request, res: Response, next: NextFunction): void {
        LandroidS.getInstance().poll();
        this.ok(res);
    }
}

export default new LandroidSRouter().router;

