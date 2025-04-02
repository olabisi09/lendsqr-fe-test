import { useState } from "react";
import { Dashboard1, Dashboard2, Dashboard3, Dashboard4 } from "../../icons";
import { mockUsers } from "../../data/mockUsers";
import { UserMetricCard } from "../../components/userMetricCard/userMetricCard";
import { UsersTable } from "../../components/userTable/userTable";
import "./dashboard.scss";

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(100);

  const totalPages = Math.ceil(mockUsers.length / rowsPerPage);
  const paginatedUsers = mockUsers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const metrics = [
    {
      icon: <Dashboard1 />,
      title: "USERS",
      value: "2,453",
      iconBgColor: "rgba(223, 24, 255, 0.1)",
      iconColor: "#DF18FF",
    },
    {
      icon: <Dashboard2 />,
      title: "ACTIVE USERS",
      value: "2,453",
      iconBgColor: "rgba(87, 24, 255, 0.1)",
      iconColor: "#5718FF",
    },
    {
      icon: <Dashboard3 />,
      title: "USERS WITH LOANS",
      value: "12,453",
      iconBgColor: "rgba(245, 95, 68, 0.1)",
      iconColor: "#F55F44",
    },
    {
      icon: <Dashboard4 />,
      title: "USERS WITH SAVINGS",
      value: "102,453",
      iconBgColor: "rgba(255, 51, 102, 0.1)",
      iconColor: "#FF3366",
    },
  ];

  return (
    <div className="users-page">
      <h1 className="page-title">Users</h1>

      <div className="metrics-container">
        {metrics.map((metric, index) => (
          <UserMetricCard
            key={index}
            icon={metric.icon}
            title={metric.title}
            value={metric.value}
            iconBgColor={metric.iconBgColor}
            iconColor={metric.iconColor}
          />
        ))}
      </div>

      <div className="table-container">
        <UsersTable users={paginatedUsers} />

        <div className="pagination">
          <div className="pagination-info">
            Showing
            <select
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
              className="rows-select"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            out of {mockUsers.length}
          </div>

          <div className="pagination-controls">
            <button
              className="pagination-button prev"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              &lt;
            </button>

            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={i}
                  className={`pagination-button ${
                    currentPage === pageNum ? "active" : ""
                  }`}
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </button>
              );
            })}

            {totalPages > 5 && <span className="pagination-ellipsis">...</span>}

            <button
              className="pagination-button next"
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
