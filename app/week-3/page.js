import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="p-5 bg-indigo-950 min-w-screen min-h-screen">
            <h1 className="text-4xl font-bold ">Shopping List</h1>
            <ItemList/>
        </main>
    );
}