import {Typography} from "@material-ui/core";

export const HeadPost = ({meta, isBlogPost}) => (
    <Typography>
        <h1 className={isBlogPost ? 'great-title' : null}>{meta.title}</h1>
        <div className='details'>
            {
                isBlogPost ? null : <p>{meta.description}</p>
            }
            <span>{meta.date}</span>
            <span role='img' aria-label='one coffee'>
        ☕ {meta.readTime + ' min read'}
      </span>
        </div>
    </Typography>
)
