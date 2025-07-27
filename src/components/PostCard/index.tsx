import { useState } from "react";
import { Card, CardHeader, CardBody, Avatar, Button } from "@heroui/react";

export default function PostCard({
  creator,
  shadow,
  radius,
  className,
  children,
}: any) {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Card className={className} shadow={shadow} radius={radius}>
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="sm" src="" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h2 className="font-semibold leading-none text-default-600">
              {`${creator.firstName} ${creator.lastName}`}
            </h2>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : "bg-[#FEEFEC] text-[#F8664F]"
          }
          radius="full"
          size="md"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
}
