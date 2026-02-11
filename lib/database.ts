import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'data', 'contacts.db');

let db: Database.Database | null = null;

export function getDatabase(): Database.Database {
  if (!db) {
    db = new Database(dbPath);
    db.exec(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
  return db;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export function addContact(name: string, email: string, message: string): Contact {
  const db = getDatabase();
  const stmt = db.prepare('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)');
  const result = stmt.run(name, email, message);
  
  return {
    id: result.lastInsertRowid as number,
    name,
    email,
    message,
    created_at: new Date().toISOString()
  };
}

export function getAllContacts(): Contact[] {
  const db = getDatabase();
  const stmt = db.prepare('SELECT * FROM contacts ORDER BY created_at DESC');
  return stmt.all() as Contact[];
}
