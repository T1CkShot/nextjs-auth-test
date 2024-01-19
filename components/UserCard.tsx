import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type user =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

export default function UserCard({ user }: { user: user }) {
  return (
    <Card className="max-w-xl mt-6 w-full">
      <CardHeader className="items-center">
        <Image
          className="rounded-full border-black dark:border-white border-2"
          src={user?.image as string}
          width={106}
          height={106}
          alt="avatar"
        />
        <CardTitle className="text-xl">{user?.name}</CardTitle>
      </CardHeader>
    </Card>
  );
}
