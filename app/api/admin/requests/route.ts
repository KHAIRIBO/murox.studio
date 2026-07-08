import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { isAuthenticated } from '@/lib/auth'

export async function GET() {
  try {
    const auth = await isAuthenticated()
    if (!auth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const passcode = process.env.DB_RPC_PASSCODE || ''
    const { data, error } = await supabase
      .rpc('get_project_requests', { passcode })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ requests: data })
  } catch (error: any) {
    console.error('Admin requests GET error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
