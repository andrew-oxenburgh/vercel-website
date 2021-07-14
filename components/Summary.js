import Link from 'next/link'
import {HeadPost} from './HeadPost'
import {Button, Typography} from "@material-ui/core";

export const Summary = ({ post }) => {
    const {
        link,
        module: { meta },
    } = post

    return (
        <article>
            <Typography>
                <HeadPost meta={meta}/>
                <Link href={'/blog' + link}>
                    <Button color="inherit">Read more →</Button>
                </Link>
            </Typography>
        </article>
    )
}
