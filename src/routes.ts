import { Router, Response, Request } from "express"
import { createUserController } from "./useCases/CreateUser"

const router = Router()

router.post("/user", (request: Request, response: Response) => {
  return createUserController.handle(request, response)
})

export { router }
