# Production Project

Учебное SPA-приложение «статьи и профили пользователей» на React и TypeScript. Проект выполнен по курсу «Продвинутый Frontend» (Ulbi TV) с упором на архитектуру, тестирование и инфраструктуру, близкие к промышленной разработке.

## Стек

- **React 17**, **TypeScript**, **Redux Toolkit** (асинхронные thunk'и, нормализация, динамическая подгрузка редьюсеров)
- **React Router 6**, **i18next** (интернационализация, извлечение ключей)
- **SCSS-модули**, **Headless UI**, **react-virtualized** (виртуализация длинных списков)
- **Webpack 5** — собственная конфигурация: dev-server, HMR, анализ бандла, раздельные dev/prod-сборки
- **json-server** — фейковый бэкенд

## Архитектура

[Feature-Sliced Design](https://feature-sliced.design/):

```
src/
├── app/        # инициализация, провайдеры, роутинг, стор
├── pages/      # Main, Articles, ArticleDetails, ArticleEdit, Profile, About, NotFound
├── widgets/    # составные блоки страниц
├── features/   # AuthByUsername, addCommentForm, articleEditForm, ...
├── entities/   # Article, Comment, Profile, User, Country, Currency
└── shared/     # UI-кит, api, lib, config
```

Изоляция слайсов проверяется собственным ESLint-правилом — [eslint_plugin](https://github.com/ElKlaus/eslint_plugin).

## Качество

| Инструмент | Для чего |
|---|---|
| **Jest** + Testing Library | Юнит-тесты селекторов, слайсов, компонентов |
| **Storybook** | Каталог компонентов во всех состояниях и темах |
| **Loki** | Скриншотные тесты компонентов (desktop и mobile), HTML-отчёт о расхождениях |
| **ESLint** (airbnb) + **Stylelint** | Статический анализ TS и SCSS |
| **Husky** | Pre-commit проверки |
| **GitHub Actions** | CI: линтеры, юнит- и скриншотные тесты, сборка |

## Запуск

```bash
npm install
npm run start:dev        # фронтенд :3000 + json-server
```

| Команда | Описание |
|---|---|
| `npm run build:prod` | Продакшн-сборка |
| `npm run test:unit` | Юнит-тесты |
| `npm run storybook` | Storybook на :6006 |
| `npm run test:ui` | Скриншотные тесты Loki (нужен Docker) |
| `npm run lint:ts` / `lint:scss` | Линтеры |
