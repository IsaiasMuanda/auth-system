import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verificação de email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Verificação",
        });

        console.log("Email enviado com sucesso", response);
    } catch (error) {
        console.error(`Erro no método sendVerificationEmail`, error);

        throw new Error(`Erro ao enviar email de verificação: ${error}`);
    }
};

export const sendWelcomeEmail = async (email, dashboardURL) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Bem-vindo(a) ao Your App!",
            html: WELCOME_EMAIL_TEMPLATE.replace("{dashboardURL}", dashboardURL),
            category: "Boas-vindas",
        });

        console.log("Email de boas-vindas enviado com sucesso", response);
    } catch (error) {
        console.error(`Erro no método sendWelcomeEmail`, error);

        throw new Error(`Erro ao enviar email de boas-vindas: ${error}`);
    }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Recuperação de password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Recuperação de password",
        });
        console.log("Email de recuperação de password enviado com sucesso", response);
    } catch (error) {
        console.error(`Erro no sendPasswordResetEmail`, error);

        throw new Error(`Erro ao enviar email de recuperação de password: ${error}`);

    }
}

export const sendResetSuccessEmail = async (email) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password alterada com sucesso",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password alterada",
        });

        console.log("Email de alteração de password enviado com sucesso", response);
    } catch (error) {
        console.error(`Erro no método sendResetSuccessEmail`, error);

        throw new Error(`Erro ao enviar email de alteração de password: ${error}`);

    }
};