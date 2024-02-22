import '../styles/academicPage.scss'
import academicPage from '../assets/images/formacao_back.svg'

export function AcademicBackground(){
    return(
        <div id="academic-page">
            <section>
                <header>
                    <h1>Formação Acadêmica</h1>
                    <div className="line" style={{width: '100%', borderRadius: '0'}}></div>
                </header>
                <div className='academy-history'>
                    <p>Atualmente, em 2024, estou cursando o 2° ano do Ensino Médio integrado ao técnico em eletrônica no Instituto Federal de Educação, Ciência e Tecnologia de São Paulo (IFSP). Concluí o ensino fundamental em escolas da rede EMEF de São Paulo, onde também dei meus primeiros passos no mundo do desenvolvimento web ao fazer um curso de HTML e CSS em 2019. Como me interessei bastante pelo assunto, decidi aprofundar meus conhecimentos, aprendendo posteriormente JavaScript, Node.js e um pouco de PHP. Após dedicar um tempo aos estudos por meio de cursos online gratuitos, decidi investir em meu aprendizado adquirindo um curso da Danki Code, o qual me proporcionou uma base sólida em desenvolvimento web.</p>
                </div>
            </section>
            <aside>
                <img src={academicPage} alt="academic-background" />
            </aside>
        </div>
    )
}