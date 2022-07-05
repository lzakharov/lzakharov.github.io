---
title: "Резюме"
---

# Захаров Лев, Golang Developer

## Контакты

- Email: [l.j.zakharov@gmail.com](mailto:l.j.zakharov@gmail.com)
- Telegram: [@lzakharov](https://t.me/lzakharov)
- GitHub: [lzakharov](https://github.com/lzakharov)

## Образование

- Казанский Федеральный Университет, Высшая школа информационных технологий и информационных систем, 2014 - 2018, Прикладная информатика (**красный диплом**).

## Навыки

- Языки программирования: Golang, Python
- Базы данных: PostgreSQL, Elasticsearch, Redis, S3.
- Брокеры сообщений: Kafka.
- CI/CD: GitLab CI, Drone CI
- Операционные системы: OS X, Linux.
- Языки: Русский, English (upper-intermediate).
- Прочее: Git, GitLab, Jira, Docker, Kubernetes, Helm, Terraform (+ Terragrunt), Swagger, Postman, gRPC, GraphQL, Apollo, Prometheus, Grafana, Jaeger, Clean Architecture, Microservices, Functional Programming.

### Опыт работы

#### [KazanExpress](https://kazanexpress.ru), Golang Team Lead (03.2021 - по настоящее время)

<details>

<summary>Подробнее</summary>

#### Общее

Работа с командой:
* ведение ежедневных синков;
* планирование;
* грумминг;
* проведение онбордингов, 1 to 1 и self review;
* собеседования Go-разработчиков.

Ведение документации и базы знаний.

##### Шаблон проекта, общие библиотеки и утилиты

Разработка шаблонного проекта:
* структура проекта (на базе [Standard Go Project Layout](https://github.com/golang-standards/project-layout)), чистая архитектура, DDD;
* конфигурация golangci-lint;
* Makefile для сборки, тестирования, кодогенерации, запуска статических анализаторов и т. д.
* чтение конфигурации, Graceful Shutdown, DI, логирование, метрики, трейсинг...
* шаблоны CI/CD;
* шаблоны Helm Chart.

Разработка библиотек для работы с базами данных, Kafka, Feature Flags, A/B тестами и др.

Разработка утилиты [tracegen](https://github.com/KazanExpress/tracegen) для генерации декораторов, добавляющих трассировку OpenTelemetry.

##### Сервис категорий

Реализация сервиса для получения информации о категориях (GraphQL, DataLoaders, Redis, Kafka).

##### Сервис изображений

Реализация новой архитектуры на базе [imgproxy](https://imgproxy.net), которая позволила:
* снизить latency и стабилизировать работу сервиса;
* сократить хранимый на дисках объем данных в несколько раз;
* уменьшить требований к ресурсам.

#### Команда поиска

##### Сервис поиска

Реализация новой архитектуры поиска на базе Elasticsearch:
* переход на инкрементальное обновление индекса (Postgres, Debezium, Kafka);
* переход на новый формат карточек продукта;
* улучшения механизмов работы полнотекстового поиска;
* переход на GraphQL (Apollo Federation);
* снижение latency и стабилизация работы сервиса (99.9%);
* работа над внедрением сервиса исправления опечаток на базе JamSpell (Python, Starlette);
* проведение A/B тестов.

##### Сервис подсказок

Реализация версии сервиса для работы с текстовыми подсказками на Python (Starlette, fast-autocomplete), которая показала значимое улучшение продуктовых метрик.

Реализация новой версии на базе Elasticsearch (Golang, GraphQL, S3):
* новые типы подсказок (по продуктам, категориям и магазинам);
* проведение A/B тестов для комбинаций разных типов подсказок.

##### Сервисы рекламных полок

Разработка сервисов рекламной модели (GraphQL, Postgres, Kafka, Elasticsearch, S3, ClickHouse).

##### Сервис поиска по изображениям

Разработка сервиса поиска по изображениям (GraphQL, Postgres, Kafka, S3):
* интеграция с внешним сервисом, предоставляющий поисковый индекс;
* препроцессинг датасета изображений для поискового индекса.

#### DevOps

* Участие во внедрении IaC (Terraform, Terragrunt).
* Участие в переезде из MCS в Яндекс.Облако.
* Переход на использования Helm (практика распространилась на все команды разработки).
* Поднятие Jaeger для мультикластерного окружения.
* Настройка инфраструктуры проектов (создание пользователей, баз данных, бакетов, топиков и т. д.).
* Настройка CI/CD (Drone, Jsonnet).
* Создание дэшбордов в Grafana (Jsonnet, Grafonnet) и Яндекс.Мониторинге.
* Настройка алертов в Prometheus.
* Настройка HPA с помощью [KEDA](https://keda.sh).

</details>

#### [Нетология](https://netology.ru), Эксперт на курсе по Go (11.2020 - 04.2021)

#### [Kodix](https://agency.kodix.ru/), Senior Golang Developer (01.2020 - 02.2021)
+ Разработка сервиса платежей (gRPC, PostgreSQL, Hashicorp Vault).
    * Интеграция с сервисами Сбербанка, Тинькофф, МКБ.
+ Разработка сервиса конфигурации автомобилей (gRPC, MongoDB, PostgreSQL, Amazon S3).
+ Разработка сервиса модельных справочников (gRPC, PostgreSQL, Hashicorp Vault, Kafka).
+ Разработка сервиса управления формами (gRPC, PostgreSQL, Kafka).
+ Разработка агрегатора статей с автодилерских сайтов (goquery).
+ Разработка утилиты для валидации ссылок на автодилерских сайтах (Colly).
+ Проектирование, декомпозиция задач, code review, настройка CI/CD, проведение собеседований.

#### [Совкомбанк](https://sovcombank.ru), Ведущий специалист (10.2019 - 12.2019)
+ Разработка и поддержка мобильного банка [Халва Kids](https://kids.halvacard.ru) на Go.
    * Автоматизация деплоя на dev, test, production стенды в GitLab.
    * Внедрение логирования (logrus + graylog).
    * Добавление механизма миграции БД (sql-migrate).
    * Работа над новыми фичами, исправление багов, пропаганда DDD и Clean Architecture, написание unit-тестов и ведение документации.

#### [Infotech Group](https://www.infotech.group/), Golang Developer (10.2018 - 10.2019)
+ Разработка и поддержка систем управления заявками в *Мослифт* и автоматизации предприятия *ФГУП «Охрана» Росгвардии* (микросервисы, PostgreSQL, ElasticSearch).
    * gRPC и RESTful сервисы CRM систем.
    * Сервисы контроля доступа (RBAC, ABAC).
    * Сервис генерации отчетов в формате MS Excel.
    * Сервисы оповещений по email и sms.
+ Разработка утилиты аудирования [Halo OS](https://haloos.ru) (Linux Audit Framework, BoltDB).
+ Разработка Telegram-бота для быстрого создания задач в Jira.
+ Разработка сервиса интеграции данных дорожных объектов на Scala (cats, fs2, http4s).

#### [Яндекс.Лицей](https://yandexlyceum.ru/), Преподаватель (09.2017 - 08.2019)
+ Преподавание курсов по программированию на /Python/ для школьников.

#### [Innova Group](https://innovacompanies.com/), Python Developer (02.2018 - 05.2018)
+ Разработка платежных систем и веб-сервисов для мобильных приложений (Django, Django REST framework, Django Channels, Postgres).

#### [GDC (ICL SERVICES)](http://icl-services.com/), Инженер-программист (08.2016 - 12.2016)
+ Разработка *front-end* приложения для управления массовыми почтовыми рассылками на JavaScript (React, Redux).

#### [ОШИ «Лицей имени Н. И. Лобачевского» КФУ](https://kpfu.ru/liceum[), Лаборант (09.2014 - 08.2017)
+ Преподавание курсов по программированию для школьников.

## Сертификаты и курсы

- Удостоверение о повышении квалификации по дополнительной профессиональной программе "Развитие таланта школьников в предметных областях. Организация и проведение этапов всероссийской олимпиады школьников и других интеллектуальных соревнований" модуль "Основы программирования на языке Python".
- Introduction to Linux, Bioinformatics Institute ([сертификат](https://stepik.org/certificate/a5be96ccb072ab5111d87827a136717d8cd3b07c.pdf)).
- Neural Networks, Bioinformatics Institute ([сертификат](https://stepik.org/certificate/e76394b2a12210c8785eaee1ba321507cc38b12c.pdf)).
- Параллельное программирование с использованием технологии MPI, МГУ ([сертификат](https://www.intuit.ru/verifydiplomas/101054900)).
- Neural Networks and Deep Learning, deeplearning.ai ([сертификат](https://www.coursera.org/account/accomplishments/certificate/RNA9D7YTE9LY)).
- Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization, deeplearning.ai ([сертификат](https://www.coursera.org/account/accomplishments/certificate/8B6U4TYN9K83)).
- Введение в Scala, Tinkoff.ru ([сертификат](https://stepik.org/certificate/be03c58fee7c7a50a60b3a6d9113fa2b8c95fbfc.pdf)).
- IBM Cloud: Deploying Microservices with Kubernetes ([сертификат](https://www.coursera.org/account/accomplishments/certificate/8YD5PVQFBHKE)).
- HackerRank Problem Solving Certificates ([Basic](https://www.hackerrank.com/certificates/34d43c18635d), [Intermediate](https://www.hackerrank.com/certificates/ecc777c2842a), [Advanced](https://www.hackerrank.com/certificates/df000de9d399)).

## Награды

- Диплом призера. Республиканская олимпиада школьников по программированию 2014.
- Диплом III-степени. VII открытый командный чемпионат ИВМиИТ-ВМК КФУ по олимпиадному программированию 2014 г.
- Диплом. Хакатон ГИБДД «Интеллектуальные транспортные системы и городская мобильность людей!».
- Именная стипендия президента РТ.
- Благодарность за академические успехи, активное участие в научно-практической деятельности института.
- Серебряная медаль. Всероссийский физкультурно-спортивный комплекс «Готов к труду и обороне» (ГТО).
