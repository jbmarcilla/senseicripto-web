import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';

  // Lista de bots de redes sociales que necesitan acceso
  const socialBots = [
    'facebookexternalhit',
    'facebookcatalog',
    'Facebot',
    'WhatsApp',
    'Twitterbot',
    'LinkedInBot',
    'Slackbot',
    'TelegramBot',
    'Pinterest',
    'Discordbot',
  ];

  // Verificar si es un bot de redes sociales
  const isSocialBot = socialBots.some(bot =>
    userAgent.toLowerCase().includes(bot.toLowerCase())
  );

  // Crear respuesta
  const response = NextResponse.next();

  // Si es un bot de redes sociales, agregar headers especiales
  if (isSocialBot) {
    response.headers.set('X-Robots-Tag', 'all');
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    response.headers.set('Access-Control-Allow-Origin', '*');
  }

  // Agregar headers generales
  response.headers.set('X-Content-Type-Options', 'nosniff');

  return response;
}

export const config = {
  matcher: [
    '/',
    '/robots.txt',
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
