import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Contents() {
  return (
    <main className={styles.title}>
      <h1 className={styles.title}>MattLawz</h1>
      <p className={styles.description}>Fullstack Developer</p>
      <div className={styles.card}>
        <Link href="https://github.com/mattlawz">
          <a target="_blank" rel="noreferer">
            <Image
              src="/github.svg"
              alt="Github"
              width={50}
              height={50}
              className={styles.hover}
            />
          </a>
        </Link>{" "}
        <Link href="https://discord.com/users/358778308747460610">
          <a>
            <Image
              src="/discord.svg"
              alt="Discord"
              width={50}
              height={50}
              className={styles.hover}
            />
          </a>
        </Link>{" "}
        <Link href="https://github.com/MattLawz/portfolio/blob/main/donate.md">
          <a>
            <Image
              src="/bitcoin.svg"
              alt="Donate"
              width={50}
              height={50}
              className={styles.hover}
            />
          </a>
        </Link>{" "}
        <Link href="mailto:matt@mattlawz.dev">
          <a>
            <Image
              src="/email.svg"
              alt="Email"
              width={50}
              height={50}
              className={styles.hover}
            />
          </a>
        </Link>
      </div>
      <div className={styles.secondcard}>
        <Link href="https://en.wikipedia.org/wiki/HTML">
          <a target="_blank" rel="noreferer">
            <Image
              src="/html.svg"
              alt="HTML"
              width={50}
              height={50}
              className={styles.hover}
            />
          </a>
        </Link>{" "}
        <Link href="https://en.wikipedia.org/wiki/CSS">
          <a target="_blank" rel="noreferer">
            <Image
              src="/css.svg"
              alt="CSS"
              width={50}
              height={50}
              className={styles.hover}
            />
          </a>
        </Link>{" "}
        <Link href="https://en.wikipedia.org/wiki/PHP">
          <a target="_blank" rel="noreferer">
            <Image
              src="/php.svg"
              alt="PHP"
              width={50}
              height={50}
              className={styles.hover}
            />
          </a>
        </Link>{" "}
        <Link href="https://en.wikipedia.org/wiki/JavaScript">
          <a target="_blank" rel="noreferer">
            <Image
              src="/javascript.svg"
              alt="JavaScript"
              width={50}
              height={50}
              className={styles.hover}
            />
          </a>
        </Link>{" "}
        <Link href="https://en.wikipedia.org/wiki/TypeScript">
          <a target="_blank" rel="noreferer">
            <Image
              src="/typescript.svg"
              alt="TypeScript"
              width={50}
              height={50}
              className={styles.hover}
            />
          </a>
        </Link>{" "}
        <Link href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)">
          <a target="_blank" rel="noreferer">
            <Image
              src="/csharp.svg"
              alt="cSharp"
              width={50}
              height={50}
              className={styles.hover}
            />
          </a>
        </Link>{" "}
        <Link href="https://en.wikipedia.org/wiki/Lua_(programming_language)">
          <a target="_blank" rel="noreferer">
            <Image
              src="/lua.svg"
              alt="Lua"
              width={50}
              height={50}
              className={styles.hover}
            />
          </a>
        </Link>{" "}
        <Link href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">
          <a target="_blank" rel="noreferer">
            <Image
              src="/react.svg"
              alt="React"
              width={50}
              height={50}
              className={styles.hover}
            />
          </a>
        </Link>{" "}
        <Link href="https://en.wikipedia.org/wiki/Next.js">
          <a target="_blank" rel="noreferer">
            <Image
              src="/next.svg"
              alt="Next"
              width={50}
              height={50}
              className={styles.hover}
            />
          </a>
        </Link>{" "}
      </div>
    </main>
  );
}
