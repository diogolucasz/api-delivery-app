import { Router } from 'express';
import { createUserController } from '../modules/accounts/use-cases/create-user';


export const accountsRoutes = Router();

accountsRoutes.post("/", (request, response) => {
    return createUserController.handle(request, response)
});

// usersRoutes.post("/permissions", (request, response) => {
//     return createPermissionController().handle(request, response)
// });

// usersRoutes.post("/roles", (request, response) => {
//     return createRouteController().handle(request, response)
// });

// usersRoutes.post("/assignRole", (request, response) => {
//     return assignRole().handle(request, response)
// });

// usersRoutes.get("/me", ensureAuthenticated, (request, response) => {
//     return getUserInfoController().handle(request, response)
// });

// usersRoutes.get("/profile",( request, response) => {
//     return getUserProfileUseCase().handle(request, response)
// })