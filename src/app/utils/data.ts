import { routes } from '@/app/utils/const';
import { IconsNav } from '../../../public/icons/asideNavIcons';
import { StaticImageData } from 'next/image';
import { mImage } from '../../../public/images';
import { icons } from '../../../public/icons';

export interface IDropdownItem {
  icon: string | StaticImageData;
  title: string;
  link: string;
}

export interface IMenuItem {
  icon: string | StaticImageData;
  title: string;
  link: string;
  dropdown?: IDropdownItem[];
}

export const AsideNavbarData: IMenuItem[] = [
  { icon: IconsNav.category, title: 'Dashboard', link: routes.admin },
  {
    icon: IconsNav.paper,
    title: 'Club Management',
    link: routes.clubmanagement,
    dropdown: [
      {
        icon: IconsNav.calendar,
        title: 'Owner’s Management',
        link: routes.ownersManagement,
      },
      {
        icon: IconsNav.paper,
        title: 'Clubs Management',
        link: routes.totalclubs,
      },
      {
        icon: icons.clubRequest,
        title: 'Club Request',
        link: routes.clubRequest,
      },
      {
        icon: IconsNav.chat,
        title: 'Club Wallet',
        link: routes.clubWallet,
      },
    ],
  },
  {
    icon: IconsNav.user2,
    title: 'User Management',
    link: routes.usermanagement,
  },
  { icon: IconsNav.chat, title: 'Chat Room', link: routes.chatRoom },
  {
    icon: IconsNav.calendar,
    title: 'Booking Management',
    link: '#',
    dropdown: [
      {
        icon: IconsNav.calendar,
        title: 'Bookings',
        link: routes.bookingmanagement,
      },
      {
        icon: IconsNav.paper,
        title: 'Matches',
        link: routes.matches,
      },
      {
        icon: IconsNav.chat,
        title: 'Transactions',
        link: routes.transections,
      },
    ],
  },
  { icon: IconsNav.discount, title: 'Discount', link: routes.discount },
  {
    icon: IconsNav.wallet,
    title: 'Financial Management',
    link: '#',
    dropdown: [
      {
        icon: IconsNav.calendar,
        title: 'Revenue Report',
        link: routes.financialRevenuReport,
      },
      // {
      //   icon: IconsNav.paper,
      //   title: "Income & Spending logs",
      //   link: routes.incomeAndSpendingLogs,
      // },
      // {
      //   icon: IconsNav.chat,
      //   title: "Treasury Management",
      //   link: routes.TreasuryManagement,
      // },
      { icon: IconsNav.chat, title: 'Due Payment', link: routes.DuePayment },
    ],
  },
  {
    icon: IconsNav.unlock,
    title: 'Security and Audit',
    link: '#',
    dropdown: [
      {
        icon: IconsNav.calendar,
        title: 'Security Incidents',
        link: routes.securityIncidents,
      },
      { icon: IconsNav.paper, title: 'Audit Logs', link: routes.auditLogs },
      {
        icon: IconsNav.chat,
        title: 'System Error Logs',
        link: routes.systemErrorsLogs,
      },
    ],
  },
  {
    icon: IconsNav.setting,
    title: 'Configuration',
    link: '#',
    dropdown: [
      {
        icon: IconsNav.calendar,
        title: 'Application configuration',
        link: routes.applicationConfiguration,
      },
      // {
      //   icon: IconsNav.paper,
      //   title: 'Club configuration',
      //   link: routes.clubConfiguration,
      // },
      {
        icon: IconsNav.paper,
        title: 'Country / City ',
        link: routes.countryConfiguration,
      },
    ],
  },
  {
    icon: IconsNav.notification,
    title: 'Marketing and Notifications',
    link: routes.marketingNotification,
  },
  {
    icon: IconsNav.edit,
    title: 'Support and Feedback',
    link: routes.supportAndFeedback,
  },
];

