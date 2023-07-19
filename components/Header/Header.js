import { useState } from 'react';
import { useRouter } from "next/router";
import classNames from 'classnames/bind';
import Link from 'next/link';
import { Container, NavigationMenu, SkipNavigationLink } from '../../components';
import styles from './Header.module.scss';

let cx = classNames.bind(styles);

export default function Header({
  title = 'Headless by WP Engine',
  description,
  menuItems
}) {
  const [isNavShown, setIsNavShown] = useState(false);
  const { locale: activeLocale, locales, asPath } = useRouter();

  const availableLocales = locales.filter((locale) => locale !== activeLocale);


  return (
    <header className={cx('component')}>
      <SkipNavigationLink />
      <ul>
        {availableLocales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={asPath} locale={locale}>
                <a className={styles.toggle}>{locale.toUpperCase()}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <Container>
        <div className={cx('navbar')}>
          <div className={cx('brand')}>
            <Link href="/">
              <a className={cx('title')}>{title}</a>
            </Link>
            {description && <p className={cx('description')}>{description}</p>}
          </div>
          <button
            type="button"
            className={cx('nav-toggle')}
            onClick={() => setIsNavShown(!isNavShown)}
            aria-label="Toggle navigation"
            aria-controls={cx('primary-navigation')}
            aria-expanded={isNavShown}
          >
            ☰
          </button>
          <NavigationMenu
            className={cx(['primary-navigation', isNavShown ? 'show' : undefined])}
            menuItems={menuItems}
          />
        </div>
      </Container>
    </header>
  );
}
