import React, { useState } from "react";
import "./userTable.scss";
import { User } from "../../types/user";
import { EllipsisIcon, FilterIcon } from "../../icons";
import useOutsideClick from "../../hooks/useOutsideClick";

interface UsersTableProps {
  users: User[];
}

export const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const dropdownRef = useOutsideClick<HTMLDivElement>(() =>
    setActiveMenu(null)
  );

  const toggleMenu = (index: number) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "status-active";
      case "inactive":
        return "status-inactive";
      case "pending":
        return "status-pending";
      case "blacklisted":
        return "status-blacklisted";
      default:
        return "status-inactive";
    }
  };

  return (
    <div className="users-table-wrapper">
      <table className="users-table">
        <thead>
          <tr>
            <th>
              <div className="th-content">
                ORGANIZATION <FilterIcon />
              </div>
            </th>
            <th>
              <div className="th-content">
                USERNAME <FilterIcon />
              </div>
            </th>
            <th>
              <div className="th-content">
                EMAIL <FilterIcon />
              </div>
            </th>
            <th>
              <div className="th-content">
                PHONE NUMBER <FilterIcon />
              </div>
            </th>
            <th>
              <div className="th-content">
                DATE JOINED <FilterIcon />
              </div>
            </th>
            <th>
              <div className="th-content">
                STATUS <FilterIcon />
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.organization}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.dateJoined}</td>
              <td>
                <span className={`status-badge ${getStatusClass(user.status)}`}>
                  {user.status}
                </span>
              </td>
              <td className="actions-cell">
                <button
                  className="menu-button"
                  onClick={() => toggleMenu(index)}
                >
                  <EllipsisIcon />
                </button>
                {activeMenu === index && (
                  <div ref={dropdownRef} className="actions-menu">
                    <button className="menu-item">View Details</button>
                    <button className="menu-item">Blacklist User</button>
                    <button className="menu-item">Activate User</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
