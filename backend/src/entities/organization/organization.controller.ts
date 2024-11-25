import { NextFunction, Request, Response, Router } from "express";
import { IController } from "../../interfaces/icontroller.interface";
import { OrganizationModel } from "./organization.mdoel";
import { IResponse } from "../../interfaces/irequest.response.interface";
import { IOrganizationRequest } from "./organization.types";

export class OrganizationController implements IController {
    public path: string = "/api/organization";
    public router: Router = Router();

    constructor() {
        this.router.get(`${this.path}/all`, this.GetAllOrganizations);
        this.router.get(`${this.path}/:id`, this.GetOrganization);
        this.router.post(`${this.path}/add`, this.CreateOrganization);
        this.router.patch(`${this.path}/update/:id`, this.UpdateOrganization);
        this.router.delete(`${this.path}/delete/:id`, this.DeleteOrganization);

    }

    public async GetAllOrganizations(_req: Request, res: Response, next: NextFunction) {
        let org_query = await OrganizationModel.find()
            .populate({
                path: "owner",
                select: "_id fullname"
            })
            .populate({
                path: "job_openings",
                select: "_id job_requirements.job_title"
            })


        let response: IResponse = { success: true, message: "Organization query successful", data: org_query };
        res.status(200).json(response);
        next();
    }

    public async GetOrganization(req: Request, res: Response, next: NextFunction) {
        if (!req.params.id) {
            let response: IResponse = { success: false, message: "Id required.", data: {} }
            res.status(400).json(response);
            next();
        };

        let org_query = await OrganizationModel.findById(req.params.id)
            .populate({
                path: "owner",
                select: "_id fullname"
            })
            .populate({
                path: "job_openings",
                select: "_id job_requirements.job_title"
            })

        if (!org_query) {
            let response: IResponse = { success: false, message: "Organization not found.", data: {} }
            res.status(404).json(response);
            next();
        }

        let response: IResponse = { success: true, message: "Organization query successful", data: org_query };
        res.status(200).json(response);
        next();
    }

    public async CreateOrganization(req: Request<{}, {}, IOrganizationRequest>, res: Response, next: NextFunction) {
        let { organization_name } = req.body;

        if (!organization_name) {
            let response: IResponse = { success: false, message: "Organization name is required.", data: {} }
            res.status(400).json(response);
            next();
        }

        let org_check = await OrganizationModel.findOne({ organization_name });
        if (org_check) {
            let response: IResponse = { success: false, message: `Organization with name:${organization_name} already exists.`, data: {} }
            res.status(409).json(response);
            next();
        }

        let org_mutation = await OrganizationModel.create(req.body);

        let response: IResponse = { success: true, message: "Organization creation successful", data: org_mutation };
        res.status(200).json(response);
        next();
    }

    public async UpdateOrganization(req: Request, res: Response, next: NextFunction) {
        if (!req.params.id) {
            let response: IResponse = { success: false, message: "Id required.", data: {} }
            res.status(400).json(response);
            next();
        };

        let org_check = await OrganizationModel.findById(req.params.id);
        if (!org_check) {
            let response: IResponse = { success: false, message: `Organization not found.`, data: {} }
            res.status(404).json(response);
            next();
        }

        let org_mutation = await OrganizationModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

        let response: IResponse = { success: true, message: "Organization update successful", data: org_mutation };
        res.status(200).json(response);
        next();
    }

    public async DeleteOrganization(req: Request, res: Response, next: NextFunction) {
        if (!req.params.id) {
            let response: IResponse = { success: false, message: "Id required.", data: {} }
            res.status(400).json(response);
            next();
        };

        let org_check = await OrganizationModel.findById(req.params.id);
        if (!org_check) {
            let response: IResponse = { success: false, message: `Organization not found.`, data: {} }
            res.status(404).json(response);
            next();
        }

        let org_mutation = await OrganizationModel.findByIdAndDelete(req.params.id);

        let response: IResponse = { success: true, message: "Organization delete successful", data: org_mutation };
        res.status(200).json(response);
        next();
    }



}