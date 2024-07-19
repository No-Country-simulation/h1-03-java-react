package com.no_country.justina.service.implementation;

import com.no_country.justina.model.dto.ResetPasswordReq;
import com.no_country.justina.model.entities.TokenResetPass;
import com.no_country.justina.repository.TokenResetPassRepository;
import com.no_country.justina.repository.UserRepository;
import com.no_country.justina.service.interfaces.IEmailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class EmailService implements IEmailService {
    /*private TokenResetPassRepository tokenPassRepository;
    private JavaMailSender javaMailSender;
    private PasswordEncoder passwordEncoder;
    private UserRepository userRepository;


    @Value("${client.url}")
    private String url;
    @Value("${confirm.url}")
    private String confirmUrl;
    @Value("${spring.mail.username}")
    private String emailSender;


    @Override
    public void sendConfirmationEmail(TokenResetPass token) throws MessagingException {
        var userEmail = token.getUser().getUsername();
        var link = confirmUrl.concat(token.getToken());

        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper mime = new MimeMessageHelper(message, true, "UTF-8");

        mime.setTo(userEmail); // destinatario
        mime.setFrom(emailSender); // quién lo envia
        mime.setSubject("Confirmación de correo electrónico"); // Asunto
        mime.setText(this.createMessageConfirmEmail(link), true); // Mensaje

        javaMailSender.send(message);
    }

    @Override
    public void confirmEmail(String token) throws Exception {
        var tokenDb = tokenPassRepository.findByToken(token)
                .orElseThrow(() -> new Exception("Link expirado o cuenta confirmada. " +
                        "Por favor, realice un nuevo pedido de confirmación o inicie sesión."));

        if(LocalDateTime.now().isBefore(tokenDb.getExpirationTime()) && !tokenDb.getUser().isEnabled()){

            var userDb = userRepository.findByEmail(tokenDb.getUser().getUsername())
                    .orElseThrow(() -> new UsernameNotFoundException("El usuario " +
                            tokenDb.getUser().getUsername() + " no ha sido registrado correctamente."));
            userDb.setEnabled(true);
            userRepository.save(userDb);
            tokenPassRepository.deleteById(tokenDb.getId());

        }
        else if(LocalDateTime.now().isAfter(tokenDb.getExpirationTime()) && !tokenDb.getUser().isEnabled()){
            throw new Exception("Link expirado. Por favor, realice un nuevo pedido de confirmación y revise su casilla de correo.");
        }
    }

    @Override
    public void sendEmail(TokenResetPass token) throws MessagingException {

        var userEmail = token.getUser().getEmail();
        var link = url.concat(token.getToken());

        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper mime = new MimeMessageHelper(message, true, "UTF-8");

        mime.setTo(userEmail); // destinatario
        mime.setFrom(emailSender); // quién lo envia
        mime.setSubject("Recuperación de contraseña"); // Asunto
        mime.setText(this.createMessageRecoverPassword(link), true); // Mensaje

        javaMailSender.send(message);

    }

    @Override
    public void resetPassword(ResetPasswordReq resetPasswordReq) throws Exception {
        var token = tokenPassRepository.findByToken(resetPasswordReq.getToken())
                .orElseThrow(() -> new Exception("El token ingresado no existe"));

        if(LocalDateTime.now().isBefore(token.getExpirationTime())){

            var user = userRepository.findByEmail(token.getUser().getEmail())
                    .orElseThrow(() -> new UsernameNotFoundException("El usuario " + token.getUser().getEmail() + " no existe"));
            user.setPassword(passwordEncoder.encode(resetPasswordReq.getPassword()));
            userRepository.save(user);
            tokenPassRepository.deleteById(token.getId());

        }
        else {
            tokenPassRepository.deleteById(token.getId());
            throw new Exception("El link ha expirado");
        }
    }

    private String createMessageRecoverPassword(String link){
        return
                "\n" +
                        "<!doctype html>\n" +
                        "<html lang=\"en-US\">\n" +
                        "\n" +
                        "<head>\n" +
                        "    <meta content=\"text/html; charset=utf-8\" http-equiv=\"Content-Type\" />\n" +
                        "    <title>Reset Password Email Template</title>\n" +
                        "    <meta name=\"description\" content=\"Reset Password Email Template.\">\n" +
                        "    <style type=\"text/css\">\n" +
                        "        a:hover {text-decoration: underline !important;}\n" +
                        "    </style>\n" +
                        "</head>\n" +
                        "\n" +
                        "<body marginheight=\"20\" topmargin=\"20\" marginwidth=\"20\" style=\"margin: 20px; background-color: #EDF5D7;\" leftmargin=\"40\">\n" +
                        "    <!--100% body table-->\n" +
                        "    <table cellspacing=\"0\" border=\"0\" cellpadding=\"0\" width=\"100%\" bgcolor=\"#EDF5D7\"\n" +
                        "        style=\"@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;\">\n" +
                        "        <tr>\n" +
                        "            <td>\n" +
                        "                <table style=\"background-color: #EDF5D7; max-width:670px;  margin:0 auto;\" width=\"100%\" border=\"0\"\n" +
                        "                    align=\"center\" cellpadding=\"0\" cellspacing=\"0\">\n" +
                        "                    <tr>\n" +
                        "                        <td style=\"height:80px;\">&nbsp;</td>\n" +
                        "                    </tr>\n" +
                        "                    <tr>\n" +
                        "                        <td style=\"text-align:center;\">\n" +
                        "                          <img src=\"https://i.ibb.co/5Bztsq8/logo-ceal.png\" alt=\"logo-ceal\" border=\"0\" width=\"300\">\n" +
                        "                        </td>\n" +
                        "                    </tr>\n" +
                        "                    <tr>\n" +
                        "                        <td style=\"height:20px;\">&nbsp;</td>\n" +
                        "                    </tr>\n" +
                        "                    <tr>\n" +
                        "                        <td>\n" +
                        "                            <table width=\"95%\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\"\n" +
                        "                                style=\"max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);\">\n" +
                        "                                <tr>\n" +
                        "                                    <td style=\"height:40px;\">&nbsp;</td>\n" +
                        "                                </tr>\n" +
                        "                                <tr>\n" +
                        "                                    <td style=\"padding:0 35px;\">\n" +
                        "                                        <h1 style=\"color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;\"> Recuperar Contraseña</h1>\n" +
                        "                                        <span\n" +
                        "                                            style=\"display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;\"></span>\n" +
                        "                                        <p style=\"color:#455056; font-size:15px;line-height:24px; margin:0;\">\n" +
                        "                                           Para cambiar la contraseña haz click en el botón. Este link tiene un tiempo de expiración.\n" +
                        "                                        </p>\n" +
                        "                                        <a href=\""+link+"\"\n" +
                        "                                            style=\"background:#FF8C42;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;\">cambiar contraseña</a>\n" +
                        "                                    </td>\n" +
                        "                                </tr>\n" +
                        "                                <tr>\n" +
                        "                                    <td style=\"height:40px;\">&nbsp;</td>\n" +
                        "                                </tr>\n" +
                        "                            </table>\n" +
                        "                        </td>\n" +
                        "                    <tr>\n" +
                        "                        <td style=\"height:20px;\">&nbsp;</td>\n" +
                        "                    </tr>\n" +
                        "                    \n" +
                        "                    <tr>\n" +
                        "                        <td style=\"height:80px;\">&nbsp;</td>\n" +
                        "                    </tr>\n" +
                        "                </table>\n" +
                        "            </td>\n" +
                        "        </tr>\n" +
                        "    </table>\n" +
                        "    <!--/100% body table-->\n" +
                        "</body>\n" +
                        "\n" +
                        "</html>";

    }

    private String createMessageConfirmEmail(String link){
        return
                "\n" +
                        "<!doctype html>\n" +
                        "<html lang=\"en-US\">\n" +
                        "\n" +
                        "<head>\n" +
                        "    <meta content=\"text/html; charset=utf-8\" http-equiv=\"Content-Type\" />\n" +
                        "    <title>Confirma email Template</title>\n" +
                        "    <meta name=\"description\" content=\"confirma email.\">\n" +
                        "    <style type=\"text/css\">\n" +
                        "        a:hover {text-decoration: underline !important;}\n" +
                        "    </style>\n" +
                        "</head>\n" +
                        "\n" +
                        "<body marginheight=\"20\" topmargin=\"40\" marginwidth=\"20\" style=\"margin: 20px; background-color: #EDF5D7;\" leftmargin=\"40\">\n" +
                        "    <!--100% body table-->\n" +
                        "    <table cellspacing=\"0\" border=\"0\" cellpadding=\"0\" width=\"100%\" bgcolor=\"#EDF5D7\"\n" +
                        "        style=\"@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;\">\n" +
                        "        <tr>\n" +
                        "            <td>\n" +
                        "                <table style=\"background-color: #EDF5D7; max-width:670px;  margin:0 auto;\" width=\"100%\" border=\"0\"\n" +
                        "                    align=\"center\" cellpadding=\"0\" cellspacing=\"0\">\n" +
                        "                    <tr>\n" +
                        "                        <td style=\"height:80px;\">&nbsp;</td>\n" +
                        "                    </tr>\n" +
                        "                    <tr>\n" +
                        "                        <td style=\"text-align:center;\">\n" +
                        "                          <img src=\"https://i.ibb.co/5Bztsq8/logo-ceal.png\" alt=\"logo-ceal\" border=\"0\" width=\"300\">\n" +
                        "                        </td>\n" +
                        "                    </tr>\n" +
                        "                    <tr>\n" +
                        "                        <td style=\"height:20px;\">&nbsp;</td>\n" +
                        "                    </tr>\n" +
                        "                    <tr>\n" +
                        "                        <td>\n" +
                        "                            <table width=\"95%\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\"\n" +
                        "                                style=\"max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);\">\n" +
                        "                                <tr>\n" +
                        "                                    <td style=\"height:40px;\">&nbsp;</td>\n" +
                        "                                </tr>\n" +
                        "                                <tr>\n" +
                        "                                     <td style=\"padding:0 35px;\">\n" +
                        "                                        <h1 style=\"color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;\"> Confirmación de registro</h1>\n" +
                        "                                        <span\n" +
                        "                                            style=\"display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;\"></span>\n" +
                        "                                        <p style=\"color:#455056; font-size:15px;line-height:24px; margin:0;\">\n" +
                        "                                           confirme su registro de usuario. Este link tiene un tiempo de expiración.\n" +
                        "                                        </p>\n" +
                        "                                        <a href=\""+link+"\"\n" +
                        "                                            style=\"background:#FF8C42;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;\">confirmar registro</a>\n" +
                        "                                    </td>\n" +
                        "                                </tr>\n" +
                        "                                <tr>\n" +
                        "                                    <td style=\"height:40px;\">&nbsp;</td>\n" +
                        "                                </tr>\n" +
                        "                            </table>\n" +
                        "                        </td>\n" +
                        "                    <tr>\n" +
                        "                        <td style=\"height:20px;\">&nbsp;</td>\n" +
                        "                    </tr>\n" +
                        "                    \n" +
                        "                    <tr>\n" +
                        "                        <td style=\"height:80px;\">&nbsp;</td>\n" +
                        "                    </tr>\n" +
                        "                </table>\n" +
                        "            </td>\n" +
                        "        </tr>\n" +
                        "    </table>\n" +
                        "    <!--/100% body table-->\n" +
                        "</body>\n" +
                        "\n" +
                        "</html>";

    }
*/
}
