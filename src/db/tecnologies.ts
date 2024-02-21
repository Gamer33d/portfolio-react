import reactLogo from '../assets/images/tecnlogiesLogo/react_logo.svg'
import webLogo from '../assets/images/tecnlogiesLogo/webLogo.svg'
import jsLogo from '../assets/images/tecnlogiesLogo/jsLogo.svg'
import tsLogo from '../assets/images/tecnlogiesLogo/tsLogo.svg'
import nodeLogo from '../assets/images/tecnlogiesLogo/nodeLogo.svg'
import phpLogo from '../assets/images/tecnlogiesLogo/phpLogo.svg'
import dbLogo from '../assets/images/tecnlogiesLogo/dbLogo.svg'
import luaLogo from '../assets/images/tecnlogiesLogo/luaLogo.svg'

type TecnologyObject = {
    logo?: string;
    name: string;
    myKnowledge: string;
}


export const tecnologies: TecnologyObject[] = [
    {
        name: "HTML & CSS",
        logo: webLogo,
        myKnowledge: "Meu conhecimento em HTML e CSS remonta a alguns anos atrás, quando fiz um curso sobre o assunto. Com o passar do tempo, adquiri experiência e hoje me considero um profissional que está ficando experiente na ferramenta."
    },
    {
        name: "Javascript",
        logo: jsLogo,
        myKnowledge: "JavaScript foi a primeira linguagem que aprendi, o que me fez desenvolver um grande apreço por ela. Comecei a estudar JavaScript quase simultaneamente ao HTML e CSS, há cerca de cinco anos. Desde então, adquiri familiaridade tanto com o desenvolvimento front-end quanto com o back-end."
    },
    {
        name: "Typescript",
        logo: tsLogo,
        myKnowledge: "Comecei recentemente a estudar TypeScript, revisando alguns intensivões e cursos antigos, e estou me adaptando rapidamente. Uma prova disso é este site, que foi produzido inteiramente com React e TypeScript."
    },
    {
        name: "React",
        logo: reactLogo,
        myKnowledge: "Minha experiência com React é intermediária, possuo domínio dos conceitos principais da ferramenta e consigo desenvolver websites profissionais com ela. Sempre estou em busca de aprimoramento, buscando novos conhecimentos e acompanhando as últimas tendências para oferecer soluções cada vez mais eficazes e modernas."
    },
    {
        name: "NodeJs",
        logo: nodeLogo,
        myKnowledge: "Considero-me um excelente profissional em Node.js, com uma vasta experiência na criação de bots para o Discord utilizando discord.js, além de diversos APIs e sites utilizando Express. Estou ciente de que existem tecnologias mais recentes para esse tipo de aplicação, como o fastify e já estou estudando-as para adquirir experiência nelas."
    },
    {
        name: "PHP",
        logo: phpLogo,
        myKnowledge: "PHP foi a primeira linguagem server-side que aprendi, porém não tive tanta prática com ela. Por isso, me considero um iniciante nessa área. No entanto, estou disposto a me dedicar ao máximo para aprender e me tornar mais experiente nela, assim como fiz com o Node.js."
    },
    {
        name: "Bancos de Dados",
        logo: dbLogo,
        myKnowledge: "Eu sei como utilizar diversos bancos de dados, tanto relacionais como MySQL, quanto não relacionais como MongoDB. Tenho experiência com um grande número de APIs e aplicações que utilizam esses e vários outros bancos de dados."
    },
    {
        name: "Lua",
        logo: luaLogo,
        myKnowledge: "Tenho um bom conhecimento em Lua, aprendi a linguagem para criar scripts em alguns jogos. No entanto, não me aprofundei tanto nela. Estou buscando fazer isso em breve, já que Lua possui uma grande portabilidade e é relativamente simples de ser utilizada."
    }
    
]