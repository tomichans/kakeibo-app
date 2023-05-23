import Image from 'next/image'
import Link from 'next/link'
import style from './Header.module.css'

export default function Header() {
  return (
    <div className={style.container}>
      <Image
        className={style.logo}
        src="/1.jpg"
        alt="Logo"
        width={80}
        height={60}
      />
      <nav className={style.navigation}>
        <ul className={style.menu}>
          <li>
            <Link href="#" className={style.menuLink}>
              メニュー1
            </Link>
          </li>
          <li>
            <Link href="#" className={style.menuLink}>
              メニュー2
            </Link>
          </li>
          <li>
            <Link href="#" className={style.menuLink}>
              メニュー3
            </Link>
          </li>
          <li>
            <Link href="#" className={style.menuLink}>
              メニュー4
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
