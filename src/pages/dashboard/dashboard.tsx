import { useState } from "react";
import { Dashboard1, Dashboard2, Dashboard3, Dashboard4 } from "../../icons";
import { mockUsers } from "../../data/mockUsers";
import { UserMetricCard } from "../../components/userMetricCard/userMetricCard";
import { UsersTable } from "../../components/userTable/userTable";
import "./dashboard.scss";
import Pagination from "../../components/pagination/pagination";

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(100);

  const totalPages = Math.ceil(mockUsers.length / rowsPerPage);
  const paginatedUsers = mockUsers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (rows: number) => {
    setRowsPerPage(rows);
    setCurrentPage(1); // Reset to first page when changing rows per page
  };

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

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          rowsPerPage={rowsPerPage}
          totalItems={mockUsers.length}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </div>
    </div>
  );
}
