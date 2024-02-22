import '../styles/myProjects.scss'

export default function MyProjects(){
    return(
        <div id="my-projects">
            <header>
                <h1>Certificados e Projetos</h1>
                <div className="line" style={{width: '70%'}}></div>
            </header>
            <main>
                <div className="certificados">
                    <h2>Certificados</h2>
                    <ul>
                        <li>
                            <a href="#">Programação 40hrs - Digital House</a>
                        </li>
                    </ul>
                </div>
                <div className="projects">
                    <h2>Projetos</h2>
                    <ul>
                        <li>
                            <a href='#'>Alta Taxi Bot</a>
                        </li>
                        <li>
                            <a href='#'>PicPou (chat de conversa)</a>
                        </li>
                        <li>
                            <a href="#">Site de Noticias</a>
                        </li>
                    </ul>
                </div>
                
            </main>
            <footer>
                <h1>Made with ❤ by Gamer33d (GD)</h1>
                <p>With React and Typescript.</p>
            </footer>
        </div>
    )
}