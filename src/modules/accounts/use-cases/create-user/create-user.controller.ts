import { Request, Response } from "express";
import { CreateUserUseCase } from "./create-user.use-case";

export class CreateUserController {

    constructor(private createUserUseCase: CreateUserUseCase) { }

    handle(request: Request, response: Response) {

        const { name, email, password } = request.body;

        this.createUserUseCase.execute({ name, email, password })

        return response.status(201).send();
    }
}