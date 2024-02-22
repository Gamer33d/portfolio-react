import '../styles/home.scss'
import myPhoto from '../assets/images/fotoGD.svg'
import instagramLogo from '../assets/images/instagram_icon.svg'
import discordLogo from '../assets/images/discord_icon.svg'
import githubLogo from '../assets/images/github_icon.svg'
import gmailLogo from '../assets/images/email_icon.svg'

export function Home(){
    return(
        <div id="page-home">
            <div className="content">
                <section className="author-card">
                    <img src={myPhoto} alt="Foto do Gamer33d" />
                    <div className='author-information'>
                        <h1>Guilherme Dalbeni Nascimento</h1>
                        <h2>Dev Fullstack</h2>
                        <span>01/03/2008</span>
                        <div className="social-media">
                            <div>
                                <img src={instagramLogo} alt="logo do instagram" />
                                <span>@guidalbeni</span>
                            </div>
                            <div>
                                <img src={discordLogo} alt="logo do discord" />
                                <span>gamer33d</span>
                            </div>
                            <div>
                                <img src={githubLogo} alt="logo do github" />
                                <span>Gamer33d</span>
                            </div>
                            <div>
                                <img src={gmailLogo} alt="logo do gmail" />
                                <span>dalbenig@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='about-me-card'>
                    <div className="about-content">
                        <h1>Sobre Mim</h1>
                        <p>Me chamo Guilherme Dalbeni, sou da zona oeste de São Paulo e sempre fui apaixonado por programação, me aprofundei nela em 2020 com a pandemia. Sou uma pessoa bem persistente e resiliente, tento sempre manter a calma e entender os outros e as possíveis dificuldades que tenham. No entanto, às vezes comparo bastante minhas habilidades com as dos outros quando o assunto é programação. Gosto de testar e aprender coisas novas, sempre me mantendo atualizado no mundo da tecnologia. Mas também gosto de tirar aquele tempo de lazer em games. Resumindo, meus hobbies são me atualizar e jogar.</p>
                    </div>
                </section>
            </div>
        </div>
    )
}