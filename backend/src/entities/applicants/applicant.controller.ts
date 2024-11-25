import { Router, Request, Response, NextFunction } from "express";
import { IController } from "../../interfaces/icontroller.interface"
import { ApplicantModel } from "./applicant.model";
import { IResponse } from "../../interfaces/irequest.response.interface";
import { IApplicantRequest } from "./applicant.types";

export class applicantOpeninngController implements IController {
    public path: string = "/api/applicants";
    public router: Router = Router();

    constructor() {
        this.router.get(`${this.path}/all`, this.GetAllApplicants)
        this.router.get(`${this.path}/:id`, this.GetApplicant)
        this.router.post(`${this.path}/add`, this.CreateApplicant)
        this.router.patch(`${this.path}/update/:id`, this.UpdateApplicant)
        this.router.delete(`${this.path}/delete/:id`, this.DeleteApplicant)
    }

    public async GetAllApplicants(_req: Request, res: Response, next: NextFunction) {
        let applicant_query = await ApplicantModel.find()
            .populate({
                path: "job_opening",
                select: "_id job_requirements.job_title"
            })

        let response: IResponse = { success: true, message: "applicant  query successful", data: applicant_query };
        res.status(200).json(response);
        next();
    }

    public async GetApplicant(req: Request, res: Response, next: NextFunction) {
        if (!req.params.id) {
            let response: IResponse = { success: false, message: "Id required.", data: {} }
            res.status(400).json(response);
            next();
        };

        let applicant_query = await ApplicantModel.findById(req.params.id)
            .populate({
                path: "job_opening",
                select: "_id job_requirements.job_title"
            })

        if (!applicant_query) {
            let response: IResponse = { success: false, message: "applicant  not found.", data: {} }
            res.status(404).json(response);
            next();
        }

        let response: IResponse = { success: true, message: "applicant  query successful", data: applicant_query };
        res.status(200).json(response);
        next();
    }

    public async CreateApplicant(req: Request<{}, {}, IApplicantRequest>, res: Response, next: NextFunction) {
        let { fullname } = req.body;

        if (!fullname) {
            let response: IResponse = { success: false, message: "applicant fullname is required.", data: {} }
            res.status(400).json(response);
            next();
        }

        let applicant_mutation = await ApplicantModel.create(req.body);

        let response: IResponse = { success: true, message: "applicant  creation successful", data: applicant_mutation };
        res.status(200).json(response);
        next();
    }

    public async UpdateApplicant(req: Request, res: Response, next: NextFunction) {
        if (!req.params.id) {
            let response: IResponse = { success: false, message: "Id required.", data: {} }
            res.status(400).json(response);
            next();
        };

        let applicant_check = await ApplicantModel.findById(req.params.id);
        if (!applicant_check) {
            let response: IResponse = { success: false, message: `applicant  not found.`, data: {} }
            res.status(404).json(response);
            next();
        }

        let applicant_mutation = await ApplicantModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

        let response: IResponse = { success: true, message: "applicant  update successful", data: applicant_mutation };
        res.status(200).json(response);
        next();
    }

    public async DeleteApplicant(req: Request, res: Response, next: NextFunction) {
        if (!req.params.id) {
            let response: IResponse = { success: false, message: "Id required.", data: {} }
            res.status(400).json(response);
            next();
        };

        let applicant_check = await ApplicantModel.findById(req.params.id);
        if (!applicant_check) {
            let response: IResponse = { success: false, message: `applicant  not found.`, data: {} }
            res.status(404).json(response);
            next();
        }

        let applicant_mutation = await ApplicantModel.findByIdAndDelete(req.params.id);

        let response: IResponse = { success: true, message: "applicant  delete successful", data: applicant_mutation };
        res.status(200).json(response);
        next();
    }

}