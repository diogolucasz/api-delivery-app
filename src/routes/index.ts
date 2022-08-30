import { Router } from "express";
import { accountsRoutes } from "./accounts.routes";
// import { coursesRoutes } from "./courses.routes";
// import { postsRoutes } from "./posts.routes";
// import { sessionsRoutes } from "./sessions.routes";
// import { usersRoutes } from "./users.routes";

export const router = Router();

router.use("/accounts", accountsRoutes);
// routes.use("/courses", coursesRoutes);
// routes.use("/posts", postsRoutes)
// routes.use(sessionsRoutes);