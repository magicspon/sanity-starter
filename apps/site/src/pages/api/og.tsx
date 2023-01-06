import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

const sans = fetch(
  new URL('../../fonts/AzoSans-Regular.ttf', import.meta.url),
).then((res) => res.arrayBuffer())
const serif = fetch(
  new URL('../../fonts/Lora-Medium.ttf', import.meta.url),
).then((res) => res.arrayBuffer())

export default async function og(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const [sansData, serifData] = await Promise.all([await sans, await serif])

  const hasTitle = searchParams.has('title')
  const title = hasTitle
    ? searchParams.get('title')?.slice(0, 100)
    : 'Capstar Advisers'
  const desc = searchParams.get('desc')

  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: '"lora"',
          backgroundColor: '#E4DFDC',
        }}
        tw="flex w-full h-full"
      >
        <div tw="flex flex-col justify-end p-8 h-full">
          <svg className="mb-auto block" width={300} viewBox="0 0 569.81 79.92">
            <path
              fill="currentColor"
              d="M41.83 13.31c11.7 0 20.88 6.93 22.32 16.86.16.95.32.95.91.95h13.29c.76 0 .76-.28.76-.38 0-14.32-13.07-29.54-37.29-29.54S1.44 17.47 1.44 39.9s16.98 38.71 40.38 38.71c21.6 0 37.29-11.83 37.29-28.13 0-.63-.89-.63-.9-.63h-12.9c-.85 0-1 0-1.16 1.08-1.58 9.61-10.13 15.57-22.32 15.57-14.73 0-25.42-11.19-25.42-26.6s10.92-26.59 25.42-26.59Zm92.22-10.83h-11.8L86.22 76.73c-.11.23-.2.43-.26.59h14.97q1.06 0 1.54-.95l4.62-9.75 4.81-10.54h.55l6.98 7.83h28.25l6.16 12.47q.48.95 1.55.95h14.97c-.06-.15-.14-.34-.26-.59L134.05 2.48Zm-20.76 50.33 7.87-16.2c2.64-5.4 5.33-13.56 5.36-13.64l.29-.89h2.66l.29.89c.03.08 2.72 8.24 5.36 13.64l7.88 16.2h-29.71ZM216.84 2.48H183.8c-.07.02-.23.17-.25.27v74.31c.02.08.17.23.26.25h14.44a.49.49 0 0 0 .25-.26V57.44h18.33c18.44 0 30.83-10.94 30.83-27.22S235.27 2.48 216.83 2.48Zm-1.42 43.62h-16.91V23.85l-9.79-8.89v-.37h26.7c10.51 0 17.3 6.13 17.3 15.62s-6.79 15.88-17.3 15.88Zm91.17-11.87-20.01-1.68c-7.03-.52-10.61-3.17-10.61-7.88 0-6.9 7.14-11.37 18.2-11.37 14.54 0 17.29 6.98 17.8 9.99.14.8.26.85 1.04.85h12.78c.71 0 1.16-.34 1.16-.89 0-10.66-8.57-22.06-32.64-22.06-16.03 0-33.29 7.67-33.29 24.51 0 7.74 3.98 17.29 22.94 18.84l20.13 1.68c10.01.84 11.51 5.86 11.51 8.78 0 5.56-5.05 11.5-19.24 11.5-11.99 0-18.85-3.96-20.37-11.76-.11-.55-.26-.89-1.31-.89h-12.51c-.67 0-1.16.43-1.16 1.02v1.03c0 13.37 14.54 22.71 35.35 22.71 23.61 0 34.18-12.25 34.18-24.38s-8.51-18.67-23.97-20Zm64.98-19.25v-.38h38.99c.12-.04.44-.37.51-.55V2.99c-.04-.12-.39-.46-.57-.51h-73.23c-.12.05-.47.39-.51.58v11.03c.05.12.39.47.58.51h29.11v62.46c.01.08.17.24.26.25h14.44c.08-.02.24-.17.26-.26V23.89l-9.82-8.91Zm79.87-12.5h-11.79l-36.03 74.25c-.12.23-.2.43-.26.59h14.97q1.06 0 1.54-.95l5.92-12.46 3.57-7.83h.55l6.98 7.83h28.19l6.16 12.47q.48.95 1.55.95h14.97c-.06-.15-.14-.34-.26-.59L451.44 2.48ZM430.7 52.81l13.53-30.73h2.66l13.52 30.73H430.7Zm137.33 23.98-.02-.03-13.03-19.1c-1.73-2.59-3.98-4.98-4-5l-.36-.38v-1.7l.87-.3c10.67-3.74 16.55-11.55 16.55-22 0-15.68-12.15-25.8-30.96-25.8H501.2c-.07.02-.23.17-.25.27v74.31c.02.08.17.23.26.25h14.44a.49.49 0 0 0 .25-.26v-24h18.63l16.14 23.53c.31.46.81.72.99.73h16.7c-.08-.14-.19-.31-.34-.52Zm-32.11-35.08h-20.01V23.85l-9.79-8.89v-.37h29.8c10.43 0 17.18 5.37 17.18 13.69s-6.58 13.43-17.18 13.43Z"
            />
          </svg>
          <div tw="flex text-6xl mb-8 mt-auto">{title}</div>
          <div style={{ fontFamily: '"azo"' }} tw="flex text-2xl">
            {desc}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'azo',
          data: sansData,
          style: 'normal',
        },
        {
          name: 'lora',
          data: serifData,
          style: 'normal',
        },
      ],
    },
  )
}
