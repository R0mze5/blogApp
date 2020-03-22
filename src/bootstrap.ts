import { DB } from './db';

export async function bootstrap() {
  try {
    await DB.init();
    console.log('Database started');
  } catch (error) {
    console.log('Error:', error);
  }
}
