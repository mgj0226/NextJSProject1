"use client";
export default function ButtonCompo() {
  return (
    // Button that show an alert when clicked
    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={() => alert("Client Component inside Server Component")}>
      Click Me
    </button>
  );
}