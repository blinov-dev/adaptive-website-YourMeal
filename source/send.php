<?php
// Файлы phpmailer
require './vendor/phpmailer/PHPMailer.php';
require './vendor/phpmailer/SMTP.php';
require './vendor/phpmailer/Exception.php';

# проверка, что ошибки нет
if (!error_get_last()) {

  // Переменные, которые отправляет пользователь
  $name = $_POST['form-name'];
  $tel = $_POST['form-tel'];
  $delivery = $_POST['delivery'];
  $address = $_POST['address'];
  $floor = $_POST['floor'];
  $intercom = $_POST['intercom'];
  $basket = $_POST['basket-order'];

  // Формирование самого письма
  $title = "Заказ с сайта";
  $body = "
    <h1>Заказ с сайта</h1>
    <p>Имя: $name<p>
    <p><b>Телефон:</b> $tel<p>
    <p><b>Доставка:</b> $delivery<p>
    <p><b>Адрес:</b> $address<p>
    <p><b>Этаж:</b> $floor<p>
    <p><b>Интерком:</b> $intercom<p>
    <p><b>Корзина:</b> $basket<p>
    ";

  // Настройки PHPMailer
  $mail = new PHPMailer\PHPMailer\PHPMailer();

  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;
  // $mail->SMTPDebug = 2;
  $mail->Debugoutput = function ($str, $level) {
    $GLOBALS['data']['debug'][] = $str;
  };

  // Настройки вашей почты
  $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
  $mail->Username   = 'pringles48'; // Логин на почте
  $mail->Password   = 'wkeraoifbqnzwxig'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;
  $mail->setFrom('pringles48@yandex.ru', 'KoTTe48'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('pringles48@yandex.ru');
  // $mail->addAddress('poluchatel2@gmail.com'); // Ещё один, если нужен

  // Прикрипление файлов к письму
  if (!empty($file['name'][0])) {
    for ($i = 0; $i < count($file['tmp_name']); $i++) {
      if ($file['error'][$i] === 0)
        $mail->addAttachment($file['tmp_name'][$i], $file['name'][$i]);
    }
  }
  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  // Проверяем отправленность сообщения
  if ($mail->send()) {
    $data['result'] = "success";
    $data['info'] = "Сообщение успешно отправлено!";
  } else {
    $data['result'] = "error";
    $data['info'] = "Сообщение не было отправлено. Ошибка при отправке письма";
    $data['desc'] = "Причина ошибки: {$mail->ErrorInfo}";
  }
} else {
  $data['result'] = "error";
  $data['info'] = "В коде присутствует ошибка";
  $data['desc'] = error_get_last();
}

// Отправка результата
header('Content-Type: application/json');
echo json_encode($data);
