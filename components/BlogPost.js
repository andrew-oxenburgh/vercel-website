import Link from "next/link";
import {HeadPost} from './HeadPost'
import {Breadcrumbs, Card, CardContent, CardHeader, Typography} from "@material-ui/core";

export default function BlogPost({ children, meta}) {
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="textPrimary" href="/">
                    Home
                </Link>
                <Link color="textPrimary" href="#">
                    {meta.title}
                </Link>
            </Breadcrumbs>

            {/*<HeadPost meta={meta} isBlogPost/>*/}
            <article>
                <Card variant="outlined" style={{width: 640}}>
                    <CardHeader
                        title={meta.title}
                        subheader={meta.date + ' ☕ ' + meta.readTime + ' min read'}
                    />
                    <CardContent>
                        <Typography>
                            {children}
                        </Typography>
                    </CardContent>
                </Card>
            </article>
        </>
    )
}
