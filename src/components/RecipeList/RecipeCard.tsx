import { useNavigate } from "react-router";
import { useState } from "react";

import {
  Card,
  CardBody,
  CardFooter,
  Image,
  User,
  Skeleton,
} from "@heroui/react";
import { HeartIcon } from "@phosphor-icons/react";

export default function RecipeCard({ recipe }: any) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handlePress = () => {
    navigate(`/recipe/${recipe.id}`);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <Card
      isPressable
      shadow="none"
      className="w-full mb-2!"
      onPress={handlePress}
      radius="sm"
    >
      <CardBody className="p-0 w-full">
        <Image
          src={recipe.coverImg}
          alt="recipe"
          isZoomed
          isLoading={isLoading}
          onLoad={handleLoad}
          radius="sm"
          classNames={{
            wrapper: `${isLoading && "w-full! max-w-full! h-[100px]"}`,
          }}
        />
      </CardBody>
      <CardFooter className="flex-col gap-3 items-start">
        <Skeleton isLoaded={!isLoading} className="rounded-lg">
          <h1 className="w-full text-left text-md md:text-lg font-bold">
            {recipe.title}
          </h1>
        </Skeleton>
        <div className="flex justify-between w-full items-center">
          <Skeleton isLoaded={!isLoading} className="rounded-lg">
            <User
              name={recipe.creator?.username}
              avatarProps={{
                className: "w-[1.2rem] h-[1.2rem]",
              }}
            />
          </Skeleton>
          <Skeleton isLoaded={!isLoading} className="rounded-lg">
            <div className="flex gap-1 items-center text-sm">
              <HeartIcon size={15} weight="fill" color="#DC143C" />
              {recipe.likes > 999 ? "999+" : recipe.likes}
            </div>
          </Skeleton>
        </div>
      </CardFooter>
    </Card>
  );
}
