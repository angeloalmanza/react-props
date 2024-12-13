import style from './Tags.module.css'

const tagColors = {
    html: style.html,
    css: style.css,
    js: style.js,
    php: style.php,
};

const Tag = ({ tag }) => {
    // Ottengo la classe corrispondente al tag
    const tagClass = tagColors[tag.toLowerCase()] || style.default;

    return (
        <span className={`${style.tag} ${tagClass}`}>
            {tag}
        </span>
    );
};

export default Tag;