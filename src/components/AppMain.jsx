import PostCard from "./PostCard";
import PostsArray from "../data/data";
import Tag from "./Tags";
import style from "./AppMain.module.css";

const printPosts = (posts) => {
    return posts.map((curPost) => (
        <div className="col" key={curPost.id}>
            <PostCard
                image={curPost.image}
                title={curPost.title}
                tags={curPost.tags}
                content={curPost.content}
                published={curPost.published}
            />
        </div>
    ))
}

const AppMain = () => {
    const publishedPosts = PostsArray.filter(post => post.published);

    const allTags = {};

    // Uso 2 forEach per iterare sui post e raccogliere i tag distinti
    publishedPosts.forEach(post => {
        post.tags.forEach(tag => {
            allTags[tag] = true; // Aggiunge il tag all'oggetto (senza duplicati)
        });
    });

    const tagsList = Object.keys(allTags); // Trasformo l'oggetto in array

    return(
        <main>
            <section>
                <div className="row">
                    {publishedPosts.length > 0 ? printPosts(publishedPosts) : <p>Nessun Post disponibile</p>}
                </div>
            </section>
            <section className={style.tagSection}>
                <h3>Tag Distinti</h3>
                <div className={style.tagsList}>
                    {tagsList.map((tag) => (
                        <Tag tag={tag} />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default AppMain;