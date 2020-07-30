import { UsersRepository } from "../../repositories/UsersRepository"
import { CreateUserRequestDTO } from "./CreateUserDTO"
import { User } from "../../entities/User"
import { MailProvider } from "../../providers/MailProvider"

export class CreateUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private mailProvider: MailProvider
  ) {}

  async execute(data: CreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error("User already exists")
    }

    const user = new User(data)

    await this.usersRepository.save(user)

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "My app's team",
        email: "team@team.com",
      },
      subject: "Welcome to our platform",
      body: "<p>You can log in our platform</p>",
    })
  }
}
