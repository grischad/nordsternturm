import classNames from 'classnames/bind';
import { gql } from '@apollo/client';
import Link from 'next/link';
import styles from './NavigationMenu.module.scss';
import stylesFromWP from './NavigationMenuClassesFromWP.module.scss';
import { flatListToHierarchical } from '@faustwp/core';
import { useConsentContext } from '../../lib/ConsentContext';

let cx = classNames.bind(styles);
let cxFromWp = classNames.bind(stylesFromWP);

export default function NavigationMenu({ menuItems, className }) {
  const { openModal } = useConsentContext();
  if (!menuItems) {
    return null;
  }

  // Based on https://www.wpgraphql.com/docs/menus/#hierarchical-data
  const hierarchicalMenuItems = flatListToHierarchical(menuItems);

  function renderMenu(items) {
    return (
      <ul >
        {items.map((item) => {
          const { id, path, label, children, cssClasses } = item;

          // @TODO - Remove guard clause after ghost menu items are no longer appended to array.
          if (!item.hasOwnProperty('__typename')) {
            return null;
          }

          return (
            <li key={id} className="text-sm mb-2" >
              <Link href={path ?? ''} legacyBehavior>{label ?? ''}</Link>
              {children.length ? renderMenu(children) : null}
            </li>
          );
        })}
        <li key="cookies" className="text-sm mb-2" >
          <a legacyBehavior onClick={() => openModal()}>Cookies</a>

        </li>
      </ul>
    );
  }

  return (
    <nav
      className={cx(['component', className])}
      role="navigation"
      aria-label={`${menuItems[0]?.menu?.node?.name} menu`}>
      {renderMenu(hierarchicalMenuItems)}
    </nav>
  );
}

NavigationMenu.fragments = {
  entry: gql`
    fragment NavigationMenuItemFragment on MenuItem {
      id
      path
      label
      parentId
      cssClasses
      menu {
        node {
          name
        }
      }
    }
  `,
};
