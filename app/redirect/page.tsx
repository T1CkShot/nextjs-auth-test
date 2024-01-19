import { getServerSession } from "next-auth";
import { OPTIONS } from "../api/auth/[...nextauth]/route";
import UserCard from "@/components/UserCard";
import { redirect } from "next/navigation";

export default async function Redirect() {
  const session = await getServerSession(OPTIONS);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/redirect");
  }
  return (
    <div className="flex w-full justify-center">
      <UserCard user={session.user} />
    </div>
  );
}