export const dashboardCardData = [
  {
    user: 'Total Users',
    up: true,
    down: false,
    keyValue: 'totalUsers',
  },
  {
    user: 'New Users',
    up: false,
    down: true,
    select: true,
    keyValue: 'newUsers',
  },
  {
    user: 'Total Club Owner',
    up: true,
    down: false,
    keyValue: 'totalClubOwners',
  },
  {
    user: 'Total Booking',
    up: true,
    down: false,
    keyValue: 'totalBookings',
  },
  {
    user: 'Total Revenue',
    figure: 'SAR',
    up: false,
    down: true,
    keyValue: 'totalRevenue',
  },
  {
    user: 'Total Clubs',
    up: true,
    down: false,
    link: routes.totalclubs,
    keyValue: 'totalClubs',
  },
];

export const ClubManagementCardData = [
  {
    user: 'Total Clubs',
    up: true,
    down: false,
    link: routes.totalclubs,
    keyValue: 'totalClubs',
  },
  {
    user: 'New Clubs',
    keyValue: 'newClubs',
    up: false,
    down: true,
    select: true,
    link: '#',
  },
  { user: 'Total Courts', keyValue: 'totalCourts', up: true, down: false },
];

export const clubOwnersTableData = [
  {
    name: 'Imran khan',
    email: 'khan@gmail.com',
    phone: '+966865562375',
    courts: '34',
  },
  {
    name: 'Imran khan',
    email: 'khan@gmail.com',
    phone: '+966865562375',
    courts: '34',
  },
  {
    name: 'Imran khan',
    email: 'khan@gmail.com',
    phone: '+966865562375',
    courts: '34',
  },
  {
    name: 'Imran khan',
    email: 'khan@gmail.com',
    phone: '+966865562375',
    courts: '34',
  },
  {
    name: 'Imran khan',
    email: 'khan@gmail.com',
    phone: '+966865562375',
    courts: '34',
  },
  {
    name: 'Imran khan',
    email: 'khan@gmail.com',
    phone: '+966865562375',
    courts: '34',
  },
  {
    name: 'Imran khan',
    email: 'khan@gmail.com',
    phone: '+966865562375',
    courts: '34',
  },
  {
    name: 'Imran khan',
    email: 'khan@gmail.com',
    phone: '+966865562375',
    courts: '34',
  },
];

//----------CLUBS TABLE -----//
export const CLUBS_TABLE_HEAD = [
  'ID',
  'Club name',
  'Address',
  'Owner name',
  'Wallet balance',
  'Status',
  'Action',
];

export const CLUBS_TABLE_ROW = [
  {
    id: '101',
    clubName: 'Downtown Club',
    address: 'Markazi Dist, Riyadh, KSA',
    ownerName: 'Najee Abid',
    walletBalance: 'SAR 276',
  },
  {
    id: '102',
    clubName: 'Eastside Club',
    address: 'Markazi Dist, Riyadh, KSA',
    ownerName: 'Zayed Akhtar',
    walletBalance: 'SAR 276',
  },
];

export const userManagementCardData = [
  {
    user: 'Total Users',
    figure: '101,980',
    up: true,
    down: false,
  },
  {
    user: 'New Users',
    figure: '1,287',
    up: false,
    down: true,
    select: true,
  },
];

export const UserTableData = [
  {
    name: 'Aqib javid',
    email: 'javid@gmail.com',
    phoneNumber: '+9664234232',
    walletBalance: 'SAR 100',
    gender: 'Male',
    location: 'Jeddah KSA',
    link: routes.userdetails,
  },
  {
    name: 'Aasim shah',
    email: 'aasim@gmail.com',
    phoneNumber: '+009664234232',
    walletBalance: 'SAR 100',
    gender: 'Male',
    location: 'Riyad KSA',
    link: routes.userdetails,
  },
  {
    name: 'Alima Salek',
    email: 'salek@gmail.com',
    phoneNumber: '+009664234232',
    walletBalance: 'SAR 100',
    gender: 'Femal',
    location: 'Jeddah KSA',
    link: routes.userdetails,
  },
];

//----------BOOKING HISTORY TABLE DATA--------//
export const BOOKIING_HISTORY_TABLE_HEAD = [
  'S no',
  'Booking ID',
  'Date',
  'Club name',
  'Court type',
  'Location',
  'Payment',
  'Status',
];

