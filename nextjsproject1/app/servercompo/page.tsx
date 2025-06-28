import ButtonCompo from './buttoncompo';

export default async function ServerComponent() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json();

    return (
        <div>
            <div>Hello from the server component!</div>
            <ButtonCompo />
            <ul>
                {posts.slice(0, 5).map((post: { id: number; title: string }) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
}
// This is a server component that can fetch data and render it on the server side.
// It can be used to render static content or fetch data from an API and render it on the server side.
// Server components are rendered on the server and sent to the client as HTML.