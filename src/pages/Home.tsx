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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac venenatis dolor. Nunc at egestas orci. Sed tristique gravida leo, nec pellentesque mi porta sit amet. Sed tincidunt velit non ornare imperdiet. Cras vel nulla sodales, porttitor magna sit amet, placerat ligula. Integer eleifend maximus vulputate. Curabitur consectetur justo diam, in efficitur risus dapibus id. Praesent malesuada tristique odio eu tincidunt. Curabitur ac risus ut dui vestibulum consectetur. Curabitur risus massa, suscipit a dui quis, bibendum elementum purus. Pellentesque ac augue risus.</p>
                    </div>
                </section>
            </div>
        </div>
    )
}