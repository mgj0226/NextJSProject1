import { getUsers } from "@/lib/getUsers/getUsers";
import { notFound } from "next/navigation";

type User = {
    id: number;
    name: string;
    email?: string;
};

async function apirequest(user: User) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/hello`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: user.name }),
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
}

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

    if (!user) {
        notFound();
    }

    const apiData = await apirequest(user);

    return (
        <div>
            <h2>API Response</h2>
            <p>Hi, {apiData.message}</p>
            <h1>User Details</h1>
            <p>User ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}