import { DEFAULT_REDIRECT, PUBLIC_ROUTES, ROOT } from '@/routes'
import NextAuth from 'next-auth'
import authConfig from './auth.config'

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { nextUrl } = req

  const isAuthenticathed = !!req.auth
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname)

  if (isPublicRoute && isAuthenticathed) {
    return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl))
  }

  if (!isPublicRoute && !isAuthenticathed) {
    const redirect = new URL(ROOT, nextUrl).href
    return Response.redirect(redirect)
  }
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