export const BOOKING_HISTORY_TABLE_ROW = [
  {
    bookingId: '001',
    date: '2024-06-15',
    clubName: 'Downtown Club',
    courtType: 'Tennis 1',
    location: 'Jeddah, KSA',
    payment: 'SAR 100',
    status: {
      completed: 'completed',
    },
  },
  {
    bookingId: '002',
    date: '2024-06-15',
    clubName: 'Eastside Club',
    courtType: 'Padel tenis',
    location: 'Jeddah, KSA',
    payment: 'SAR 35',
    status: {
      partiallyPaid: 'partially paid',
    },
  },
  {
    bookingId: '003',
    date: '2024-06-15',
    clubName: 'Westside Club',
    courtType: 'Tennis 2',
    location: 'Jeddah, KSA',
    payment: 'SAR 45',
    status: {
      completed: 'completed',
    },
  },
];

//--------PAYEMENT TABLE DATA----------//
export const PAYMENT_TABLE_HEAD = [
  'Payment method',
  'Card number',
  'Expiry date',
  'Billing address',
];

export const PAYMENT_TABLE_ROW = [
  {
    paymentMethod: 'Credit card',
    cardNumber: '**** ***** **** 1234',
    expiryDate: '12/25',
    billingAddress: '123 Main St, Riyadh, KSA',
  },
];

//----------ACTIVITY TRACKING TRABLE DATA ---------//
export const ACTIVITY_TRACKING_TABLE_HEAD = [
  'S no',
  'Number of App Uses',
  'Total Time Spent on App',
  'Last active',
];
export const ACTIVITY_TRACKING_TABLE_ROW = [
  {
    appUses: '150 times',
    timeSpent: '35 hours',
    lastActive: '2024-07-14 14:30:00',
  },
];

//---------Booking management card data-----------//

export const bookingmanagementCardData = [
  {
    user: 'Total Booking',
    figure: '101,980',
    up: true,
    down: false,
    link: '#',
  },
  {
    user: 'New Bookings',
    figure: '1,287',
    up: false,
    down: true,
    select: true,
    link: '#',
  },
  {
    user: 'Cancelled Bookings',
    figure: '1,287',
    up: false,
    down: true,
    select: true,
    link: '#',
  },
];

//......Booking Management table data.......//

export const TABLE_HEAD = [
  'S no',
  'Name',
  'Club name',
  'Sport type',
  'Booking date',
  'Status',
  'Location',
  'Action',
];

export const TABLE_ROWS = [
  {
    sno: 1,
    img: 'IJ',
    name: 'Aqib javid',
    clubName: 'Sport Life',
    bookingDate: '2024-07-18 10:00',
    status: 'Confirmed',
    location: 'Jeddah, KSA',
  },
  {
    sno: 2,
    img: "AS",
    name: "Asim Shah",
    clubName: "Sport Life",
    bookingDate: "2024-07-18 10:00",
    status: "Cancel",
    location: "Jeddah, KSA",

  },
  {
    sno: 3,
    img: "NA",
    name: "Nabi Ameen",
    clubName: "Sport Life",
    bookingDate: "2024-07-18 10:00",
    status: "Refund",
    location: "Jeddah, KSA",

  },
];

//--------BOOKING MANAGAEMENT--MATCHES TABLE DATA --------//
export const MATCHES_TABLE_HEAD = [
  'S no',
  'Name',
  'Club Name',
  'Matches Date',
  'Status',
  'Location',
  'Action',
];
export const MATCHES_TABLE_ROW = [
  {
    name: "John vs Jane",
    clubName: "Sport Life",
    matcheDate: "2024-07-18 10:00",
    status: " 1/4 Confirmed",
    location: "Jeddah, KSA",
  },
  {
    name: 'John vs Jane',
    clubName: 'Sport Life',
    matcheDate: '2024-07-18 10:00',
    status: '2/2 Confirmed',
    location: 'Jeddah, KSA',
  },
  {
    name: 'John vs Jane',
    clubName: 'Sport Life',
    matcheDate: '2024-07-18 10:00',
    status: '3/4 Confirmed',
    location: 'Jeddah, KSA',
  },
];

