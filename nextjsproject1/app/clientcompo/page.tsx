"use client";
import React from "react";

export default function ClientComponent() {
    const [count, setCount] = React.useState(0);
    return(
        <div>
            <div>Hello from the client component!</div>
            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>
        </div>
    )
}

// This is a client component that can use React hooks and state.
// It can be used to create interactive components that can update the UI without a full page reload.
// Client components are rendered on the client and can use React features like state and effects.