<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    exit;
}

$voornaam   = htmlspecialchars(trim($_POST['voornaam']   ?? ''), ENT_QUOTES, 'UTF-8');
$achternaam = htmlspecialchars(trim($_POST['achternaam'] ?? ''), ENT_QUOTES, 'UTF-8');
$telefoon   = htmlspecialchars(trim($_POST['telefoon']   ?? ''), ENT_QUOTES, 'UTF-8');
$email      = htmlspecialchars(trim($_POST['email']      ?? ''), ENT_QUOTES, 'UTF-8');
$dienst     = htmlspecialchars(trim($_POST['dienst']     ?? ''), ENT_QUOTES, 'UTF-8');
$bericht    = nl2br(htmlspecialchars(trim($_POST['bericht'] ?? ''), ENT_QUOTES, 'UTF-8'));

if (empty($voornaam) || empty($telefoon) || empty($email)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Verplichte velden ontbreken']);
    exit;
}

if (!filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Ongeldig e-mailadres']);
    exit;
}

$to      = 'info@argaklus.nl';
$subject = '=?UTF-8?B?' . base64_encode('Nieuwe offerte aanvraag - Argaklus') . '?=';
$datum   = date('d-m-Y H:i');

$html = <<<HTML
<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Offerte Aanvraag</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 0;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">

        <!-- HEADER -->
        <tr>
          <td style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 100%);padding:36px 40px;text-align:center;">
            <img src="https://argaklus.nl/img/logo.png" alt="ARGA Klusbedrijf" style="height:52px;margin-bottom:12px;" />
            <p style="margin:0;color:#f59e0b;font-size:13px;font-weight:600;letter-spacing:2px;text-transform:uppercase;">Nieuwe Offerte Aanvraag</p>
          </td>
        </tr>

        <!-- BANNER -->
        <tr>
          <td style="background:#f59e0b;padding:14px 40px;text-align:center;">
            <p style="margin:0;color:#1a1a2e;font-size:14px;font-weight:700;">
              Ontvangen op {$datum} &nbsp;|&nbsp; argaklus.nl
            </p>
          </td>
        </tr>

        <!-- BODY -->
        <tr>
          <td style="padding:40px 40px 20px;">
            <p style="margin:0 0 24px;font-size:16px;color:#374151;">
              Er is een nieuwe offerte aanvraag binnengekomen via de website. Hieronder staan de gegevens van de aanvrager.
            </p>

            <!-- INFO TABLE -->
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
              <tr style="background:#f9fafb;">
                <td style="padding:14px 20px;font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;width:38%;border-bottom:1px solid #e5e7eb;">Naam</td>
                <td style="padding:14px 20px;font-size:15px;color:#111827;font-weight:600;border-bottom:1px solid #e5e7eb;">{$voornaam} {$achternaam}</td>
              </tr>
              <tr>
                <td style="padding:14px 20px;font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid #e5e7eb;">Telefoon</td>
                <td style="padding:14px 20px;font-size:15px;color:#111827;border-bottom:1px solid #e5e7eb;">
                  <a href="tel:{$telefoon}" style="color:#f59e0b;text-decoration:none;font-weight:600;">{$telefoon}</a>
                </td>
              </tr>
              <tr style="background:#f9fafb;">
                <td style="padding:14px 20px;font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid #e5e7eb;">E-mail</td>
                <td style="padding:14px 20px;font-size:15px;color:#111827;border-bottom:1px solid #e5e7eb;">
                  <a href="mailto:{$email}" style="color:#f59e0b;text-decoration:none;">{$email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 20px;font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;">Dienst</td>
                <td style="padding:14px 20px;">
                  <span style="background:#f59e0b;color:#1a1a2e;font-size:13px;font-weight:700;padding:4px 12px;border-radius:20px;">{$dienst}</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- BERICHT -->
        <tr>
          <td style="padding:0 40px 40px;">
            <p style="margin:0 0 10px;font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;">Bericht</p>
            <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:20px;font-size:15px;color:#374151;line-height:1.7;min-height:60px;">
              {$bericht}
            </div>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:0 40px 40px;text-align:center;">
            <a href="mailto:{$email}" style="display:inline-block;background:#f59e0b;color:#1a1a2e;font-size:15px;font-weight:700;padding:14px 36px;border-radius:8px;text-decoration:none;">
              Beantwoord deze aanvraag &rarr;
            </a>
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#1a1a2e;padding:24px 40px;text-align:center;">
            <p style="margin:0 0 6px;color:#9ca3af;font-size:13px;">ARGA Klusbedrijf &bull; Hudsonlaan 220, 5623 NG Eindhoven</p>
            <p style="margin:0;color:#6b7280;font-size:12px;">+31 6 41 17 02 08 &bull; info@argaklus.nl &bull; argaklus.nl</p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>
HTML;

$boundary = md5(uniqid(time()));

$headers  = "From: =?UTF-8?B?" . base64_encode("ARGA Klusbedrijf") . "?= <noreply@argaklus.nl>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/alternative; boundary=\"{$boundary}\"\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$message  = "--{$boundary}\r\n";
$message .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
$message .= "Nieuwe offerte aanvraag\n\nNaam: {$voornaam} {$achternaam}\nTelefoon: {$telefoon}\nE-mail: {$email}\nDienst: {$dienst}\n\nBericht:\n" . strip_tags($bericht) . "\n\nVerzonden via argaklus.nl op {$datum}\r\n";
$message .= "--{$boundary}\r\n";
$message .= "Content-Type: text/html; charset=UTF-8\r\n\r\n";
$message .= $html . "\r\n";
$message .= "--{$boundary}--";

$sent = mail($to, $subject, $message, $headers);

if ($sent) {
    echo json_encode(['status' => 'success']);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Mail kon niet worden verzonden']);
}
