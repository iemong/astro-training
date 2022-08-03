import Dexie, { Table } from 'dexie';

export interface User {
  id?: number;
  birthDay: string;
}

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  users!: Table<User>;

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      users: '++id, birthDay' // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();