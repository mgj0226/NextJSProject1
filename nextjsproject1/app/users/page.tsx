import { getUsers } from "@/lib/getUsers/getUsers";

export default async function Users() {
    // const data = await fetch("https://jsonplaceholder.typicode.com/users");
    // const users = await data.json();
    const users = await getUsers();
    if (!users || users.length === 0) {
        return <div>No users found</div>;
    }

    return (
        <div>
            {" "}
            <h1>Users List</h1>
            <ul>
                {users.map((user: { id: number; name: string }) => (
                    <li key={user.id}>
                        <h3>{user.name}</h3>
                    </li>
                ))}
            </ul>{" "}
        </div>
    )
}