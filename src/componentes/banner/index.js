import styles from "./banner.module.css"

export default function Banner() {
    return(
        <section className={styles.banner}>
            <div className={styles.info}>
                <h1>Olá, mundo!</h1>
                <p>Meu nome é Leonardo, Sempre fui apaixonado por tecnologia e tinha uma pulga atrás da orelha de como funcionava os sites e até mesmo os jogos por baixo dos panos. Em 2022, eu conheci esse mundo da programação, o encanto foi imediato, levando-me a querer me aprofundar sobre.</p>
            </div>
            <div className={styles.imagem}>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/06f21a161921919.63cd7887d0a70.gif" alt=""></img>
            </div>
        </section>
    )
}