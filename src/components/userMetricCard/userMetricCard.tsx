import React from "react";
import "./userMetricCard.scss";

interface UserMetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  iconBgColor: string;
  iconColor: string;
}

export const UserMetricCard: React.FC<UserMetricCardProps> = ({
  icon,
  title,
  value,
  iconBgColor,
  iconColor,
}) => {
  return (
    <div className="metric-card">
      <div
        className="icon-container"
        style={{
          backgroundColor: iconBgColor,
          color: iconColor,
        }}
      >
        {icon}
      </div>
      <h3 className="metric-title">{title}</h3>
      <p className="metric-value">{value}</p>
    </div>
  );
};
