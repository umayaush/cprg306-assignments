import Link from "next/link";
export default function Page() {
  return (
    <main className="min-w-screen min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold rounded-lg bg-rose-950/75 p-6 mb-5">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <Link href="./week-2" className="text-xl font-semibold rounded-lg bg-rose-950/50 hover:bg-rose-950 py-3 px-10 mb-3">
        Link to Week-2
      </Link>
      <Link href="./week-3" className="text-xl font-semibold rounded-lg bg-rose-950/50 hover:bg-rose-950 py-3 px-10 mb-3">
        Link to Week-3
      </Link>
      <Link href="./week-4" className="text-xl font-semibold rounded-lg bg-rose-950/50 hover:bg-rose-950 py-3 px-10 mb-3">
        Link to Week-4
      </Link>
      <Link href="./week-5" className="text-xl font-semibold rounded-lg bg-rose-950/50 hover:bg-rose-950 py-3 px-10 mb-3">
        Link to Week-5
      </Link>
      <Link href="./week-6" className="text-xl font-semibold rounded-lg bg-rose-950/50 hover:bg-rose-950 py-3 px-10 mb-3">
        Link to Week-6
      </Link>
    </main>
  );
}