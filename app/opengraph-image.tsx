import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'SenseiCripto - Secretos para Invertir en Criptomonedas';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #7dd3fc, #ffffff, #fecaca)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            background: '#d4a574',
            borderRadius: '40px',
            padding: '60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            border: '8px solid rgba(139, 90, 43, 0.4)',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: '#451a03',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            SenseiCripto
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 'bold',
              color: '#7f1d1d',
              textAlign: 'center',
              lineHeight: 1.2,
            }}
          >
            Los Secretos para
            <br />
            Invertir en Criptomonedas
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#78350f',
              textAlign: 'center',
              marginTop: '30px',
              fontStyle: 'italic',
            }}
          >
            📜 Manuscrito Exclusivo
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
