import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { Email } from '../../domain/entities/email.entity';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(email: Email): Promise<void> {
    await this.mailerService.sendMail({
      to: email.to,
      subject: email.subject,
      text: email.body,
      from: email.from || process.env.EMAIL_FROM,
    });

    console.log(`✅ Email sent to ${email.to}`);
  }
}
