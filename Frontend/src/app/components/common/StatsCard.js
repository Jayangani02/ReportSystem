// src/components/Common/StatsCard.js
import styles from './StatsCard.module.css';

export default function StatsCard({ label, value, color }) {
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
}