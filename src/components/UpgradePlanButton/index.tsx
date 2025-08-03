import { Button } from "@heroui/react";
import { MedalIcon } from "@phosphor-icons/react";

export default function UpgradePlanButton({ className }: any) {
  return (
    <Button className={`flex justify-between h-15 w-full bg-gray/50 ${className}`} radius="sm">
      <span className="flex items-center gap-2 text-md font-medium">
        <MedalIcon size={20} weight="fill" />
        Cook Pro
      </span>
      <span>Unlock All Features</span>
    </Button>
  );
}
