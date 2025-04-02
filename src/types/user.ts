export interface User {
  name: string;
  username: string;
  tier: number;
  balance: string;
  accountNumber: string;
  bank: string;
  organization: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
  dateJoined: string;
  personal: Personal;
  education: Education;
  socials: Socials;
  guarantor: Guarantor;
}

interface Guarantor {
  fullName: string;
  phoneNumber: string;
  email: string;
  relationship: string;
}

interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
}

interface Education {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: string;
}

interface Personal {
  fullName: string;
  phoneNumber: string;
  email: string;
  bvn: string;
  gender: string;
  maritalStatus: string;
  children: string;
  residence: string;
}