//--------BOOKING MANAGAEMENT--TRANSECTIONS TABLE DATA --------//
export const TRANSECTIONS_TABLE_HEAD = [
  'S no',
  'Type',
  'User Name',
  'Club name',
  'Amount',
  'Type',
  'Date',
  'Status',
  'Action',
];

export const TRANSECTION_TABLE_ROW = [
  {
    type: 'Booking',
    userName: 'Aqib Javid',
    clubName: 'Fit Club',
    amount: '50$',
    paymentType: 'Payment',
    date: '2024-07-18',
    status: 'Complete',
  },
  {
    type: 'Booking',
    userName: 'Aqib Javid',
    clubName: 'Fit Club',
    amount: '50$',
    paymentType: 'Payment',
    date: '2024-07-18',
    status: 'Complete',
  },
  {
    type: 'Booking',
    userName: 'Aqib Javid',
    clubName: 'Fit Club',
    amount: '50$',
    paymentType: 'Payment',
    date: '2024-07-18',
    status: 'Complete',
  },
];

// ---------Discont Table Data --------//

export const DISCOUNT_TABLE_HEAD = [
  'S no',
  'Code Title',
  'Discount Type',
  'Discount Value',
  'Validity Period',
  'Status',
  'Action',
];

export const DISCOUNT_TABLE_ROW = [
  {
    title: 'SUMMER20',
    type: 'Percentage',
    value: '20%',
    period: '2024-07-01 to 2024-07-31',
    status: 'Active',
  },
  {
    title: 'WINTER10',
    type: 'Fixed',
    value: 'SAR 10',
    period: '2024-07-01 to 2024-07-31',
    status: 'Expired',
  },
  {
    title: 'SPRING15',
    type: 'Percentage',
    value: '20%',
    period: '2024-07-01 to 2024-07-31',
    status: 'Active',
  },
];

//-------------Financial Management----------//
export const revenueReportCardData = [
  {
    user: 'Total Revenue',
    figure: 'SAR 40,980',
    up: true,
    down: false,
    link: routes.totalclubs,
  },
  {
    user: 'This Month Revenue',
    figure: 'SAR 2,520',
    up: false,
    down: true,
    link: '#',
  },
  { user: 'Total Clubs', figure: '1,346', up: true, down: false },
];

//===========FINANCIAL MANAGEMNT=============//
export const FINANCIAL_TABLE_HEAD = [
  'S no',
  'Club name',
  'Club owner',
  'Transiction Type',
  'Amount',
  'Discription',
];
export const FINANCIAL_TABLE_ROW = [
  {
    clubName: 'Downtown Club',
    clubOwner: 'Aqib',
    transictionType: 'Income',
    amount: 'SAR 200',
    discription: 'Membership Fee',
  },
  {
    clubName: 'Downtown Club',
    clubOwner: 'Aqib',
    transictionType: 'Income',
    amount: 'SAR 200',
    discription: 'Membership Fee',
  },
  {
    clubName: 'Downtown Club',
    clubOwner: 'Aqib',
    transictionType: 'Income',
    amount: 'SAR 200',
    discription: 'Membership Fee',
  },
];

//===========FINANCIAL MANAGEMNT=============//
export const DUE_TABLE_HEAD = [
  'S no',
  'Club name',
  'Club owner',
  'Club profit',
  'Total income',
  'Due payment',
  'Status',
  'Action',
];
export const DUE_TABLE_ROW = [
  {
    clubName: 'Downtown Club',
    clubOwner: 'Aqib',
    clubProfit: '3%',
    totalIncome: 'SAR 10,000',
    transactionDue: 'SAR 9,700',
    status: { pending: 'Pending' },
    action: { confirmed: 'Confirmed' },
  },
  {
    clubName: 'Downtown Club',
    clubOwner: 'Aqib',
    clubProfit: '3%',
    totalIncome: 'SAR 10,000',
    transactionDue: 'SAR 9,700',
    status: { confirmed: 'Confirmed' },
    action: { view: 'View' },
  },
  {
    clubName: 'Downtown Club',
    clubOwner: 'Aqib',
    clubProfit: '3%',
    totalIncome: 'SAR 10,000',
    transactionDue: 'SAR 9,700',
    status: { pending: 'Pending' },
    action: { confirmed: 'Confirmed' },
  },
  {
    clubName: 'Downtown Club',
    clubOwner: 'Aqib',
    clubProfit: '3%',
    totalIncome: 'SAR 10,000',
    transactionDue: 'SAR 9,700',
    status: { confirmed: 'Confirmed' },
    action: { view: 'View' },
  },
  {
    clubName: 'Downtown Club',
    clubOwner: 'Aqib',
    clubProfit: '3%',
    totalIncome: 'SAR 10,000',
    transactionDue: 'SAR 9,700',
    status: { confirmed: 'Confirmed' },
    action: { view: 'View' },
  },
  {
    clubName: 'Downtown Club',
    clubOwner: 'Aqib',
    clubProfit: '3%',
    totalIncome: 'SAR 10,000',
    transactionDue: 'SAR 9,700',
    status: { pending: 'Pending' },
    action: { confirmed: 'Confirmed' },
  },
];

