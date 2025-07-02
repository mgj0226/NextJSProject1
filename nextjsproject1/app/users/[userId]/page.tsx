import { getUsers } from "@/lib/getUsers/getUsers";
import { notFound } from "next/navigation";

// export default async function Userpage({
//     params,
// } : {
//     // params: Promise<{ userId: string; }>;
//     params: { userId: string; };
// }) {
//     const { userId } = await params;
//     const users = await getUsers();

//     return (
//         <div>
//             {" "}
//             <h1>User Details</h1>
//             <p>User ID: {userId}</p>
//             {" "}
//         </div>
//     )
// }

// not just id
export default async function Userpage({
    params,
}: {
    params: { userId: string };
}) {
    const { userId } = params;
    const users = await getUsers();
    const user = users.find((user: { id: number }) => user.id === parseInt(userId));

    // if (!user) {
    //     return <div>User not found</div>;
    // }
    //use next.js not found function
    if (!user) {
        notFound();
    }

    return (
        <div>
            <h1>User Details</h1>
            <p>User ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}