import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    console.log(err)
    return(
        <div>
            <h1><b>{err.status}</b> : {err.statusText} </h1>
            <h1>OOPS!!!</h1>
            <h2>Something Went Wrong</h2>
            <h3> {err.data} </h3>
        </div>
    )
}

export default Error;