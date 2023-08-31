import classNames from 'classnames/bind';
import { Container, NavigationMenu } from '../../components';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

let cx = classNames.bind(styles);

export default function Footer({ title, menuItems }) {
  const year = new Date().getFullYear();

  return (
    <footer className={cx('component') + " bg-[#2A2D30] text-[#D3D3D3] py-4 sticky top-full"}>
      <Container>


        <div class="flex gap-4 w-full justify-between">
          <div class="basis-2/5 relative">
            <Link href="https://www.nordsternturm.de/" target="_blank">
              <Image
                src="/logo.png"
                alt="Nordsternturm-Webseite"
                width={174}
                height={103}
                className="bg-white"
              />
            </Link>

          </div>
          <div>
            <div class="col-span-1 row-span-1 text-right">
              <NavigationMenu menuItems={menuItems} />

            </div>
            <div class="col-span-1 row-span-1 flex gap-4 items-center justify-end w-full">
              <Link href="https://www.facebook.com/Nordsternturm-154891985037185/" target="_blank">
                <Image
                  src="/facebook.png"
                  alt="Facebook"

                  width={32}
                  height={32}
                /></Link>
              <Link href="https://www.instagram.com/nordsternturmgelsenkirchen/" target="_blank">
                <Image
                  src="/instagram.png"
                  alt="Instagram"

                  width={32}
                  height={32}
                />
              </Link>
            </div>
          </div>
        </div>

        <p className="text-sm text-center my-4">{`${title} © ${year}`}</p>
      </Container>
    </footer>
  );
}
