import { Router, Request, Response, NextFunction } from "express";
import { IController } from "../../interfaces/icontroller.interface"
import { JobOpeningModel } from "./job.opening.model";
import { IResponse } from "../../interfaces/irequest.response.interface";
import { IJobOpeningRequest } from "./job.opening.types";

export class JobOpeninngController implements IController {
    public path: string = "/api/job-openings";
    public router: Router = Router();

    constructor() {

    }

    public async GetAllJobOpenings(_req: Request, res: Response, next: NextFunction) {
        let job_query = await JobOpeningModel.find()
            .populate({
                path: "organization",
                select: "_id organization_name"
            })
            .populate({
                path: "applicants",
                select: "_id fullname"
            })

        let response: IResponse = { success: true, message: "Job opening query successful", data: job_query };
        res.status(200).json(response);
        return next();
    }

    public async GetJobOpening(req: Request, res: Response, next: NextFunction) {
        if (!req.params.id) {
            let response: IResponse = { success: false, message: "Id required.", data: {} }
            res.status(400).json(response);
            return next();
        };

        let job_query = await JobOpeningModel.findById(req.params.id)
            .populate({
                path: "organization",
                select: "_id organization_name"
            })
            .populate({
                path: "job_openings",
                select: "job_requirements.job_title"
            })

        if (!job_query) {
            let response: IResponse = { success: false, message: "Job opening not found.", data: {} }
            res.status(404).json(response);
            return next();
        }

        let response: IResponse = { success: true, message: "Job opening query successful", data: job_query };
        res.status(200).json(response);
        return next();
    }

    public async CreateJobOpening(req: Request<{}, {}, IJobOpeningRequest>, res: Response, next: NextFunction) {
        let { job_requirements: { job_title } } = req.body;

        if (!job_title) {
            let response: IResponse = { success: false, message: "Job title is required.", data: {} }
            res.status(400).json(response);
            return next();
        }

       

        let job_mutation = await JobOpeningModel.create(req.body);

        let response: IResponse = { success: true, message: "Job opening creation successful", data: job_mutation };
        res.status(200).json(response);
        return next();
    }

    public async UpdateJobOpening(req: Request, res: Response, next: NextFunction) {
        if (!req.params.id) {
            let response: IResponse = { success: false, message: "Id required.", data: {} }
            res.status(400).json(response);
            return next();
        };

        let job_check = await JobOpeningModel.findById(req.params.id);
        if (!job_check) {
            let response: IResponse = { success: false, message: `Job opening not found.`, data: {} }
            res.status(404).json(response);
            return next();
        }

        let job_mutation = await JobOpeningModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

        let response: IResponse = { success: true, message: "Job opening update successful", data: job_mutation };
        res.status(200).json(response);
        return next();
    }

    public async DeleteJobOpening(req: Request, res: Response, next: NextFunction) {
        if (!req.params.id) {
            let response: IResponse = { success: false, message: "Id required.", data: {} }
            res.status(400).json(response);
            return next();
        };

        let job_check = await JobOpeningModel.findById(req.params.id);
        if (!job_check) {
            let response: IResponse = { success: false, message: `Job opening not found.`, data: {} }
            res.status(404).json(response);
            return next();
        }

        let job_mutation = await JobOpeningModel.findByIdAndDelete(req.params.id);

        let response: IResponse = { success: true, message: "Job opening delete successful", data: job_mutation };
        res.status(200).json(response);
        return next();
    }

}