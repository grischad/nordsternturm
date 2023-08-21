import classNames from 'classnames/bind';
import { Container, NavigationMenu } from '../../components';
import styles from './Footer.module.scss';
import Image from 'next/image';

let cx = classNames.bind(styles);

export default function Footer({ title, menuItems }) {
  const year = new Date().getFullYear();

  return (
    <footer className={cx('component') + " bg-[#2A2D30] text-[#D3D3D3] py-4"}>
      <Container>
        <Image
          src="/footer-preview.png"
          alt="Footer"
          layout="responsive"
          width={1518}
          height={401}
        />

        {/* <div class="grid grid-cols-2 grid-rows-2">
          <div class="col-span-1 row-span-2  relative bg-white">
            <Image
              src="/logo.png"
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />

          </div>
          <div class="col-span-1 row-span-1">
            menü
          </div>
          <div class="col-span-1 row-span-1">
            social
          </div>
        </div>
        <NavigationMenu menuItems={menuItems} />
        <p className={cx('copyright')}>{`${title} © ${year}`}</p> */}
      </Container>
    </footer>
  );
}
