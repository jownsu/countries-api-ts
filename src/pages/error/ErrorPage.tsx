/* COMPONENTS */
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

/* STYLES */
import styles from "./ErrorPage.module.scss";

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div id={styles.error_page}>
            {
                isRouteErrorResponse(error) 
                ? <p>Page not found</p>
                : <p>Something went wrong.</p>
            }
        </div>
    )
}

export default ErrorPage