//===========FINANCIAL MANAGEMNT TREASURY=============//
export const TREASURY_TABLE_HEAD = [
  'S no',
  'Club name',
  'Club owner',
  'Club profit %',
  'Total income',
  'Transaction due',
  'Action',
  '',
];

export const TREASURY_TABLE_ROW = [
  {
    clubName: 'Downtown Club',
    clubOwner: 'Aqib',
    clubProfit: '3%',
    totalIncome: 'SAR 10,000',
    transactionDue: 'SAR 9,700',
    action: 'Download',
  },
  {
    clubName: 'Downtown Club',
    clubOwner: 'Aqib',
    clubProfit: '3%',
    totalIncome: 'SAR 10,000',
    transactionDue: 'SAR 9,700',
    action: 'Download',
  },
  {
    clubName: 'Downtown Club',
    clubOwner: 'Aqib',
    clubProfit: '3%',
    totalIncome: 'SAR 10,000',
    transactionDue: 'SAR 9,700',
    action: 'Download',
  },
  {
    clubName: 'Downtown Club',
    clubOwner: 'Aqib',
    clubProfit: '3%',
    totalIncome: 'SAR 10,000',
    transactionDue: 'SAR 9,700',
    action: 'Download',
  },
  {
    clubName: 'Downtown Club',
    clubOwner: 'Aqib',
    clubProfit: '3%',
    totalIncome: 'SAR 10,000',
    transactionDue: 'SAR 9,700',
    action: 'Download',
  },
  {
    clubName: 'Downtown Club',
    clubOwner: 'Aqib',
    clubProfit: '3%',
    totalIncome: 'SAR 10,000',
    transactionDue: 'SAR 9,700',
    action: 'Download',
  },
];

//===========SECURITY INCIDENTS TABLE=============//
export const SECURITY_INCIDENTS_TABLE_HEAD = [
  'S no',
  'Description',
  'Detected On',
  'Status',
  'Action',
];

export const SECURITY_INCIDENTS_TABLE_ROW = [
  {
    discription: 'Large transaction anomaly detected',
    detectedOn: '2024-07-18 10:00',
    status: 'Open',
  },
  {
    discription: 'Multiple failed login attempts',
    detectedOn: '2024-07-18 10:00',
    status: 'Resolved',
  },
  {
    discription: 'Large transaction anomaly detected',
    detectedOn: '2024-07-18 10:00',
    status: 'Open',
  },
  {
    discription: 'Multiple failed login attempts',
    detectedOn: '2024-07-18 10:00',
    status: 'Resolved',
  },
  {
    discription: 'Large transaction anomaly detected',
    detectedOn: '2024-07-18 10:00',
    status: 'Open',
  },
  {
    discription: 'Multiple failed login attempts',
    detectedOn: '2024-07-18 10:00',
    status: 'Resolved',
  },
];

//===========AUDIT LOGS TABLE=============//
export const AUDIT_LOGS_TABLE_HEAD = [
  'S no',
  'Action',
  'User',
  'Timestamp',
  'Details',
  'Action',
];

