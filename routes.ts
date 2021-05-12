import { Router } from "https://deno.land/x/oak/mod.ts"

import { getUsers, createUser } from "./controllers/userController.ts"

const router = new Router()

router.get("/api/v1/users", getUsers)
      .post("api/v1/users", createUser)

export default router
