export default function Item({name, quantity, category, onSelect}) {
    return (
        <li className="bg-indigo-900 my-5 p-3 max-w-[500px]" onClick={() => onSelect(name)}>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p>Buy {quantity} in {category}</p>
        </li>
    );
}