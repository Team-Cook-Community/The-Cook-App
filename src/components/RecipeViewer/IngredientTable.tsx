import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Skeleton,
} from "@heroui/react";

export default function IngredientTable({ data, isLoading, className }: any) {
  if (!data) return null;

  return (
    <div className={className}>
      <Skeleton isLoaded={!isLoading} className="rounded-md w-fit">
        <h2 className="text-2xl font-bold mb-[8px]!">Ingredient</h2>
      </Skeleton>
      <Table radius="sm" shadow="none" hideHeader removeWrapper>
        <TableHeader>
          <TableColumn>Item</TableColumn>
          <TableColumn>Amount</TableColumn>
        </TableHeader>
        <TableBody>
          {Object.entries(data).map(([item, amount]) => (
            <TableRow className="border-b-1 border-dashed!">
              <TableCell className="px-0 w-1/2">
                <Skeleton
                  isLoaded={!isLoading}
                  className="rounded-md float-left w-3/4"
                >
                  {item}
                </Skeleton>
              </TableCell>
              <TableCell className="px-0 text-right w-1/2">
                <Skeleton
                  isLoaded={!isLoading}
                  className="rounded-md float-right w-3/4"
                >
                  {amount as String}
                </Skeleton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
