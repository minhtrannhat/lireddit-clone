# Lireddit - a Reddit clone

Based largely on Ben Awad Full Stack tutorial at https://www.youtube.com/watch?v=I6ypD7qv3Z8&t=2374s

## Local Installation

- Dependencies for the backend

  - yarn
  - node
  - postgresql
  - redis

- Configuration Steps

  - Install all the dependencies
  - Run `createdb lireddit` to create the database.
  - Open the `lireddit-server` folder, navigate to `mikro-orm.config.ts` to change the username and password of your postgresql user (! must be a super user).
  - Run `yarn install` inside `lireddit-server` to install dependencies for the backend.

- Note for Testing

  ~~Comment out the line `await orm.getMigrator().up()` to avoid `TableExistException` after the first run.~~

## Checklist

- [ ] start `postgresql`
- [ ] start `redis`
- [ ] run `yarn dev` to start the backend

## Technical write up

### Why use an ORM (Object Relational Mapping) ?

Orm is basically just a way we can interact with the Postgresql database using Typescript.
It abtracts the underlying SQL queries and let us manipulate the database using our programming language of choice.

### What is Migration ?

Migrations are a type of version control like git but for databases. You can modify the database schema. Migrations often come with the Schema Builder to manage the schema.

## Pro tip learned from Ben Awad: How to make types more specific in Typescript

Before:

```typescript
bob = {
  name: "bob", // <-- Typescript compiler thinks this is a String
};
```

But we want to make TS thinks this as type/property "name"

Solution: by casting the object/type as const

```typescript
bob = {
  name: "bob",
} as const;
```
## How to send graphql from the command line

1. Make sure your express server is up and running on port 4000.
2. *Optional*: install `jq` to prettify your terminal json output.
3.
```bash
curl '127.0.0.1:4000/graphql' \ # The express server address
      -X POST \ # the POST HTTP verb, GET is also supported too
      -H 'content-type: application/json' \ # the query is a part of a json object
      --data '{ "query": "{posts {createAt updatedAt id title}}"}' | jq # query for posts then pipes the data to jq for pretty output
```
## Ampersand in a type position in Typescript
The Ampersand `&` in a type position in Typescript means intersection types.
An intersection type combines multiples types into one.

## How cookies and sessions work

### Sessions explained

A session creates a file in a temporary directory on the backend server
that is available to all pages on the site. This makes sure that the user do not
have to re-login to the site when they're browsing the sub pages.

Sessions ends when the browser is closed or when the user leaves the site.

### The role of redis
`redis` is a key-value data structure (sort of like python dict). `redis` stores the user id
into the session object by `express-session`

### Cookies explained

The `express-session` will set a cookie on the user browser: `qwefasdfqoritoa12341`.
When the user makes a request, the cookie will be sent to the server. The server
then decrypt the cookie to check if there is a session matching of the cookie. If yes,
the data (userid) is used.
