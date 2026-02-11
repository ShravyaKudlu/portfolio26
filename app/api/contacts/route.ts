import { getAllContacts } from '@/lib/database';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const contacts = getAllContacts();
    return NextResponse.json({ contacts }, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch contacts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}
