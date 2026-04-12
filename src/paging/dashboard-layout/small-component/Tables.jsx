import React from "react";
import { Table } from "@mantine/core";
import { products } from "./data";

const Tables = () => {
  const rows = products.map((item) => (
    <Table.Tr key={item.id} className="border-b border-gray-800">
      <Table.Td className="">0{item.id}</Table.Td>
      <Table.Td className=" font-medium">
        {item.productName}
      </Table.Td>
      <Table.Td className="">{item.unitPrice}</Table.Td>
      <Table.Td className="">{item.quantityAvailable}</Table.Td>
      <Table.Td className="">{item.salesVolume}</Table.Td>
      <Table.Td className="">{item.profitMargin}</Table.Td>
      <Table.Td className="">
        {item.salesResponsibility}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="p-6 rounded-2xl border border-gray-700">
      
      {/* Header Top */}
      <div className="flex justify-end mb-4 text-black text-sm">
        Last 5 weeks ⌄
      </div>

      <Table.ScrollContainer minWidth={700}>
        <Table className="w-full border-separate border-spacing-y-2">
          
          {/* Table Head */}
          <Table.Thead>
            <Table.Tr className="bg-gray-200 text-sm rounded-lg">
              <Table.Th className="px-4 py-2 rounded-l-full">#</Table.Th>
              <Table.Th>Product Name</Table.Th>
              <Table.Th>Unit Price (UGX)</Table.Th>
              <Table.Th>Quantity Available</Table.Th>
              <Table.Th>Sales Volume (UGX)</Table.Th>
              <Table.Th>Profit Margin</Table.Th>
              <Table.Th className="rounded-r-full">
                Sales Representative
              </Table.Th>
            </Table.Tr>
          </Table.Thead>

          {/* Table Body */}
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </div>
  );
};

export default Tables;