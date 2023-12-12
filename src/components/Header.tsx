import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <h1>Utilitariapp</h1>
      <nav className="flex justify-evenly">
        <Link href={"./"}>
          <Image src="/toolbox.png" alt="homepage" width="97" height="40" />
        </Link>
        <Link href={"./puttogether"}>
          <Image
            src="/problem-solving.png"
            alt="put together app"
            width="97"
            height="40"
          />
        </Link>
      </nav>
    </>
  );
}
