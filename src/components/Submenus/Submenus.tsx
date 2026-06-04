import styles from './Submenus.module.scss';
import { navigation } from '../../data/navigation';

type SubmenusProps = {
  activeKey: string;
  onClose: () => void;
};

export const Submenus = ({ activeKey, onClose }: SubmenusProps) => {
  const submenu = navigation.find((item) => item.rel === activeKey);

  if (!submenu || !submenu.children) return null;

  return (
    <div
      className={`${styles.container} ${styles.isOpen}`}
      onMouseLeave={onClose}
    >
      <div className="container">
        <div className={`${styles.panel} ${styles.panelActive}`} aria-hidden="false">
          <div className={styles.grid}>
            <div className={styles.titleColumn}>
              <h3 className="display-xxs">{submenu.label} Submenu</h3>
            </div>
            <div className={styles.linksColumn}>
              <ul>
                {submenu.children.map((child) => (
                  <li key={child.label}>
                    <a href={child.href} onClick={onClose}>{child.label}</a>
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
