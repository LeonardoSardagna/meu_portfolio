import MenuPrincipal from "../paginaMenu/menu"
import styles from "./banner.module.css"

export default function Banner() {
    return (
        <>
            <MenuPrincipal />
            <section className={styles.banner}>
                <div className={styles.info}>
                    <h1>Olá, mundo!</h1>
                    <p>Meu nome é Leonardo, iniciei minha trajetória na tecnologia em 2023, cursando <strong>Análise e Desenvolvimento de Sistemas</strong>. Desenvolvi um grande interesse pelo desenvolvimento web, aprofundando-me em <strong>HTML, CSS, JavaScript, React, TypeScript, Java , Spring e Banco de dados</strong>. Focado no desenvolvimento full-stack, busco dominar tanto front-end quanto back-end para criar soluções completas e eficientes. Confira alguns dos meus projetos:</p>
                </div>
                <div className={styles.imagem}>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/06f21a161921919.63cd7887d0a70.gif" alt=""></img>
                </div>
            </section>
        </>
    )
}