// src/components/Reports/OrderReport.js
'use client';
import { useState } from 'react';
import styles from '../reports/OderReport.module.css';
import StatsCard from '../Common/StatsCard';

export default function OrderReport() {
  const [activeTab, setActiveTab] = useState('manage-clients');
  const [filterType, setFilterType] = useState('selection');
  const [collectDate, setCollectDate] = useState('collect');

  const statsData = [
    { label: 'Total Items', value: '0', color: 'blue' },
    { label: 'Total Delivered', value: '0', color: 'green' },
    { label: 'Total Returns', value: '0', color: 'orange' },
    { label: 'Total Pendings', value: '0', color: 'purple' },
    { label: 'Success Rate', value: '0%', color: 'teal' },
    { label: 'Return Rate', value: '0%', color: 'red' },
  ];

  const tabs = [
    { id: 'manage-clients', label: 'MY MANAGE CLIENTS' },
    { id: 'pending-status', label: 'PENDING STATUS' },
    { id: '7day-pending', label: '7 DAY PENDING STATUS' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h1>Order Report</h1>
      </div>

      <div className={styles.statsGrid}>
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className={styles.reportCard}>
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${
                activeTab === tab.id ? styles.activeTab : ''
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.filterSection}>
          <div className={styles.filterRow}>
            <div className={styles.filterGroup}>
              <label className={styles.radioGroup}>
                <input
                  type="radio"
                  value="selection"
                  checked={filterType === 'selection'}
                  onChange={(e) => setFilterType(e.target.value)}
                />
                <span>Only Selection</span>
              </label>
              <label className={styles.radioGroup}>
                <input
                  type="radio"
                  value="without"
                  checked={filterType === 'without'}
                  onChange={(e) => setFilterType(e.target.value)}
                />
                <span>Without Selection</span>
              </label>
            </div>

            <select className={styles.select}>
              <option>Select Client</option>
            </select>

            <select className={styles.select}>
              <option>Select Delivery Status</option>
            </select>

            <div className={styles.userIcon}>👤</div>

            <select className={styles.select}>
              <option>Select Branch</option>
            </select>
          </div>

          <div className={styles.filterRow}>
            <div className={styles.filterGroup}>
              <div className={styles.userIcon}>👤</div>
              <select className={styles.select}>
                <option>Select Rider</option>
              </select>
            </div>

            <div className={styles.filterGroup}>
              <div className={styles.userIcon}>📍</div>
              <select className={styles.select}>
                <option>Select Location</option>
              </select>
            </div>

            <div className={styles.filterGroup}>
              <label className={styles.radioGroup}>
                <input
                  type="radio"
                  value="collect"
                  checked={collectDate === 'collect'}
                  onChange={(e) => setCollectDate(e.target.value)}
                />
                <span>Collect Date</span>
              </label>
              <label className={styles.radioGroup}>
                <input
                  type="radio"
                  value="order"
                  checked={collectDate === 'order'}
                  onChange={(e) => setCollectDate(e.target.value)}
                />
                <span>Order Date</span>
              </label>
            </div>

            <input type="date" className={styles.dateInput} placeholder="From Date" />
          </div>

          <div className={styles.filterRow}>
            <input type="date" className={styles.dateInput} placeholder="To Date" />

            <button className={styles.searchBtn}>SEARCH</button>
            <button className={styles.exportBtn}>☁️</button>

            <div className={styles.pagination}>
              <span>10</span>
            </div>
          </div>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Order Date</th>
                <th>Waybill Id</th>
                <th>Customer Name</th>
                <th>Receiver Name</th>
                <th>Delivery Add</th>
                <th>Receiver Phone</th>
                <th>COD</th>
                <th>DEL Charge</th>
                <th>Status</th>
                <th>Client Remark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="10" className={styles.noData}>
                  No data available
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}