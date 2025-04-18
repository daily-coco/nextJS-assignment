"use client";
import { useRouter } from "next/navigation"
import styles from "../styles/backbutton.module.css";

export default function BackButton(){
    const router = useRouter();   
    return (
        <div className={styles.btnWrap}>
            <button type="button"
                className={styles.btnBack}
                onClick={()=>{
                    if(window.history.length > 1) {
                        router.back()
                    } else {
                        router.push('/');
                    }
                }}
            >Go Back </button>
        </div>
    )
}

