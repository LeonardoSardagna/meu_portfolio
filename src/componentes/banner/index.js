import MenuPrincipal from "../paginaMenu/menu"
import styles from "./banner.module.css"

export default function Banner() {
    return (
        <>
            <MenuPrincipal />
            <section className={styles.banner}>
                <div className={styles.info}>
                    <h1>Olá, mundo!</h1>
                    <p>Sou estudante de Análise e Desenvolvimento de Sistemas e atuo como Estagiário de Infraestrutura de TI na T-Systems Brasil. Atualmente, estou em processo de aprendizagem em <strong>SAP Basis Administration</strong> e <strong>SAP HANA</strong>, além de possuir sólidos conhecimentos em <strong>bancos de dados SQL e PostgreSQL</strong>, e desenvolvimento com <strong>Java e Spring Boot</strong>. Estou aprofundando meus estudos em ambientes <strong>Linux e Windows</strong>, assim como em infraestrutura de TI de forma geral.</p>

                    <p>Minha passagem pelo <strong>Exército Brasileiro</strong> me proporcionou valores essenciais como determinação, disciplina e resiliência — princípios que aplico diariamente no ambiente de TI para lidar com desafios de forma proativa e comprometida.</p>
                </div>
                <div className={styles.imagem}>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/06f21a161921919.63cd7887d0a70.gif" alt=""></img>
                </div>
            </section>
        </>
    )
}