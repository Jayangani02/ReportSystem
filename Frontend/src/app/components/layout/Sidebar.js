// src/components/Layout/Sidebar.js
'use client';
import { useState } from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState('reports');
  const [expandedMenu, setExpandedMenu] = useState('reports');

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
        { id: 'hr-report', label: 'HR', path: '/reports/hr' },
        { id: 'delivery-report', label: 'Delivery', path: '/reports/delivery' },
      ],
    }, //new add  sub menu
    { id: 'branch-operations', label: 'Branch Operations', icon: '🏢', path: '/branch-operations' },
    { id: 'return-operations', label: 'Return Operations', icon: '↩️', path: '/return-operations' },
    { id: 'general', label: 'General', icon: '⚙️', path: '/general' },
    { id: 'site-admin', label: 'Site Admin', icon: '👤', path: '/admin' },
    { id: 'my-business', label: 'My Bussiness', icon: '💼', path: '/business' },
  ];

  const toggleSubmenu = (id) => {
    setExpandedMenu(expandedMenu === id ? null : id);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <h2>KOOMBIYO DELIVERY</h2>
      </div>
      <nav className={styles.nav}>
        {menuItems.map((item) => (
          <div key={item.id}>
            <div
              className={`${styles.menuItem} ${
                activeMenu === item.id ? styles.active : ''
              }`}
              onClick={() => {
                setActiveMenu(item.id);
                if (item.submenu) toggleSubmenu(item.id);
              }}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
              {item.submenu && (
                <span className={styles.arrow}>
                  {expandedMenu === item.id ? '▼' : '▶'}
                </span>
              )}
            </div>
            {item.submenu && expandedMenu === item.id && (
              <div className={styles.submenu}>
                {item.submenu.map((subItem) => (
                  <div
                    key={subItem.id}
                    className={`${styles.submenuItem} ${
                      activeMenu === subItem.id ? styles.activeSubmenu : ''
                    }`}
                    onClick={() => setActiveMenu(subItem.id)}
                  >
                    {subItem.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}