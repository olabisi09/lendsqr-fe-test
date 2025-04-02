import { useState } from "react";
import "./userDetails.scss";
import { UserDetailsTab } from "../../components/userDetailsTab/userDetailsTab";
import { ArrowLeftIcon, StarFilledIcon, StarIcon } from "../../icons";

interface UserDetailsPageProps {
  onBack?: () => void;
}

const UserDetailsPage: React.FC<UserDetailsPageProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General Details" },
    { id: "documents", label: "Documents" },
    { id: "bank", label: "Bank Details" },
    { id: "loans", label: "Loans" },
    { id: "savings", label: "Savings" },
    { id: "app", label: "App and System" },
  ];

  // Mock user data
  const userData = {
    name: "Grace Effiom",
    username: "Lendsqrjdh",
    tier: 2,
    balance: "₦200,000.00",
    accountNumber: "9912458798/Providus Bank",
    bank: "Providus Bank",
    organization: "Lendsqr",
    personal: {
      fullName: "Grace Effiom",
      phoneNumber: "07060780922",
      email: "grace@gmail.com",
      bvn: "07060780922",
      gender: "Female",
      maritalStatus: "Single",
      children: "None",
      residence: "Parent's Apartment",
    },
    education: {
      level: "B.Sc",
      employmentStatus: "Employed",
      sector: "FinTech",
      duration: "2 years",
      officeEmail: "grace@lendsqr.com",
      monthlyIncome: "₦200,000.00 - ₦400,000.00",
      loanRepayment: "40,000",
    },
    socials: {
      twitter: "@grace_effiom",
      facebook: "Grace Effiom",
      instagram: "@grace_effiom",
    },
    guarantor: {
      fullName: "Debby Ogana",
      phoneNumber: "07060780922",
      email: "debby@gmail.com",
      relationship: "Sister",
    },
  };

  return (
    <div className="user-details-page">
      <div className="back-link">
        <ArrowLeftIcon />
        <a href="#" onClick={onBack}>
          Back to Users
        </a>
      </div>

      <div className="page-header">
        <h1 className="page-title">User Details</h1>
        <div className="action-buttons">
          <button className="btn-blacklist">BLACKLIST USER</button>
          <button className="btn-activate">ACTIVATE USER</button>
        </div>
      </div>

      <div className="user-summary-card">
        <div className="user-summary-content">
          <div className="user-profile">
            <div className="avatar">
              <div className="avatar-placeholder">
                <span>{userData.name.charAt(0)}</span>
              </div>
            </div>
            <div className="user-info">
              <h2 className="user-name">{userData.name}</h2>
              <p className="user-id">{userData.username}</p>
            </div>
          </div>

          <div className="user-tier">
            <p className="tier-label">User's Tier</p>
            <div className="tier-stars">
              {[...Array(3)].map((_, index) =>
                index < userData.tier ? (
                  <StarFilledIcon key={index} />
                ) : (
                  <StarIcon key={index} />
                )
              )}
            </div>
          </div>

          <div className="user-account">
            <h3 className="account-balance">{userData.balance}</h3>
            <p className="account-number">{userData.accountNumber}</p>
          </div>
        </div>

        <div className="tabs-container">
          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeTab === "general" && (
        <div className="tab-content">
          <UserDetailsTab userData={userData} />
        </div>
      )}
    </div>
  );
};

export default UserDetailsPage;
