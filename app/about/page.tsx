import styles from "../../styles/about.module.css"
export const metadata = {
    title: "About",
};
  
export default function About(){
    return <>
        <h1 className={styles.title}>About</h1>
        <div className={styles.intro}>
            <p>Welcome to the official explorer for The New York Times Best Seller list explorer.<br/>We hope you enjoy your stay!</p>
        </div>
    </>
}