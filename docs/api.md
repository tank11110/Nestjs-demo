## API Reference

Base URL: `http://localhost:3000`

<br>

## Table of Contents

- [Articles](#articles)
    - [Get all articles](#get-all-articles)
    - [Get Article by ID](#get-article-by-id)
    - [Create Article](#create-article)
- [Comments](#comments)
    - [Get Comments of an Article](#get-comments-of-an-article)
    - [Create Comment](#create-comment)
- [Common Error Response Format](#common-error-response-format)
    - [404](#404)

<br>

## Articles

### Get all articles

**GET** `/articles`

Retrieve all articles with brief information.

**Status codes**

- `200 OK`

**Success Response:**

```json
{
    "data": [
        {
            "id": 1,
            "author": "tank11110",
            "title": "Hello",
            "createdAt": "2025-01-01T00:00:00.000Z"
        }
    ]
}
```

---

### Get Article by ID

**GET** `/articles/{id}`

Details of a specific article.

**Path parameter:**

- `id` — Article ID (number)

**Status codes**

- `200 OK`
- `404 Not Found`

**Success Response:**

```json
{
    "data": {
        "id": 1,
        "author": "tank11110",
        "title": "Hello",
        "content": "World!",
        "createdAt": "2025-01-01T00:00:00.000Z"
    }
}
```

---

### Create Article

**POST** `/articles`

Create a new article.

**Headers:**

- `Content-Type: application/json`

**Body:**

```json
{
    "author": "tank11110",
    "title": "Hello",
    "content": "World!"
}
```

**Status codes**

- `201 Created`

**Success Response:**

```json
{
    "data": {
        "id": 1,
        "author": "tank11110",
        "title": "Hello",
        "content": "World!",
        "createdAt": "2025-01-01T00:00:00.000Z"
    }
}
```

<br>

## Comments

### Get Comments of an Article

**GET** `/articles/{articleId}/comments`

List all comments of an article.

**Path parameter:**

- `articleId` — Article ID (number)

**Status codes**

- `200 OK`
- `404 Not Found`

**Success Response:**

```json
{
    "data": [
        {
            "id": 1,
            "author": "tank11110",
            "content": "Hello!",
            "createdAt": "2025-01-01T00:00:00.000Z"
        }
    ]
}
```

---

### Create Comment

**POST** `/articles/{articleId}/comments`

Create a new comment for an article.

**Path parameter:**

- `articleId` — Article ID (number)

**Headers:**

- `Content-Type: application/json`

**Body:**

```json
{
    "author": "tank11110",
    "content": "Hello!"
}
```

**Status codes**

- `201 Created`
- `404 Not Found`

**Success Response:**

```json
{
    "data": {
        "id": 1,
        "author": "tank11110",
        "content": "Hello!",
        "createdAt": "2025-01-01T00:00:00.000Z"
    }
}
```

<br>

## Common Error Response Format

### 404

```json
{
    "statusCode": 404,
    "message": "Article 99 not found",
    "error": "Not Found"
}
```
