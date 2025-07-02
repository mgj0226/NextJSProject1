export async function getUsers() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!data.ok) {
        throw new Error("Failed to fetch users");
    }
    const users = await data.json();
    return users;
}
