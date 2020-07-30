import { UsersRepository } from "../UsersRepository"
import { User } from "../../entities/User"

export class DbUsersRepository implements UsersRepository {
  // Mock DB
  private users: User[] = []

  async findByEmail(email: string): Promise<User> {
    // Get users from the mock DB
    const users = this.users.find((user) => user.email == email)

    return users
  }

  async save(user: User): Promise<void> {
    // Save user in DB mock
    this.users.push(user)
  }
}
