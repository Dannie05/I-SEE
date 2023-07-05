import Head from 'next/head'
// import Image from 'next/image'
import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import "bootstrap/dist/css/bootstrap.min.css"
export const name = 'Marcel Uchenna'
export const siteTitle = "Recharge profit"
export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {

  return (
    <div className={`${styles.container} dark:bg-black dark:text-silver  ease-in-out duration-1000 min-h-screen flex flex-col items-center justify-center `}>
      <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
              <link rel="manifest" href="/favicon/site.webmanifest"/>
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* <header className={styles.header}>
        {home ? (
          <>
            <span className='absolute top-2 left-2 pb-4'>
              <Image
                src="/images/recharge.jpg"
                className={`${utilStyles.borderCircle}`}
                height={50}
                width={50}
                alt={name}
              />
            </span>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={70}
                width={70}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingMd}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header> */}
      <main>
        {children}
      </main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>

        </div>
      )}
    </div>
  )
}