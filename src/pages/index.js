import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ProjectName Status Page</title>
        <meta name="description" content="A boilerplate Status Page generated for Momentum users." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={`${styles.leftSide}`}>
          <div className={`${styles.leftSideOpacityShader}`}></div>
        </div>
        <div className={`${styles.rightSide}`}>
          <header>
            <Image src={'/logo.png'} width='60' height='60' />
            <h2>ProjectName Status Page</h2>
          </header>
          <div className={`${styles.generalInfoContainer}`}>
              <div className={`${styles.generalInfoTemplate}`}>
                <div className={`${styles.generalInfoTemplateIconContainer}`}>
                  <div className={`${styles.generalInfoTemplateIcon}`}>
                    <img src='/user.png'></img>
                  </div>
                  <p>Total Player Count</p>
                </div>
                <div className={`${styles.generalInfoTemplateText}`}>
                  N/A
                </div>
              </div>
              <div className={`${styles.generalInfoTemplate}`}>
                <div className={`${styles.generalInfoTemplateIconContainer}`}>
                  <div className={`${styles.generalInfoTemplateIcon}`}>
                    <img src='/server.png'></img>
                  </div>
                  <p>Total Active Servers</p>
                </div>
                <div className={`${styles.generalInfoTemplateText}`}>
                  N/A
                </div>
              </div>
              <div className={`${styles.generalInfoTemplate}`}>
                <div className={`${styles.generalInfoTemplateIconContainer}`}>
                  <div className={`${styles.generalInfoTemplateIcon}`}>
                    <img src='/momentum.png'></img>
                  </div>
                  <p>Momentum Version</p>
                </div>
                <div className={`${styles.generalInfoTemplateText}`}>
                    N/A
                </div>
              </div>
          </div>
          <div className={`${styles.serverListContainer}`}>
              <div className={`${styles.serverItemTemplate}`}>
                <div className={`${styles.serverItemTemplateIcon}`}>
                  <img src='/server.png'></img>
                </div>
                <div className={`${styles.serverItemTemplateText}`}>
                  <div className={`${styles.serverItemServerInfo}`}>
                    <p>Region: N/A</p>
                    <p>Gamemode: N/A</p>
                  </div>
                  <div className={`${styles.serverItemServerPlayers}`}>
                    <p>Players: 0/100</p>
                  </div>
                  <div className={`${styles.serverItemServerBadgeHolder}`}>
                    <div className={`${styles.badge}`} style={{'border': '2px solid rgb(226, 134, 44)'}}>
                      <img src='/in-progress.png'></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.serverItemTemplate}`}>
                <div className={`${styles.serverItemTemplateIcon}`}>
                  <img src='/server.png'></img>
                </div>
                <div className={`${styles.serverItemTemplateText}`}>
                  <div className={`${styles.serverItemServerInfo}`}>
                    <p>Region: N/A</p>
                    <p>Gamemode: N/A</p>
                  </div>
                  <div className={`${styles.serverItemServerPlayers}`}>
                    <p>Players: 0/100</p>
                  </div>
                  <div className={`${styles.serverItemServerBadgeHolder}`}>
                    <div className={`${styles.badge}`} style={{'border': '2px solid rgb(43, 190, 35)'}}>
                      <img src='/waiting.png'></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.serverItemTemplate}`}>
                <div className={`${styles.serverItemTemplateIcon}`}>
                  <img src='/server.png'></img>
                </div>
                <div className={`${styles.serverItemTemplateText}`}>
                  <div className={`${styles.serverItemServerInfo}`}>
                    <p>Region: N/A</p>
                    <p>Gamemode: N/A</p>
                  </div>
                  <div className={`${styles.serverItemServerPlayers}`}>
                    <p>Players: 0/100</p>
                  </div>
                  <div className={`${styles.serverItemServerBadgeHolder}`}>
                    <div className={`${styles.badge}`} style={{'border': '2px solid rgb(217, 25, 25)'}}>
                      <img src='/error.png'></img>
                    </div>
                  </div>
                </div>
              </div>
              <footer>
                <p>Status page designed for <Link href='https://github.com/Nexus-FN/Momentum/tree/main' style={{'color': 'rgb(29, 171, 214)'}}>Momentum</Link> users | Made with ❤️ by NexusFN</p>
              </footer>
          </div>
        </div>
      </main>
    </>
  )
}
