# Lireddit - a Reddit clone

Based largely on Ben Awad Full Stack tutorial at https://www.youtube.com/watch?v=I6ypD7qv3Z8&t=2374s

## Local Installation

- Dependencies

  - yarn
  - node
  - postgresql

- Installation Steps

  - Install all the dependencies
  - Run `createdb lireddit` to create the database.
  - Open the `lireddit-server` folder, navigate to `mikro-orm.config.ts` to change the username and password of your postgresql user (! must be a super user).
  - Run `yarn install` to install dependencies.

- Note for Testing
  Comment out the line `await orm.getMigrator().up()` to avoid `TableExistException` after the first run.

## Technical write up

### Why use an ORM (Object Relational Mapping) ?

Orm is basically just a way we can interact with the Postgresql database using Typescript.
It abtracts the underlying SQL queries and let us manipulate the database using our programming language of choice

## Pro tip learned from Ben Awad: How to make types more specific in Typescript

Before:

```typescript
bob = {
  name: "bob", // <-- Typescript compiler thinks this is a String
};
```

But we want to make TS thinks this as type "name"

Solution: by casting the object/type as const

```typescript
bob = {
  name: "bob",
} as const;
```
