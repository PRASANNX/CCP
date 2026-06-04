import styles from './Submenus.module.scss';
import { navigation } from '../../data/navigation';

interface SubmenusProps {
  activeSubmenu: string | null;
  onMouseEnter: () => void;
}

export const Submenus = ({ activeSubmenu, onMouseEnter }: SubmenusProps) => {
  const activeItem = navigation.find((item) => item.rel === activeSubmenu && item.children);

  if (!activeItem) return null;

  return (
    <div
      className={`${styles.container} ${styles.isOpen}`}
      onMouseEnter={onMouseEnter}
    >
      <div className="container">
        <div className={`${styles.panel} ${styles.panelActive}`} aria-hidden="false">
          <div className={styles.grid}>
            <div className={styles.titleColumn}>
              <h3 className="display-xxs">{activeItem.label} Submenu</h3>
            </div>
              <div className={styles.linksColumn}>
                <ul>
                  {activeItem.children?.map((child) => (
                    <li key={child.label}>
                      <a href={child.href}>{child.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};
