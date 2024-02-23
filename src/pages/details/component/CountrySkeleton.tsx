/* PLUGINS */
import { Skeleton } from "@mui/material";

/* STYLES */
import styles from "./CountrySkeleton.module.scss";

const CountrySkeleton = () => {
    return (
        <div className={styles.country_skeleton}>
            <Skeleton className={styles.img} variant="rounded" />

            <div className={styles.details_container}>
                <Skeleton className={styles.country_name} variant="text" sx={{ fontSize: "32px" }} />

                <div className={styles.details}>
                    <Skeleton variant="text" sx={{ fontSize: "16px" }} />
                    <Skeleton variant="text" sx={{ fontSize: "16px" }} />
                    <Skeleton variant="text" sx={{ fontSize: "16px" }} />
                    <Skeleton variant="text" sx={{ fontSize: "16px" }} />
                    <Skeleton variant="text" sx={{ fontSize: "16px" }} />
                    <Skeleton variant="text" sx={{ fontSize: "16px" }} />
                    <Skeleton variant="text" sx={{ fontSize: "16px" }} />
                    <Skeleton variant="text" sx={{ fontSize: "16px" }} />
                </div>
            </div>
        </div>
    )
}

export default CountrySkeleton