import Link from "next/link";
export default function Header() {
  return (
    <>
      <h1>Utilitariapp</h1>
      <nav>
        <Link href={"./"}>Home</Link>
        <Link href={"./puttogether"}>Put Together</Link>
      </nav>
    </>
  );
}
