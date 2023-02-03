import { SideBar } from '@/components/SideBar'
import '@/styles/globals.css'
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400']
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={roboto.className}>
        <SideBar>
          <Component {...pageProps} />
        </SideBar>
      </main>
    </>
  )
}
