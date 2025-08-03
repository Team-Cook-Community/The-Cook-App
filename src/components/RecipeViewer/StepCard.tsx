import { Card, CardHeader, CardBody, Image } from "@heroui/react";

export default function StepCard({ step, className }: any) {
  if (!step) return null;

  return (
    <Card shadow="none" radius="none" className={className}>
      <CardHeader>
        <h2 className="font-bold leading-none text-2xl">Step {step.stepNum}</h2>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        {step.img && (
          <Image
            src={step.img}
            alt={`Recipe Step ${step.stepNum}`}
            width={"100%"}
            radius="sm"
            className="object-cover max-h-[300px]"
          />
        )}
        <p>{step.desc}</p>
      </CardBody>
    </Card>
  );
}
