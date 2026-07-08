import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      firstName,
      lastName,
      howKnow,
      projectTypes,
      budget,
      details,
      email,
      whatsapp,
      instagram,
    } = body

    // Validation
    if (!firstName || !lastName || !howKnow || !projectTypes || !projectTypes.length || !budget) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!email && !whatsapp && !instagram) {
      return NextResponse.json(
        { error: 'Please provide at least one contact method (Email, WhatsApp, or Instagram)' },
        { status: 400 }
      )
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('project_requests')
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          how_know_us: howKnow,
          project_types: projectTypes,
          budget,
          details: details || '',
          email: email || '',
          whatsapp: whatsapp || '',
          instagram: instagram || '',
          status: 'new'
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data }, { status: 201 })
  } catch (error: any) {
    console.error('API Contact route error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
