import { Migration } from '@mikro-orm/migrations';

export class Migration20210508042639 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" rename column "create_at" to "created_at";');
  }

}
