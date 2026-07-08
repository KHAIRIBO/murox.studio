import { cookies } from 'next/headers'

export async function isAuthenticated(): Promise<boolean> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('murox_admin_token')?.value
    const expectedToken = process.env.ADMIN_SESSION_TOKEN || 'murox_admin_authenticated_2024'
    return token === expectedToken
  } catch {
    return false
  }
}
