[Lesson59-20181108-homework]
Оригинальная постановка задачи в файле "dzz__2__1541703515.txt".

Решение задачи:
1. Зарегистрировать себе доменное имя.
1.1. Зарегистрировал "zaglyada.pp.ua" на https://nic.ua
1.2. После выполнения п.2.1. вернулся и прописал в NS-серверы:
"gail.ns.cloudflare.com"
"dom.ns.cloudflare.com"

2. Зарегистрироваться на "cloudflare.com" и использовать его сервисы
2.1. Зарегистрировался. В разделе "DNS/Cloudflare Nameservers" получил 
DNS-имена DNS-серверов сервиса "cloudflare.com", которые использовал в п.1.2.
2.2. Связать доменное имя "zaglyada.pp.ua" с IP на "cloudflare.com".
Виртуалка "cloud.google.com" получила внешний IP 130.211.98.74 (п.3.2.)
Его и прописал в разделе "DNS/DNS Records " для 
"zaglyada.pp.ua" и "www.zaglyada.pp.ua".

3. Зарегистрировать бесплатный VPS
3.1. Сначала сделал на "vpsserver.com", но не успел в однодневный триальный 
период разобраться со скриптом для NodeJS.
3.2. После этого зарегистрировался на https://cloud.google.com/
3.2.1. Установка ОС на виртуалку
Тут пробный период 12месяцев.
Выбрал Ubuntu 18.04
Полученный внешний IP прописал в п.2.2.
3.2.2. Установка и запуск NodeJS.
$ sudo apt install nodejs
Скрипт разместил в "~/Lesson59/server.js"
Была проблема с запуском NodeJS на порту 80 (т.к. системные порты 1..1023 может 
использовать только root).
Решилась запуском следующей команды:
$ sudo setcap "CAP_NET_BIND_SERVICE=+ep" /usr/bin/node

PS: Google предоставляет множество примеров работы со своими сервисами.
Вот примеры на github для NodeJS:
https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/appengine/hello-world/standard/app.js