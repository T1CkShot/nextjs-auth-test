import { getServerSession } from "next-auth";
import { OPTIONS } from "../api/auth/[...nextauth]/route";
import UserCard from "@/components/UserCard";

export default async function Message() {
  const session = await getServerSession(OPTIONS);

  return (
    <>
      {session ? (
        <div className="w-full flex justify-center">
          <UserCard user={session.user} />
        </div>
      ) : (
        <div className="flex h-screen justify-center items-center">
          <h1 className="text-4xl font-bold">Please Login</h1>
        </div>
      )}
    </>
  );
}
