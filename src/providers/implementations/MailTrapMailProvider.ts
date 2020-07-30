import { MailProvider, Message } from "../MailProvider"
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"

export class MailTrapMailProvider implements MailProvider {
  private transporter: Mail

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "5d1969f61d9362",
        pass: "4a02ef092c64cd",
      },
    })
  }

  async sendMail(message: Message): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    })
  }
}
