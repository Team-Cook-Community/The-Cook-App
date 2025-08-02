import { useState } from "react";

import { Card, CardHeader, CardBody, Image, Skeleton } from "@heroui/react";

export default function StepCard({ step, className }: any) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <Card shadow="none" radius="none" className={className}>
      <CardHeader>
        <Skeleton isLoaded={!isLoading} className="rounded-md">
          <h2 className="font-bold leading-none text-2xl">
            Step {step.stepNum}
          </h2>
        </Skeleton>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Image
          src={step.img}
          alt={`Recipe Step ${step.stepNum}`}
          width={"100%"}
          radius="sm"
          onLoad={handleLoad}
          isLoading={isLoading}
        />
        <Skeleton isLoaded={!isLoading} className="rounded-md">
          <p>{step.desc}</p>
        </Skeleton>
      </CardBody>
    </Card>
  );
}
