export interface Country {
    id: number;
    title: string;
  }
  
export interface City {
    id: number;
    title: string;
  }
  
export interface IClub {
    id: number;
    name: string;
    address: string;
    owner?: {
      name: string;
    };
    status: string;
    wallet: {
      balance: number;
    };
    street: string;
    zip: string;
    country: Country;
    city: City;
    facilities: Array<{ title: string; image: string }>;
    openingHours: Array<{
      day: string;
      openingTime: string;
      closingTime: string;
    }>;
  }
  
export interface ICourt {
    id: number;
    name: string;
    sport: string;
  }

  export interface IUser {
    id: number;
    name: string;
    email: string | null;
    phone: string;
  }

  export interface IBooking {
    id: number;
    bookingDate: string;
    startTime: string;
    endTime: string;
    club: IClub;
    court: ICourt;
    status: string;
    user:IUser


  }

  export interface ISysmetLogs {
    id: number;
    description: string;
    logType: string;
    date: string;
    action: string;
    userId: ICourt;
    user: IUser;
    status:string;
    reply:string;
    

  }

  export interface INotification {
    id: number;
    title: string;
    description: string;
    image: string;
    createdBy: string;
    createdFor: string;
    notificationType: string;
    payload: any;
    createdAt:string;
  }


  export interface IDiscount {
    id: number;
    code: string;
    discountValue: string |null;
    discountType: string;
    usageType: string;
    fromDate: string;
    toDate: string;
    status?: string;
  
  }

 