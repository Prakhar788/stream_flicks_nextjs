import styles from '@/app/styles/common.module.css'
import Link from "next/link";
import Image from 'next/image';

const NotFound = () => {
    return (
        <section className={styles.container}>
            <div className={styles.error_page}>
            <Image src="./error.svg" width={500} height={500}/>
                
                <h2>Not Found</h2>
                <p>Could not find requested resource</p>
                <Link href="/">
                    <button>
                        Go to Home Page
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default NotFound;