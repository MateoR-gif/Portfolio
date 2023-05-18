export default function ProjectViewer({ info }) {
    const { largeName, description, url } = info;
    console.log(url)
    return (
        <div className="ProjectViewer">
            <h2>{largeName}</h2>
            <p>{description}</p>
            {url
                ? <a target="_blank" rel="noreferrer" href={url} >Github Repository</a>
                : null}
        </div>
    )
}
