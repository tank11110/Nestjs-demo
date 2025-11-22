## 📚 Project Overview

This is a demo backend project built with [NestJS](https://nestjs.com/),
showcasing basic CRUD APIs for an article & comment system.
It uses [Prisma ORM](https://www.prisma.io/) with SQLite as the database.

本專案是一個使用 [NestJS](https://nestjs.com/) 開發的後端應用，
展示文章與留言系統的基本 CRUD API 功能，
採用 [Prisma ORM](https://www.prisma.io/) 與 SQLite 進行資料操作。

<br>

## Table of Contents

- [Quick Start](#quick-start)
    - [Install dependencies](#install-dependencies)
    - [Setup environment variables](#setup-environment-variables)
    - [Initialize Prisma](#initialize-prisma)
    - [Compile and run the project](#compile-and-run-the-project)
- [API Documentation](#api-documentation)
- [Features](#features)
- [Project Structure](#project-structure)

<br>

## Quick Start

### Install dependencies

```bash
npm install
```

### Setup environment variables

Copy `.env.example` → `.env`

```bash
cp .env.example .env
```

### Initialize Prisma

```bash
npx prisma migrate dev
```

### Compile and run the project

```bash
npm run start      # development
npm run start:dev  # watch mode
```

Server is running at → [http://localhost:3000](http://localhost:3000)

<br>

## API Documentation

For full API specifications and request/response examples, see:

📘 [API Reference](./docs/api.md)

<br>

## Features

- RESTful CRUD APIs for Articles & Comments
- Prisma ORM + SQLite local database
- DTO validation using class-validator
- Modular & scalable architecture (NestJS best practice)
- Easy to extend for frontend or microservice demo

<br>

## Project Structure

```
article-system/
├── prisma/
│   ├── migrations/     # Prisma migration history
│   └── schema.prisma   # Database schema
│
├── docs/               # Project/API documentation
│
├── src/
│   ├── modules/        # Feature modules
│   │   ├── articles/
│   │   └── comments/
│   │
│   ├── prisma/         # PrismaService wrapper
│   ├── app.module.ts   # Root module
│   └── main.ts         # Application entry point
│
├── .env.example        # Sample environment variables
│
├── package.json
│
└── README.md
```
