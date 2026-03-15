import { NextRequest, NextResponse } from 'next/server'

// Mock in-memory DB (sim Python backend)
let users = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'manager' }
]

export async function GET() {
  return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const newUser = { id: crypto.randomUUID(), ...body }
  users.push(newUser)
  return NextResponse.json(newUser, { status: 201 })
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const body = await request.json()
  const index = users.findIndex(u => u.id === id)
  if (index === -1) return NextResponse.json({ error: 'User not found' }, { status: 404 })
  
  users[index] = { ...users[index], ...body }
  return NextResponse.json(users[index])
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const index = users.findIndex(u => u.id === id)
  if (index === -1) return NextResponse.json({ error: 'User not found' }, { status: 404 })
  
  users.splice(index, 1)
  return NextResponse.json({ success: true })
}

