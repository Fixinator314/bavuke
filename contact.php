<?php
header('Content-Type: application/json; charset=utf-8');

/* ---------- CONFIG ---------- */
$to          = 'olefile@sts-africa.co.za';   // where submissions go
$fromAddress = 'no-reply@bavukefoundation.co.za';  // must be an address on YOUR domain
$siteName    = 'Bavuke Foundation';

/* ---------- HELPERS ---------- */
function respond($ok, $msg, $code = 200) {
    http_response_code($code);
    echo json_encode(['success' => $ok, 'message' => $msg]);
    exit;
}

// strip line breaks so nobody can inject extra email headers
function clean_line($v) {
    return trim(preg_replace('/[\r\n]+/', ' ', (string)$v));
}

/* ---------- METHOD CHECK ---------- */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, 'Method not allowed.', 405);
}

/* ---------- READ JSON BODY ---------- */
$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) {
    respond(false, 'Invalid request.', 400);
}

$name    = clean_line($data['name'] ?? '');
$email   = clean_line($data['email'] ?? '');
$subject = clean_line($data['subject'] ?? '');
$message = trim((string)($data['message'] ?? ''));

/* ---------- VALIDATE ---------- */
if ($name === '' || $email === '' || $subject === '' || $message === '') {
    respond(false, 'Please complete all required fields.', 422);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'Please enter a valid email address.', 422);
}
if (mb_strlen($name) > 100 || mb_strlen($message) > 5000) {
    respond(false, 'Your message is too long.', 422);
}

/* ---------- SUBJECT LABELS ---------- */
$labels = [
    'general'     => 'General Enquiry',
    'volunteer'   => 'Volunteering',
    'partnership' => 'Partnership',
    'donation'    => 'Donations',
    'other'       => 'Other',
];
$subjectLabel = $labels[$subject] ?? 'Website Enquiry';

/* ---------- BUILD EMAIL ---------- */
$mailSubject = "[$siteName] $subjectLabel from $name";
$encodedSubject = '=?UTF-8?B?' . base64_encode($mailSubject) . '?=';

$body  = "New message from the $siteName website\n";
$body .= "----------------------------------------\n\n";
$body .= "Name:    $name\n";
$body .= "Email:   $email\n";
$body .= "Subject: $subjectLabel\n\n";
$body .= "Message:\n$message\n";

$headers  = "From: $siteName <$fromAddress>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";   // hitting Reply goes to the visitor
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

/* ---------- SEND ---------- */
if (mail($to, $encodedSubject, $body, $headers)) {
    respond(true, 'Message sent.');
}

error_log('Bavuke contact form: mail() failed.');
respond(false, 'We could not send your message right now. Please try again later.', 500);