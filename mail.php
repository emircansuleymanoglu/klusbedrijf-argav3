<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    exit;
}

$voornaam  = htmlspecialchars(trim($_POST['voornaam']  ?? ''));
$achternaam= htmlspecialchars(trim($_POST['achternaam']?? ''));
$telefoon  = htmlspecialchars(trim($_POST['telefoon']  ?? ''));
$email     = htmlspecialchars(trim($_POST['email']     ?? ''));
$dienst    = htmlspecialchars(trim($_POST['dienst']    ?? ''));
$bericht   = htmlspecialchars(trim($_POST['bericht']   ?? ''));

if (empty($voornaam) || empty($telefoon) || empty($email)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Verplichte velden ontbreken']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Ongeldig e-mailadres']);
    exit;
}

$to      = 'info@argaklus.nl';
$subject = 'Nieuwe offerte aanvraag – Argaklus';

$body  = "Nieuwe offerte aanvraag via argaklus.nl\n";
$body .= "==========================================\n\n";
$body .= "Naam:        {$voornaam} {$achternaam}\n";
$body .= "Telefoon:    {$telefoon}\n";
$body .= "E-mail:      {$email}\n";
$body .= "Dienst:      {$dienst}\n\n";
$body .= "Bericht:\n{$bericht}\n\n";
$body .= "--\nVerzonden via argaklus.nl";

$headers  = "From: noreply@argaklus.nl\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['status' => 'success']);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Mail kon niet worden verzonden']);
}
