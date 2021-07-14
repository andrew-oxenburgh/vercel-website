import {Typography} from "@material-ui/core";

export default function BlogTitle({ children}) {
    return (
        <>
            <Typography>
                <h1 style={{fontWeight: 700}}>{children}</h1>
            </Typography>
        </>
    )
}
