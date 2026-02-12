import { neon } from '@neondatabase/serverless';

// Lazy initialize Neon SQL client
let sqlInstance: ReturnType<typeof neon> | null = null;

function getSql() {
  if (!sqlInstance) {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      throw new Error('DATABASE_URL environment variable is not set');
    }
    sqlInstance = neon(databaseUrl);
  }
  return sqlInstance;
}

// Types
export interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: Date;
}

export interface NewContact {
  name: string;
  email: string;
  message: string;
}

/**
 * Initialize database schema
 * Call this once to create the table
 */
export async function initDatabase(): Promise<void> {
  await getSql()`
    CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
  `;
}

/**
 * Add a new contact with name, email, and message
 */
export async function addContact(name: string, email: string, message: string): Promise<Contact> {
  const result = await getSql()`
    INSERT INTO contacts (name, email, message)
    VALUES (${name}, ${email}, ${message})
    RETURNING id, name, email, message, created_at
  `;
  
  return (result as unknown as Contact[])[0];
}

/**
 * Get all contacts ordered by creation date (newest first)
 */
export async function getAllContacts(): Promise<Contact[]> {
  const result = await getSql()`
    SELECT id, name, email, message, created_at
    FROM contacts
    ORDER BY created_at DESC
  `;
  
  return result as Contact[];
}

/**
 * Get contacts by email
 */
export async function getContactsByEmail(email: string): Promise<Contact[]> {
  const result = await getSql()`
    SELECT id, name, email, message, created_at
    FROM contacts
    WHERE email = ${email}
    ORDER BY created_at DESC
  `;
  
  return result as Contact[];
}

/**
 * Delete a contact by ID
 */
export async function deleteContact(id: number): Promise<void> {
  await getSql()`
    DELETE FROM contacts
    WHERE id = ${id}
  `;
}

export { getSql as sql };
