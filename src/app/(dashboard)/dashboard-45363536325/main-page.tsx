"use client";

import DynamicTable from "@/app/components/dynamic-table";
import { HamperHeader } from "@/app/constant/contstant";
import { TypeOfResponseOfObject } from "@/app/types/type";
import { FolderInput } from "lucide-react";
import Papa from "papaparse";

type TypeOfPageProps = {
  data: TypeOfResponseOfObject[];
};

const MainPage: React.FC<TypeOfPageProps> = ({ data }) => {
  const generateCSV = (usersData: TypeOfResponseOfObject[]): string => {
    const tableHeaders: string[] = [
      "S. No.",
      "Name",
      "Contact No.",
      "Email",
      "Company Name",
      "Company Address",
      "Product",
      "Quantity",
      "Price",
    ];

    // Prepare CSV data
    const csvData: (string | number | null)[][] = [];

    // Add Table Headers
    csvData.push(tableHeaders);

    usersData.forEach((data, index) => {
      const row: (string | number | null)[] = [
        index + 1,
        data?.name as string,
        data?.contactNo as string,
        data?.email as string,
        data?.companyName as string,
        data?.companyAddress as string,
        data?.product as string,
        data?.quantity as string,
        data?.price as string,
      ];
      csvData.push(row);
    });

    // Convert to CSV string
    const csv = Papa.unparse(csvData, {
      quotes: true, // Enclose all fields in quotes
      quoteChar: '"',
      escapeChar: '"',
    });

    return csv;
  };

  const downloadCSVFile = async () => {
    const csv = generateCSV(data);

    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Diwali-hampers.csv`;
    link.click();
  };

  return (
    <>
      <h1 className="text-[28px] pt-6 pl-4">Diwali Hampers</h1>
      <hr className="my-4 mx-4 bg-gray-200 border-1 dark:bg-gray-700" />

      <div className="flex items-center justify-end">
        <button
          onClick={downloadCSVFile}
          className=" flex gap-2 whitespace-nowrap font-weight-500 text-[14px] line-height-[34px] text-white bg-black items-center justify-center py-2 px-4 border-none rounded-lg"
        >
          Export as Excel
          <FolderInput size={20} />
        </button>
      </div>

      <div className="p-4">
        <h1 className="font-semibold">{"Companies Details"}</h1>
        <DynamicTable
          tableHeader={HamperHeader}
          fontSize={"16px"}
          headerBold={true}
          borderAtBottom={true}
          data={data}
        />
      </div>
    </>
  );
};

export default MainPage;
