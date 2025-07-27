import { useNavigate } from "react-router";

import { Card, CardBody, CardFooter, Image, User } from "@heroui/react";
import { HeartIcon } from "@phosphor-icons/react";

export default function RecipeCard({ recipe }: any) {
  const navigate = useNavigate();

  const handlePress = () => {
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <Card
      isPressable
      shadow="none"
      className="w-full mb-2!"
      onPress={handlePress}
      radius="sm"
    >
      <CardBody className="p-0">
        <Image src={recipe.coverImg} alt="recipe" isZoomed />
      </CardBody>
      <CardFooter className="flex-col gap-3">
        <h1 className="w-full text-left text-lg font-bold">{recipe.title}</h1>
        <div className="flex justify-between w-full items-center">
          <User
            name={recipe.creator.firstName}
            description={recipe.creator.lastName}
            avatarProps={{
                className: "w-[1.95rem] h-[1.95rem]",
            }}
          />
          <div className="flex gap-1 items-center text-sm">
            <HeartIcon size={15} weight="fill" color="#DC143C" />
            {recipe.likes > 999 ? "999+" : recipe.likes}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
