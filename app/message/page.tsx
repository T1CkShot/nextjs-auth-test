import { getServerSession } from "next-auth";
import { OPTIONS } from "../api/auth/[...nextauth]/route";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default async function Message() {
  const session = await getServerSession(OPTIONS);

  return (
    <>
      {session ? (
        <div className="w-full flex justify-center">
          <Card className="max-w-xl mt-6 w-full">
            <CardHeader className="items-center">
              <Image
                className="rounded-full border-black dark:border-white border-2"
                src={session.user?.image as string}
                width={106}
                height={106}
                alt="avatar"
              />
              <CardTitle className="text-xl">{session.user?.name}</CardTitle>
            </CardHeader>
          </Card>
        </div>
      ) : (
        <div className="flex h-screen justify-center items-center">
          <h1 className="text-4xl font-bold">Please Login</h1>
        </div>
      )}
    </>
  );
}
