import { User } from "../entities/User"

export interface UsersRepository {
  findByEmail(email: string): Promise<User>
  save(user: User): Promise<void>
}
