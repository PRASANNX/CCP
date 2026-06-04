import styles from './Submenus.module.scss';
import { navigation } from '../../data/navigation';

interface SubmenusProps {
  activeSubmenu: string | null;
  onMouseEnter: () => void;
}

export const Submenus = ({ activeSubmenu, onMouseEnter }: SubmenusProps) => {
  return (
    <div
      className={`${styles.container} ${activeSubmenu ? styles.isOpen : ''}`}
      onMouseEnter={onMouseEnter}
      aria-hidden={!activeSubmenu}
    >
      <div className="container">
        {navigation.map((item) => {
          if (!item.children) return null;
          const isActive = activeSubmenu === item.rel;

          return (
            <div
              key={item.label}
              className={`${styles.panel} ${isActive ? styles.panelActive : ''}`}
              aria-hidden={!isActive}
            >
              <div className={styles.grid}>
                <div className={styles.titleColumn}>
                  <h3 className="display-xxs">{item.label} Submenu</h3>
                </div>
                <div className={styles.linksColumn}>
                  <ul>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a href={child.href}>{child.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
