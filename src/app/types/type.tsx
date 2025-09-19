export type TypeOfUserDetails = {
     contactPerson: string;
    mobileNumber: string;
    quantity: number;
    hamper: string;
    price: string;
    companyName: string;
    companyAddress: string;
    email:""
}

export type TypeOfHamper = {

  id: string;
  name: string;
  price: number;
  type: string;
  details: string[];

}

export type ApiErrorResponse = {
  statusCode: number;
  timestamp: string;
  path: string;
  
  message?: string | string[];
  error?: string;
};


export type TypeHeader = {
  id: number;
  name: string;
  sorting?: boolean;
  typeForSorting?: string;
};

export type TypeOfResponseOfObject = {
  id: number;
  [key: string]:
    React.FC<{
      handleDelete?: (id: number) => void;
      id: number;
      handleEdit?: (id:number) => void;
      name?:string
      fontSize?: string;
      
    }>
    | string
    | boolean
    | number
    | Date
    | React.JSX.Element
    | string[]
    | number[]
    | TypeOfResponseNestedObject
    | TypeOfResponseNestedObject[]
    | undefined;
};


export type TypeOfResponseNestedObject = {
  [key: string]:
    | string
    | boolean
    | number
    | Date
    | string[]
    | number[]
    | React.JSX.Element
    | TypeOfResponseNestedObject
    | TypeOfResponseNestedObject[]
    | undefined;
};