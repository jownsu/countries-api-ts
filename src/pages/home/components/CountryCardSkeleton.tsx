/* PLUGINS */
import { Skeleton } from "@mui/material"

/* STYLES */
import styles from "./CountryCardSkeleton.module.scss";

const CountryCardSkeleton = () => {
    return (
        <div className={styles.card_skeleton}>
            <Skeleton variant="rounded" height={160} width={"100%"} />

            <div>
                <Skeleton variant="text" sx={{ fontSize: "18px" }} width={"50%"} />
                <Skeleton variant="text" sx={{ fontSize: "14px" }} />
                <Skeleton variant="text" sx={{ fontSize: "14px" }} />
                <Skeleton variant="text" sx={{ fontSize: "14px" }} />
            </div>
        </div>
    )
}

export default CountryCardSkeleton