import { testUser } from "@data/recipe";

import { ScrollShadow, Tabs, Tab } from "@heroui/react";
import UserOverview from "@components/UserOverview";
import UpgradePlanButton from "@components/UpgradePlanButton";
import RecipeList from "@components/RecipeList";

export default function Profile() {
  return (
    <ScrollShadow className="size-full" isEnabled={false} hideScrollBar>
      <div className="px-1 py-3 size-full flex flex-col gap-2">
        <div>
          <UserOverview {...testUser} />
        </div>
        <div className="px-[12px]">
          <UpgradePlanButton />
        </div>
        <div>
          <Tabs variant="underlined" className="mt-2">
            <Tab key="recipes" title="Recipes" className="text-md font-semibold">
              <RecipeList recipeData={testUser.recipes} />
            </Tab>
            <Tab key="posts" title="Posts" className="text-md font-semibold">
              <div className="px-3 grid place-items-center">
                <p>You have not made any posts yet</p>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </ScrollShadow>
  );
}
