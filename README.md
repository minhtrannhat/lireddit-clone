# Lireddit - a Reddit clone

## Local Installation

- Dependencies

  - yarn
  - node
  - postgresql

- Installation Steps

  * Install all the dependencies
  * Run `createdb lireddit` to create the database.
  * Open the `lireddit-server` folder, navigate to `mikro-orm.config.ts` to change the username and password of your postgresql user (! must be a super user).
  * Run `yarn install` to install dependencies.

- Note for Testing
  Comment out the line `await orm.getMigrator().up()` to avoid `TableExistException` after the first run.
