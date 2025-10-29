import { Download, Printer } from "lucide-react";
import './reports.module.css'

// Report Header Component
const ReportHeader = ({ title, onExport, onPrint }) => (
  <div className="flex items-center justify-between mb-6 p-6 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl shadow-lg">
    <h2 className="text-2xl font-bold text-white">{title}</h2>
    <div className="flex gap-3">
      <button
        onClick={onExport}
        className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
      >
        <Download className="w-4 h-4" /> Export
      </button>
      <button
        onClick={onPrint}
        className="flex items-center gap-2 px-4 py-2.5 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors shadow-md"
      >
        <Printer className="w-4 h-4" /> Print
      </button>
    </div>
  </div>
);
export default ReportHeader;