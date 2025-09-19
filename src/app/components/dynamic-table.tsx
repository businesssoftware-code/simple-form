import React, { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { TypeHeader, TypeOfResponseOfObject } from "../types/type";


interface TableProps {
  tableHeader: TypeHeader[];
  data?: TypeOfResponseOfObject[];
  headerBold?: boolean;
  fontSize?: string;
  borderAtBottom?: boolean;
  handleDelete?: (id: number) => void;
  handleEdit?: (id: number) => void;
  handleShow?: (id: number) => void;
  redirectToOutlet?: (redirectId: number) => void;
  title?: string;
}

const DynamicTable: React.FC<TableProps> = ({
  tableHeader,
  data,
  headerBold = false,
  fontSize,
  borderAtBottom = false,
  handleDelete,
  handleEdit,
  redirectToOutlet,
  handleShow,
  title,
}) => {
  const [filteredData, setFilteredData] = useState<TypeOfResponseOfObject[]>([]);
  const [sorting, setSorting] = useState<string>("asc");

  useEffect(() => {
    if (data) {
      setFilteredData(
        data.map((item, index) => ({ ...item, sequenceNo: index + 1 }))
      );
    }
  }, [data]);

  const handleSort = (index: number, type: string) => {
    if (filteredData?.length === 0) return;

    const sortingText: string = Object.keys(filteredData[0])?.[index];
    const sortedFilterData = [...filteredData];

    sortedFilterData.sort((a, b) => {
      const valA = a[sortingText];
      const valB = b[sortingText];

      if (type === "date") {
        return sorting === "asc"
          ? new Date(valA as string).getTime() -
              new Date(valB as string).getTime()
          : new Date(valB as string).getTime() -
              new Date(valA as string).getTime();
      } else {
        return sorting === "asc"
          ? String(valA).localeCompare(String(valB))
          : String(valB).localeCompare(String(valA));
      }
    });

    setFilteredData(sortedFilterData);
    setSorting(sorting === "asc" ? "desc" : "asc");
  };

  return (
    <div className="overflow-x-auto bg-white pt-4 pb-4 pl-2 pr-2 rounded-lg">
      <table className="min-w-full">
        <thead>
          <tr>
            {tableHeader?.map((item: TypeHeader, index: number) => (
              <th
                key={item.id}
                className={`whitespace-nowrap py-2 px-4 
                  ${item?.sorting ? "cursor-pointer" : "cursor-default"}
                  ${headerBold ? "font-semibold" : "font-medium"} 
                  ${fontSize ? `text-[${fontSize}]` : "text-[14px]"} 
                  ${borderAtBottom ? "border-b" : ""} 
                  text-left`}
                onClick={() =>
                  item?.sorting &&
                  item?.typeForSorting &&
                  handleSort(index, item?.typeForSorting)
                }
              >
                <div className="flex items-center gap-2">
                  {item?.name}{" "}
                  {item?.sorting &&
                    (sorting === "asc" ? (
                      <ChevronUp size={"15px"} />
                    ) : (
                      <ChevronDown size={"15px"} />
                    ))}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-center">
          {filteredData && filteredData?.length > 0 ? (
            filteredData?.map((item, index) => (
              <tr
                key={item.id}
                className="cursor-pointer hover:bg-gray-50"
                onClick={() =>
                  redirectToOutlet && redirectToOutlet(item?.id)
                }
              >
                {Object.entries(item).map(([key, value]) => {
                  if (
                    key === "specificId" ||
                    key === "specificName" ||
                    key === "sequenceNo"
                  )
                    return null;
                  else if (key === "action") {
                    const Component = value as React.ElementType;
                    return (
                      <td
                        key={`${item.id}-${key}`}
                        className="py-2 px-4 my-2 text-left"
                      >
                        <Component
                          handleDelete={handleDelete}
                          id={item.id}
                          handleEdit={handleEdit}
                          name={item.name}
                          fontSize={fontSize}
                          handleShow={handleShow}
                        />
                      </td>
                    );
                  } else {
                    return key === "id" ? (
                      <td
                        key={key}
                        className={`py-2 px-4 text-left ${
                          fontSize ? `text-[${fontSize}]` : "text-[14px]"
                        }`}
                      >
                        {(index + 1) as number}.
                      </td>
                    ) : (
                      key !== "id" && (
                        <td
                          key={key}
                          className={`py-2 px-4 text-left ${
                            fontSize ? `text-[${fontSize}]` : "text-[14px]"
                          }`}
                        >
                          {
                            value as
                              | string
                              | number
                              | boolean
                              | React.JSX.Element
                              | undefined
                          }
                        </td>
                      )
                    );
                  }
                })}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={tableHeader?.length}
                className="text-center py-4"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;