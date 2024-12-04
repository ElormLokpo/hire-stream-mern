import { NextFunction, Request, Response, Router } from "express";
import { IController } from "../../interfaces/icontroller.interface";
import { IAuth, IAuthLoginRequest, IAuthRegisterRequest, IRefreshTokenRequest } from "./auth.types";
import { IResponse } from "../../interfaces/irequest.response.interface";
import { AuthModel } from "./auth.model";
import { ComparePassword, HashPassword } from "../../utils/bcrypt.helper";
import { GenerateTokens, VerifyRefreshToken } from "../../utils/token.gen";

export class AuthController implements IController {
    public path: string = "/api/auth";
    public router: Router = Router();

    constructor() {
        this.router.post(`${this.path}/register`, this.RegisterUser);
        this.router.post(`${this.path}/login`, this.LoginUser);
        this.router.patch(`${this.path}/update/:id`, this.UpdateUser)
        this.router.delete(`${this.path}/delete/:id`, this.DeleteUser)
        this.router.post(`${this.path}/refresh-token`, this.RefreshToken);
        this.router.get(`${this.path}/users/all`, this.GetAllUsers)
        this.router.get(`${this.path}/user/:id`, this.GetUser)
    }


    private async RegisterUser(req: Request<{}, {}, IAuthRegisterRequest>, res: Response, next: NextFunction) {
        let { fullname, email, password } = req.body;

        if (!fullname || !email || !password) {
            let response: IResponse = { success: false, message: "Fullname, email and password are required", data: {} }
            res.status(400).json(response);
            next();
        };

        let userByEmail = await AuthModel.findOne({ email });
        if (userByEmail) {
            let response: IResponse = { success: false, message: `User with email:${email} already exists`, data: {} }
            res.status(409).json(response);
            next();
        } else {
            req.body.password = await HashPassword(password);
            let createdUser = await AuthModel.create(req.body);

            let tokens = await GenerateTokens({ id: createdUser._id });
            let response: IResponse = {
                success: true, message: `User account created successfully`, data: {
                    userid: createdUser._id,
                    fullname: createdUser.fullname,
                    email: createdUser.email,
                    role: createdUser.role,
                    tokens
                }
            }
            res.status(201).json(response);
            next();
        }



    }

    private async LoginUser(req: Request<{}, {}, IAuthLoginRequest>, res: Response, next: NextFunction) {
        let { email, password } = req.body;

        if (!email || !password) {
            let response: IResponse = { success: false, message: "Email and password are required", data: {} }
            res.status(400).json(response);
            next();
        } else {
            let userByEmail = await AuthModel.findOne({ email }).select("+password");
            if (!userByEmail) {
                let response: IResponse = { success: false, message: `User with email:${email} does not exist`, data: {} }
                res.status(404).json(response);
                next();
            } else {
                let password_valid = await ComparePassword(userByEmail.password, password);

                if (!password_valid) {
                    let response: IResponse = { success: false, message: `Incorrect password`, data: {} }
                    res.status(401).json(response);
                    next();
                }else{
                    let tokens = await GenerateTokens({ id: userByEmail._id });
                    let response: IResponse = {
                        success: true, message: `User login successful`, data: {
                            userid: userByEmail._id,
                            fullname: userByEmail.fullname,
                            email: userByEmail.email,
                            role: userByEmail.role,
                            tokens
                        }
                    }
                    res.status(200).json(response);
                    next();
                }

              
            }


        }



    }

    private async RefreshToken(req: Request<{}, {}, IRefreshTokenRequest>, res: Response, next: NextFunction) {
        let { refresh_token } = req.body;

        if (!refresh_token) {
            let response: IResponse = { success: false, message: "Refresh token is required", data: {} }
            res.status(400).json(response);
            next();
        };

        let token_content = await VerifyRefreshToken(refresh_token)
        let new_tokens = await GenerateTokens({ id: token_content });

        let response: IResponse = { success: true, message: `Tokens generated successfully`, data: { new_tokens } }
        res.status(201).json(response);
        next();

    }

    private async GetAllUsers(req: Request, res: Response, next: NextFunction) {
        let userQuery = await AuthModel.find();

        let response: IResponse = { success: true, message: `User query successful`, data: userQuery }
        res.status(201).json(response);
        next();

    }

    private async GetUser(req: Request, res: Response, next: NextFunction) {

        if (!req.params.id) {
            let response: IResponse = { success: false, message: "Id required.", data: {} }
            res.status(400).json(response);
            next();
        };

        let userQuery = await AuthModel.findById(req.params.id);

        let response: IResponse = { success: true, message: `User query successful`, data: userQuery }
        res.status(201).json(response);
        next();

    }

    private async UpdateUser(req: Request, res: Response, next: NextFunction) {
        if (!req.params.id) {
            let response: IResponse = { success: false, message: "Id required.", data: {} }
            res.status(400).json(response);
            next();
        };

        let userQuery = await AuthModel.findById(req.params.id);
        if (!userQuery) {
            let response: IResponse = { success: false, message: `User does not exist`, data: {} }
            res.status(404).json(response);
            next();
        }

        let userMutation = await AuthModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        let response: IResponse = { success: true, message: `User update successful`, data: userMutation }
        res.status(201).json(response);
        next();

    }

    private async DeleteUser(req: Request, res: Response, next: NextFunction) {
        if (!req.params.id) {
            let response: IResponse = { success: false, message: "Id required.", data: {} }
            res.status(400).json(response);
            next();
        };

        let userQuery = await AuthModel.findById(req.params.id);
        if (!userQuery) {
            let response: IResponse = { success: false, message: `User does not exist`, data: {} }
            res.status(404).json(response);
            next();
        }

        let userMutation = await AuthModel.findByIdAndDelete(req.params.id);
        let response: IResponse = { success: true, message: `User deleted successfully`, data: userMutation }
        res.status(201).json(response);
        next();

    }




}
