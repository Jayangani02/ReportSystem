'use client';
import { useState } from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState('reports');
  const [expandedMenu, setExpandedMenu] = useState([]);

  const toggleSubmenu = (id) => {
    setExpandedMenu((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', path: '/' },
    { id: 'all-orders', label: 'All Orders', icon: '🛒', path: '/orders' },
    { id: 'branch-deposits', label: 'Branch Deposits', icon: '🏦', path: '/deposits' },
    {
      id: 'reports',
      label: 'Reports',
      icon: '📈',
      path: '/reports',
      submenu: [
        {
          id: 'hr-report',
          label: 'HR',
          submenu: [
            {
              id: 'employee-report',
              label: 'Employee Report',
              path: '/reports/hr/employees',
            },
          ],
        },
        { id: 'delivery-report', label: 'Order', path: '/reports/delivery' },
      ],
    },
    { id: 'branch-operations', label: 'Branch Operations', icon: '🏢', path: '/branch-operations' },
    { id: 'return-operations', label: 'Return Operations', icon: '↩️', path: '/return-operations' },
    { id: 'general', label: 'General', icon: '⚙️', path: '/general' },
    { id: 'site-admin', label: 'Site Admin', icon: '👤', path: '/admin' },
    { id: 'my-business', label: 'My Bussiness', icon: '💼', path: '/business' },
  ];

  // Recursive Menu Renderer ✅
  const renderMenu = (items, level = 0) => (
    <div className={level > 0 ? styles.submenu : styles.nav}>
      {items.map((item) => (
        <div key={item.id}>
          <div
            className={`${styles.menuItem} ${
              activeMenu === item.id ? styles.active : ''
            }`}
            style={{ paddingLeft: `${20 * level}px` }}
            onClick={() => {
              setActiveMenu(item.id);
              if (item.submenu) toggleSubmenu(item.id);
            }}
          >
            {item.icon && <span className={styles.icon}>{item.icon}</span>}
            <span className={styles.label}>{item.label}</span>
            {item.submenu && (
              <span className={styles.arrow}>
                {expandedMenu.includes(item.id) ? '▼' : '▶'}
              </span>
            )}
          </div>

          {item.submenu && expandedMenu.includes(item.id) &&
            renderMenu(item.submenu, level + 1)}
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <h2>KOOMBIYO DELIVERY</h2>
      </div>
      {renderMenu(menuItems)}
    </div>
  );
}
