import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Button,
  Skeleton,
} from "@heroui/react";

export default function PostCard({
  creator,
  shadow,
  radius,
  className,
  isLoading,
  children,
}: any) {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Card className={className} shadow={shadow} radius={radius}>
      <CardHeader className="justify-between">
        <div className="flex gap-5 items-center">
          <Skeleton isLoaded={!isLoading} className="rounded-full">
            <Avatar isBordered radius="full" size="sm" src="" />
          </Skeleton>
          <Skeleton isLoaded={!isLoading} className="rounded-md">
            <h2 className="font-semibold leading-none text-default-600">
              {`${creator.firstName} ${creator.lastName}`}
            </h2>
          </Skeleton>
        </div>
        <Skeleton isLoaded={!isLoading} className="rounded-full">
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
        </Skeleton>
      </CardHeader>
      <CardBody>
        <Skeleton isLoaded={!isLoading} className="rounded-md">
          {children}
        </Skeleton>
      </CardBody>
    </Card>
  );
}
