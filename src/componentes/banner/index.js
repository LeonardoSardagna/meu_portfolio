import MenuPrincipal from "../paginaMenu/menu"
import styles from "./banner.module.css"

export default function Banner() {
    return (
        <>
            <MenuPrincipal />
            <section className={styles.banner}>
                <div className={styles.info}>
                    <h1>Olá, mundo!</h1>
                    <p>Meu nome é Leonardo, e desde 2023 venho construindo uma base sólida em tecnologia com o curso de <strong>Análise e Desenvolvimento de Sistemas</strong>. Tenho um <strong>interesse especial pelo desenvolvimento back-end</strong>, com ênfase em <strong>Java e Spring</strong>, onde busco aplicar práticas modernas para criar soluções escaláveis e eficientes. Além disso, possuo experiência em SQL, HTML, CSS, React e TypeScript, que complementam minha habilidade no desenvolvimento completo de aplicações. Estou constantemente ampliando meus conhecimentos em Java para dominar essas tecnologias e contribuir com soluções inovadoras.</p>
                </div>
                <div className={styles.imagem}>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/06f21a161921919.63cd7887d0a70.gif" alt=""></img>
                </div>
            </section>
        </>
    )
}