import { Avatar, Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
import DefaultMediaStats from "./MediaStats";

export default function UserOverview({
  firstName,
  lastName,
  userName,
  bio,
  totalFollowing = 0,
  totalFollowers = 0,
  totalLikes = 0,
  radius = "none",
  shadow = "none",
  mediaStats,
  includeDefaultMediaStats = true,
}: any) {
  return (
    <Card shadow={shadow} radius={radius} className="flex flex-col gap-2">
      <CardHeader>
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="lg" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h2 className="text-[24px] font-semibold leading-none">
              {`${firstName} ${lastName}`}
            </h2>
            <h4 className="text-small tracking-tight text-default-400">
              @{userName}
            </h4>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small">{bio}</CardBody>
      <CardFooter className="justify-between h-[70px] px-9">
        {includeDefaultMediaStats ? (
          <DefaultMediaStats
            totalFollowers={totalFollowers}
            totalFollowing={totalFollowing}
            totalLikes={totalLikes}
            removeWrapper
          />
        ) : (
          mediaStats
        )}
      </CardFooter>
    </Card>
  );
}
