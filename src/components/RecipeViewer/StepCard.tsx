import { Card, CardHeader, CardBody, Image } from "@heroui/react";

export default function StepCard({ step, className }: any) {
  return (
    <Card shadow="none" radius="none" className={className}>
      <CardHeader>
        <h2 className="font-bold leading-none text-2xl">Step {step.stepNum}</h2>
      </CardHeader>
      <CardBody>
        <Image
          src={step.img}
          alt={`Recipe Step ${step.stepNum}`}
          width={"100%"}
          radius="sm"
        />
        <p className="mt-4!">{step.desc}</p>
      </CardBody>
    </Card>
  );
}
