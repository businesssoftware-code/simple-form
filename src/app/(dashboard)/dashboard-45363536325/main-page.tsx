// "use client";


// import DynamicTable from "@/app/components/dynamic-table";
// import { FolderInput } from "lucide-react";


// type TypeOfPageProps = {
//   eventName: string;
//   eventUsers: TypeOfResponseOfObject[];
// };

// const MainPage: React.FC<TypeOfPageProps> = ({
//   eventName,
//   eventUsers,

// }) => {



//     const generateCSV = (
//       usersData: TypeOfResponseOfObject[]
//     ): string => {
//       const tableHeaders: string[] = [
//         "S. No.",
//         "Name",
//         "Contact No.",
//         "Email",
//         "Status",
//       ];
  
//       // Prepare CSV data
//       const csvData: (string | number | null)[][] = [];
  
//       // Add Table Headers
//       csvData.push(tableHeaders);
  
//       usersData.forEach((data,index) => {
//         const row: (string | number | null)[] = [
//           index+1, // S. No. (sequential number starting from 1)
//           data?.name as string, // Outlet Name
//           data?.contactNo  as string, // Address
//           data?.email as string, // Total Forms
//           data?.status as string, // Average NPS Rating
//         ];
//         csvData.push(row);
//       });
  
//       // Convert to CSV string
//       const csv = Papa.unparse(csvData, {
//         quotes: true, // Enclose all fields in quotes
//         quoteChar: '"',
//         escapeChar: '"',
//       });
  
//       return csv;
//     };




//   const downloadCSVFile = async () => {
    



//         const csv = generateCSV(eventUsers);

//         const blob = new Blob([csv], { type: "text/csv" });
//         const link = document.createElement("a");
//         link.href = URL.createObjectURL(blob);
//         link.download = `event-users.csv`;
//         link.click();

    
//   };


//   return (
//     <>
     
//       <h1 className="text-[28px] pt-6 pl-4">Basil Events</h1>
//       <hr className="my-4 mx-4 bg-gray-200 border-1 dark:bg-gray-700" />

//       <div className="flex items-center justify-end">

//         <button
//         onClick={downloadCSVFile}
//         className=" flex gap-2 whitespace-nowrap font-weight-500 text-[14px] line-height-[34px] text-white bg-black items-center justify-center py-2 px-4 border-none rounded-lg"
//       >
//         Export as Excel
//         <FolderInput size={20} />
//       </button>

//       </div>

      

//       <div className="p-4">
//         <h1 className="font-semibold">{eventName}</h1>
//         <DynamicTable
//           tableHeader={EventDashboardHeader}
//           fontSize={"16px"}
//           headerBold={true}
//           borderAtBottom={true}
//           data={eventUsers}
//         />
//       </div>
//       {/* <div className="p-4">
//           <PaginationComponent
//             changePage={changePage}
//             pagination={{ ...pagination, totalCount }}
//             handlePageSize={handlePageSize}
//             firstPage={firstPage}
//             lastPage={lastPage}
//             nextPage={nextPage}
//             previousPage={previousPage}
//           />
//         </div> */}
//     </>
//   );
// };

// export default MainPage;
