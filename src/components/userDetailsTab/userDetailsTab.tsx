import "./userDetailsTab.scss";

interface UserData {
  name: string;
  username: string;
  tier: number;
  balance: string;
  accountNumber: string;
  personal: {
    fullName: string;
    phoneNumber: string;
    email: string;
    bvn: string;
    gender: string;
    maritalStatus: string;
    children: string;
    residence: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  };
}

interface UserDetailsTabProps {
  userData: UserData;
}

export const UserDetailsTab: React.FC<UserDetailsTabProps> = ({ userData }) => {
  return (
    <div className="user-details-tab">
      <section className="details-section">
        <h3 className="section-title">Personal Information</h3>
        <div className="details-grid">
          <div className="detail-item">
            <h4 className="detail-label">FULL NAME</h4>
            <p className="detail-value">{userData.personal.fullName}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-label">PHONE NUMBER</h4>
            <p className="detail-value">{userData.personal.phoneNumber}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-label">EMAIL ADDRESS</h4>
            <p className="detail-value">{userData.personal.email}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-label">BVN</h4>
            <p className="detail-value">{userData.personal.bvn}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-label">GENDER</h4>
            <p className="detail-value">{userData.personal.gender}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-label">MARITAL STATUS</h4>
            <p className="detail-value">{userData.personal.maritalStatus}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-label">CHILDREN</h4>
            <p className="detail-value">{userData.personal.children}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-label">TYPE OF RESIDENCE</h4>
            <p className="detail-value">{userData.personal.residence}</p>
          </div>
        </div>
      </section>

      <section className="details-section">
        <h3 className="section-title">Education and Employment</h3>
        <div className="details-grid">
          <div className="detail-item">
            <h4 className="detail-label">LEVEL OF EDUCATION</h4>
            <p className="detail-value">{userData.education.level}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-label">EMPLOYMENT STATUS</h4>
            <p className="detail-value">
              {userData.education.employmentStatus}
            </p>
          </div>
          <div className="detail-item">
            <h4 className="detail-label">SECTOR OF EMPLOYMENT</h4>
            <p className="detail-value">{userData.education.sector}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-label">DURATION OF EMPLOYMENT</h4>
            <p className="detail-value">{userData.education.duration}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-label">OFFICE EMAIL</h4>
            <p className="detail-value">{userData.education.officeEmail}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-label">MONTHLY INCOME</h4>
            <p className="detail-value">{userData.education.monthlyIncome}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-label">LOAN REPAYMENT</h4>
            <p className="detail-value">{userData.education.loanRepayment}</p>
          </div>
        </div>
      </section>

      <section className="details-section">
        <h3 className="section-title">Socials</h3>
        <div className="details-grid">
          <div className="detail-item">
            <h4 className="detail-label">TWITTER</h4>
            <p className="detail-value">{userData.socials.twitter}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-label">FACEBOOK</h4>
            <p className="detail-value">{userData.socials.facebook}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-label">INSTAGRAM</h4>
            <p className="detail-value">{userData.socials.instagram}</p>
          </div>
        </div>
      </section>

      <section className="details-section">
        <h3 className="section-title">Guarantor</h3>
        <div className="details-grid">
          <div className="detail-item">
            <h4 className="detail-label">FULL NAME</h4>
            <p className="detail-value">{userData.guarantor.fullName}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-label">PHONE NUMBER</h4>
            <p className="detail-value">{userData.guarantor.phoneNumber}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-label">EMAIL ADDRESS</h4>
            <p className="detail-value">{userData.guarantor.email}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-label">RELATIONSHIP</h4>
            <p className="detail-value">{userData.guarantor.relationship}</p>
          </div>
        </div>
      </section>

      <section className="details-section">
        <h3 className="section-title">Guarantor</h3>
        <div className="details-grid">
          <div className="detail-item">
            <h4 className="detail-label">FULL NAME</h4>
            <p className="detail-value">{userData.guarantor.fullName}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-label">PHONE NUMBER</h4>
            <p className="detail-value">{userData.guarantor.phoneNumber}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-label">EMAIL ADDRESS</h4>
            <p className="detail-value">{userData.guarantor.email}</p>
          </div>
          <div className="detail-item">
            <h4 className="detail-label">RELATIONSHIP</h4>
            <p className="detail-value">{userData.guarantor.relationship}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
