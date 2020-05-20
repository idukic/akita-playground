import { ID } from '@datorama/akita';

// add props
export interface Book {
  id: ID;
  name: string;
  author: string;
  year: string;
  description: string;
}

// Partial<Book> means all set as optional
export function createBook(params: Partial<Book>) {
  return {

  } as Book;
}
