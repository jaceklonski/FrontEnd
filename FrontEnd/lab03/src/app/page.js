import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
    title: "This is a home page"
}

export default function Homepage() {
    return (
        <div>
            <h1>To jest strona główna</h1>

            <div style={{ width: 500, height: 200, position: 'relative' }}>

            </div>
        </div>
    );
};
