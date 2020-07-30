import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider"
import { DbUsersRepository } from "../../repositories/implementations/DbUsersRepository"
import { CreateUserUseCase } from "./CreateUserUseCase"
import { CreateUserController } from "./CreateUserController"

const mailtrapMailProvider = new MailTrapMailProvider()
const dbUsersRepository = new DbUsersRepository()

const createUserUseCase = new CreateUserUseCase(
  dbUsersRepository,
  mailtrapMailProvider
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }
