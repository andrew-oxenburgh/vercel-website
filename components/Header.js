import Link from "next/link";
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    {/*<MenuIcon />*/}
                </IconButton>
                <Link href="..">
                    <Typography variant="h6">
                        Andrew Oxenburgh's Blog
                    </Typography>
                </Link>
                <Link href="/">
                    <Button color="inherit">Home</Button>
                </Link>
                <Link href="/projects">
                    <Button color="inherit">Projects</Button>
                </Link>
                <Link href="/about">
                    <Button color="inherit">About</Button>
                </Link>
                <Link href="/components">
                    <Button color="inherit">Components</Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
}
