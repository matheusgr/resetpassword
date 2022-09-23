import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Private from '../auth/private'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Guardians - Ferramentas</title>
        <meta name="description" content="Ferramentas para manutenção de contas/LCC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div >
          <div>Ferramentas dos guardians para o LCC</div>
          <hr />
          <Private />
        </div>
      </main>
    </div>
  )
}
