'use client';
import React, { useState } from 'react';

const Sidebar = ({ currentPage, setPage }) => {
  const [reportsOpen, setReportsOpen] = useState(true);

  return (
    <aside className="w-64 h-screen bg-card text-text-secondary">
      <div className="px-3 py-4">
        <a
          onClick={() => setPage('HR')}
          className="flex items-center mb-5 cursor-pointer text-text-primary"
        >
          <svg
            className="w-8 h-8 mr-2 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
          <span className="text-xl font-semibold">Koombiyo</span>
        </a>

        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setReportsOpen(!reportsOpen)}
              className="flex w-full items-center p-2 rounded-lg hover:bg-gray-700 text-left"
            >
              <svg
                className="w-6 h-6 mr-2 text-text-secondary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
              </svg>
              Reports
            </button>

            {reportsOpen && (
              <ul className="pl-6 mt-2 space-y-2">
                <li>
                  <button
                    onClick={() => setPage('HR')}
                    className={`flex items-center p-2 rounded-lg w-full ${
                      currentPage === 'HR'
                        ? 'bg-secondary text-white'
                        : 'hover:bg-gray-700 text-text-secondary'
                    }`}
                  >
                    HR Report
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setPage('ORDER')}
                    className={`flex items-center p-2 rounded-lg w-full ${
                      currentPage === 'ORDER'
                        ? 'bg-secondary text-white'
                        : 'hover:bg-gray-700 text-text-secondary'
                    }`}
                  >
                    Delivery Report
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