export const AUDIT_LOGS_TABLE_ROW = [
  {
    action: 'User Login',
    user: 'Admin',
    timeStamp: '2024-07-18 10:00',
    details: 'Successful login',
  },
  {
    action: 'User Login',
    user: 'Admin',
    timeStamp: '2024-07-18 10:00',
    details: 'Successful login',
  },
  {
    action: 'User Login',
    user: 'Admin',
    timeStamp: '2024-07-18 10:00',
    details: 'Successful login',
  },
  {
    action: 'User Login',
    user: 'Admin',
    timeStamp: '2024-07-18 10:00',
    details: 'Successful login',
  },
  {
    action: 'User Login',
    user: 'Admin',
    timeStamp: '2024-07-18 10:00',
    details: 'Successful login',
  },
];
//---------------ERROR LOGS TABLE-----------------//
export const ERRORS_LOGS_TABLE_HEAD = [
  'S no',
  'Description',
  'Occurred On',
  'Status',
  'Action',
];

export const ERROS_LOGS_TABLE_ROW = [
  {
    description: 'Database connection failure',
    occurredOn: '2024-07-18 10:00',
    status: 'Open',
  },
  {
    description: 'API request timeout',
    occurredOn: '2024-07-18 10:00',
    status: 'Resolved',
  },
];

//---------------MARKETING NOTIFICATION TABLE DATA---------------//
export const MARKETING_TABLE_HEAD = [
  'Reference ID',
  'Date & Time',
  'Activity type',
  'Description',
];
export const MARKETING_TABLE_ROW = [
  {
    referenceId: 'A123',
    date: '23 Jan, 2024 | 12:30 pm',
    activityType: 'New court added',
    description:
      'New club joined ACE! Use promo code WELCOME10 for 10% off ...',
  },
  {
    referenceId: 'A123',
    date: '23 Jan, 2024 | 12:30 pm',
    activityType: 'New court added',
    description:
      'New club joined ACE! Use promo code WELCOME10 for 10% off ...',
  },
  {
    referenceId: 'A123',
    date: '23 Jan, 2024 | 12:30 pm',
    activityType: 'New court added',
    description:
      'New club joined ACE! Use promo code WELCOME10 for 10% off ...',
  },
  {
    referenceId: 'A123',
    date: '23 Jan, 2024 | 12:30 pm',
    activityType: 'New court added',
    description:
      'New club joined ACE! Use promo code WELCOME10 for 10% off ...',
  },
  {
    referenceId: 'A123',
    date: '23 Jan, 2024 | 12:30 pm',
    activityType: 'New court added',
    description:
      'New club joined ACE! Use promo code WELCOME10 for 10% off ...',
  },
];

//---------------SUPPORT AND FEEDBACK TABLE DATA-----------//




//-----------CONFIGURATION TABLE DATA ----------//
export const CONFIGURATION_TABLE_HEAD = ['S no', 'Title', 'Icon', 'Action'];

//---------CLUB CONFIGURATION TABLE DATA--------//
export const CLUB_CONFIGURATION_TABLE_HEAD = [
  'S no',
  'Club name',
  'Profit%',
  'Start contract',
  'End contract',
  'Action',
];
export const CLUB_CONFIGURATION_TABLE_ROW = [
  {
    clubName: 'Downtown Club',
    profit: '10%',
    startContract: '2024-07-01',
    endContract: '2024-07-31',
  },
  {
    clubName: 'Downtown Club',
    profit: '10%',
    startContract: '2024-07-01',
    endContract: '2024-07-31',
  },
  {
    clubName: 'Downtown Club',
    profit: '10%',
    startContract: '2024-07-01',
    endContract: '2024-07-31',
  },
];

//--------CHAT ROOM----------//
export const chatRoomData = [
  { msgSent: 'Hey there!' },
  { icon: mImage.avatar1, msgReceived: 'Hello! Thanks for reaching out.' },
  {
    msgSent:
      'Hi there! I need to cancel my court booking for tomorrow. Can you help me with that?',
    className: 'sm:w-[345px]',
  },
  {
    icon: mImage.avatar1,
    msgReceived:
      'Of course! Could you please provide me with your booking details?',
    className: 'sm:w-[345px]',
  },
];
