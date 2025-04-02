import { NavLink } from "react-router-dom";
import {
  ArrowIcon,
  AuditIcon,
  DecisionIcon,
  FeesAndPricingIcon,
  FeesIcon,
  GuarantorsIcon,
  HomeIcon,
  KarmaIcon,
  LoanIcon,
  LoanRequestIcon,
  PreferenceIcon,
  ReportIcon,
  SavingsIcon,
  SavingsProductIcon,
  ServiceAccountIcon,
  ServiceIcon,
  SettlementIcon,
  SuitcaseIcon,
  TransactionIcon,
  UsersIcon,
  WhitelistIcon,
} from "../../icons";
import "./sidebar.scss";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  path: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const navSections: NavSection[] = [
    {
      title: "",
      items: [{ label: "Dashboard", icon: <HomeIcon />, path: "/dashboard" }],
    },
    {
      title: "CUSTOMERS",
      items: [
        { label: "Users", icon: <UsersIcon />, path: "/users" },
        { label: "Guarantors", icon: <GuarantorsIcon />, path: "/guarantors" },
        { label: "Loans", icon: <LoanIcon />, path: "/loans" },
        {
          label: "Decision Models",
          icon: <DecisionIcon />,
          path: "/decision-models",
        },
        { label: "Savings", icon: <SavingsIcon />, path: "/savings" },
        {
          label: "Loan Requests",
          icon: <LoanRequestIcon />,
          path: "/loan-requests",
        },
        { label: "Whitelist", icon: <WhitelistIcon />, path: "/whitelist" },
        { label: "Karma", icon: <KarmaIcon />, path: "/karma" },
      ],
    },
    {
      title: "BUSINESSES",
      items: [
        {
          label: "Organization",
          icon: <SuitcaseIcon />,
          path: "/businesses/organization",
        },
        {
          label: "Loan Products",
          icon: <LoanRequestIcon />,
          path: "/businesses/loan-products",
        },
        {
          label: "Savings Products",
          icon: <SavingsProductIcon />,
          path: "/businesses/savings-products",
        },
        {
          label: "Fees and Charges",
          icon: <FeesIcon />,
          path: "/businesses/fees-and-charges",
        },
        {
          label: "Transactions",
          icon: <TransactionIcon />,
          path: "/businesses/transactions",
        },
        {
          label: "Services",
          icon: <ServiceIcon />,
          path: "/businesses/services",
        },
        {
          label: "Service Account",
          icon: <ServiceAccountIcon />,
          path: "/businesses/service-account",
        },
        {
          label: "Settlements",
          icon: <SettlementIcon />,
          path: "/businesses/settlements",
        },
        { label: "Reports", icon: <ReportIcon />, path: "/businesses/reports" },
      ],
    },
    {
      title: "SETTINGS",
      items: [
        {
          label: "Preferences",
          icon: <PreferenceIcon />,
          path: "/settings/preferences",
        },
        {
          label: "Fees and Pricing",
          icon: <FeesAndPricingIcon />,
          path: "/settings/fees-and-pricing",
        },
        {
          label: "Audit Logs",
          icon: <AuditIcon />,
          path: "/settings/audit-logs",
        },
      ],
    },
  ];
  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="org-switcher">
            <SuitcaseIcon />
            <span>Switch Organization</span>
            <ArrowIcon />
          </div>
        </div>

        <nav className="sidebar-nav">
          {navSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="nav-section">
              {section.title && (
                <h3 className="section-title">{section.title}</h3>
              )}
              <ul className="nav-items">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`nav-item ${item.active ? "active" : ""}`}
                  >
                    <NavLink
                      to={item.path}
                      end={true}
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      <span className="icon">{item.icon}</span>
                      <span className="label">{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
