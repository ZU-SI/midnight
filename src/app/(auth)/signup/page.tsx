import AccountForm from "@/app/(auth)/signup/_components/account-form";
import AnonProfileSetting from "@/app/(auth)/signup/_components/anon-profile-setting";
import CompanyAccountForm from "@/app/(auth)/signup/_components/company-account-form";
import CompanyProfileSetting from "@/app/(auth)/signup/_components/company-profile-setting";
import ProfileSettings from "@/app/(auth)/signup/_components/profile-setting";
import { notFound } from "next/navigation";

type Props = {
  searchParams: {
    type: "user" | "company" | "anon";
    step: string;
  };
};

export default function Signup({ searchParams }: Props) {
  const type = searchParams.type;
  const step = searchParams.step;

  if (!type || !step) notFound();

  if (type === "anon") {
    return <AnonProfileSetting />;
  }
  if (type === "user") {
    return step === "1" ? <AccountForm /> : <ProfileSettings />;
  }

  return (
    <div className="min-h-screen bg-[#1b1b1e]">
      {step === "1" ? <CompanyAccountForm /> : <CompanyProfileSetting />}
    </div>
  );
}
