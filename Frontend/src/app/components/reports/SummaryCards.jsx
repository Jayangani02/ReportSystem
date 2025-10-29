import { Users } from "lucide-react";
import './reports.module.css';
import '../../lib/data/mockData';

const SummaryCards = ({ stats = {} }) => {
  const { total = 0, active = 0, inactive = 0 } = stats;

  const cards = [
    { title: "Total Employees", value: total, color: "blue", icon: "👥" },
    { title: "Active Employees", value: active, color: "green", icon: "✅" },
    { title: "Inactive Employees", value: inactive, color: "red", icon: "❌" },
  ];

  const colorClasses = {
    blue: "text-blue-600 bg-blue-50 border-blue-200",
    green: "text-green-600 bg-green-50 border-green-200",
    red: "text-red-600 bg-red-50 border-red-200"
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {cards.map((card, i) => (
        <div 
          key={i} 
          className="bg-white p-6 rounded-xl shadow-sm border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          style={{ borderColor: card.color === 'blue' ? '#3b82f6' : card.color === 'green' ? '#10b981' : '#ef4444' }}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-600 mb-2">{card.title}</p>
              <p className={`text-4xl font-bold ${card.color === 'blue' ? 'text-blue-600' : card.color === 'green' ? 'text-green-600' : 'text-red-600'}`}>
                {card.value}
              </p>
            </div>
            <div className={`text-4xl p-3 rounded-lg ${colorClasses[card.color]}`}>
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SummaryCards;