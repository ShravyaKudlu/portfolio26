import { getAllContacts, initDatabase } from '@/lib/neon-database';
import { NextResponse } from 'next/server';

// Initialize database on first request
let initialized = false;

export async function GET() {
  try {
    // Initialize database if not already done
    if (!initialized) {
      await initDatabase();
      initialized = true;
    }

    const contacts = await getAllContacts();
    return NextResponse.json({ contacts }, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch contacts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}
