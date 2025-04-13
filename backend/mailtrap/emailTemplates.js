export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Verify Your Email</title>
</head>
<body style="font-family: 'Segoe UI', sans-serif; background-color: #f4f4f5; padding: 0; margin: 0;">
  <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
    <div style="background: linear-gradient(90deg, #6366f1, #818cf8); padding: 30px; text-align: center;">
      <h1 style="color: white; margin: 0;">Confirme seu e-mail</h1>
    </div>
    <div style="padding: 30px;">
      <p>Olá,</p>
      <p>Obrigado por se cadastrar! Seu código de verificação é:</p>
      <div style="text-align: center; margin: 30px 0;">
        <span style="font-size: 32px; font-weight: bold; letter-spacing: 6px; color: #6366f1;">{verificationCode}</span>
      </div>
      <p>Insira este código na página de verificação para completar seu cadastro.</p>
      <p>O código expira em 15 minutos por motivos de segurança.</p>
      <p>Se você não criou uma conta conosco, apenas ignore este e-mail.</p>
      <p>Abraços,<br/>Equipe Your App</p>
    </div>
    <div style="text-align: center; padding: 15px; font-size: 12px; color: #999;">
      <p>Esta é uma mensagem automática. Não responda este e-mail.</p>
    </div>
  </div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to Your App</title>
</head>
<body style="font-family: 'Segoe UI', sans-serif; background-color: #f4f4f5; padding: 0; margin: 0;">
  <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
    <div style="background: linear-gradient(90deg, #6366f1, #818cf8); padding: 30px; text-align: center;">
      <h1 style="color: white; margin: 0;">Bem-vindo(a) ao Your App!</h1>
    </div>
    <div style="padding: 30px;">
      <p>Olá,</p>
      <p>Estamos muito felizes em ter você conosco! 🎉</p>
      <p>Sua conta foi criada com sucesso e agora você tem acesso completo à nossa plataforma.</p>
      <p>Aqui estão algumas coisas que você pode fazer agora:</p>
      <ul>
        <li>Explorar todos os recursos disponíveis</li>
        <li>Personalizar seu perfil e preferências</li>
        <li>Receber suporte sempre que precisar</li>
      </ul>
      <p>Se tiver qualquer dúvida, estamos aqui para ajudar.</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="{dashboardURL}" style="background-color: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">Acessar minha conta</a>
      </div>
      <p>Obrigado por fazer parte da nossa comunidade!</p>
      <p>Abraços,<br/>Equipe Your App</p>
    </div>
    <div style="text-align: center; padding: 15px; font-size: 12px; color: #999;">
      <p>Esta é uma mensagem automática. Não responda este e-mail.</p>
    </div>
  </div>
</body>
</html>
`;


export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Password Reset Successful</title>
</head>
<body style="font-family: 'Segoe UI', sans-serif; background-color: #f4f4f5; padding: 0; margin: 0;">
  <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
    <div style="background: linear-gradient(90deg, #6366f1, #818cf8); padding: 30px; text-align: center;">
      <h1 style="color: white; margin: 0;">Senha redefinida</h1>
    </div>
    <div style="padding: 30px;">
      <p>Olá,</p>
      <p>Confirmamos que sua senha foi alterada com sucesso.</p>
      <div style="text-align: center; margin: 30px 0;">
        <div style="background-color: #6366f1; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 28px;">✓</div>
      </div>
      <p>Se você não fez essa solicitação, entre em contato com o suporte imediatamente.</p>
      <p>Recomendações de segurança:</p>
      <ul>
        <li>Use uma senha forte e única</li>
        <li>Ative a autenticação em duas etapas</li>
        <li>Evite reutilizar senhas</li>
      </ul>
      <p>Obrigado por manter sua conta segura.<br/>Equipe Your App</p>
    </div>
    <div style="text-align: center; padding: 15px; font-size: 12px; color: #999;">
      <p>Esta é uma mensagem automática. Não responda este e-mail.</p>
    </div>
  </div>
</body>
</html>
`;


export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Reset Your Password</title>
</head>
<body style="font-family: 'Segoe UI', sans-serif; background-color: #f4f4f5; padding: 0; margin: 0;">
  <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
    <div style="background: linear-gradient(90deg, #6366f1, #818cf8); padding: 30px; text-align: center;">
      <h1 style="color: white; margin: 0;">Redefinir senha</h1>
    </div>
    <div style="padding: 30px;">
      <p>Olá,</p>
      <p>Recebemos um pedido para redefinir sua senha. Se não foi você, ignore este e-mail.</p>
      <p>Para redefinir sua senha, clique no botão abaixo:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="{resetURL}" style="background-color: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">Redefinir Senha</a>
      </div>
      <p>Este link expira em 1 hora por motivos de segurança.</p>
      <p>Atenciosamente,<br/>Equipe Your App</p>
    </div>
    <div style="text-align: center; padding: 15px; font-size: 12px; color: #999;">
      <p>Esta é uma mensagem automática. Não responda este e-mail.</p>
    </div>
  </div>
</body>
</html>
`;
