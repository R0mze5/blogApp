import * as SQLite from 'expo-sqlite';
import { IPost, TId } from 'types/posts';

const db = SQLite.openDatabase('post.db');

export class DB {
  static init = () => {
    // т.к. построекно всё на callback, то переделаем в Promise
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY NOT NULL, text TEXT NOT NULL, img TEXT, date TEXT , booked INT)',
          [],
          resolve,
          // (_, err) => reject(err),
        );
      });
    });
  };

  static getPosts() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM posts',
          [],
          (_, result) => resolve(result.rows._array),
          // (_, err) => reject(err),
        );
      });
    });
  }

  static createPost({ text, date, img }: IPost) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT INTO posts (text, date, booked, img) VALUES (?, ? , ? ,?)`,
          [text, date, 0, img],
          (_, result) => resolve(result.insertId),
          // (_, err) => reject(err),
        );
      });
    });
  }

  static updatePost({ id, booked }: IPost) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `UPDATE posts SET booked = ? WHERE id = ?`,
          [booked ? 0 : 1, id],
          resolve,
          // (_, err) => reject(err),
        );
      });
    });
  }

  static removePost(id: TId) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(`DELETE FROM posts WHERE id = ?`, [id], resolve, (_, err) => reject(err));
      });
    });
  }
}
