[Lesson59-20181108-homework]
������������ ���������� ������ � ����� "dzz__2__1541703515.txt".

������� ������:
1. ���������������� ���� �������� ���.
1.1. ��������������� "zaglyada.pp.ua" �� https://nic.ua
1.2. ����� ���������� �.2.1. �������� � �������� � NS-�������:
"gail.ns.cloudflare.com"
"dom.ns.cloudflare.com"

2. ������������������ �� "cloudflare.com" � ������������ ��� �������
2.1. �����������������. � ������� "DNS/Cloudflare Nameservers" ������� 
DNS-����� DNS-�������� ������� "cloudflare.com", ������� ����������� � �.1.2.
2.2. ������� �������� ��� "zaglyada.pp.ua" � IP �� "cloudflare.com".
��������� "cloud.google.com" �������� ������� IP 130.211.98.74 (�.3.2.)
��� � �������� � ������� "DNS/DNS Records " ��� 
"zaglyada.pp.ua" � "www.zaglyada.pp.ua".

3. ���������������� ���������� VPS
3.1. ������� ������ �� "vpsserver.com", �� �� ����� � ����������� ��������� 
������ ����������� �� �������� ��� NodeJS.
3.2. ����� ����� ����������������� �� https://cloud.google.com/
3.2.1. ��������� �� �� ���������
��� ������� ������ 12�������.
������ Ubuntu 18.04
���������� ������� IP �������� � �.2.2.
3.2.2. ��������� � ������ NodeJS.
$ sudo apt install nodejs
������ ��������� � "~/Lesson59/server.js"
���� �������� � �������� NodeJS �� ����� 80 (�.�. ��������� ����� 1..1023 ����� 
������������ ������ root).
�������� �������� ��������� �������:
$ sudo setcap "CAP_NET_BIND_SERVICE=+ep" /usr/bin/node

PS: Google ������������� ��������� �������� ������ �� ������ ���������.
��� ������� �� github ��� NodeJS:
https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/appengine/hello-world/standard/app.js