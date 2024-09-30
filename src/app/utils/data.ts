import { link } from "fs";
import { IconsNav } from "../../../public/icons/asideNavIcons";
import { routes } from "./const";

export const AsideNavbarData = [
  { icon: IconsNav.category, title: "Dashboard", link: routes.admin },
  {
    icon: IconsNav.paper,
    title: "Club Management",
    link: routes.clubmanagement,
  },
  {
    icon: IconsNav.user2,
    title: "User Management",
    link: routes.usermanagement,
  },
  { icon: IconsNav.chat, title: "Chat Room", link: "#" },
  {
    icon: IconsNav.calendar,
    title: "Booking Management",
    link: routes.bookingmanagement,
  },
  { icon: IconsNav.discount, title: "Discount", link: routes.discount },
  { icon: IconsNav.wallet, title: "Financial Management", link: "#" },
  { icon: IconsNav.unlock, title: "Security and Audit", link: "#" },
  { icon: IconsNav.setting, title: "Configuration", link: "#" },
  {
    icon: IconsNav.notification,
    title: "Marketing and Notifications",
    link: "#",
  },
  { icon: IconsNav.edit, title: "Support and Feedback", link: "#" },
];

export const dashboardCardData = [
  { user: "Total Users", figure: "101,980", up: true, down: false },
  { user: "New Users", figure: "1,287", up: false, down: true, select: true },
  { user: "Total Club Owner", figure: "4,830", up: true, down: false },
  { user: "Total Booking", figure: "1,346", up: true, down: false },
  { user: "Total Revenue", figure: "SAR", up: false, down: true },
  {
    user: "Total Clubs",
    figure: "SAR 40,980",
    up: true,
    down: false,
    link: routes.totalclubs,
  },
];

export const ClubManagementCardData = [
  {
    user: "Total Clubs",
    figure: "4,781",
    up: true,
    down: false,
    link: routes.totalclubs,
  },
  {
    user: "New Clubs",
    figure: "154",
    up: false,
    down: true,
    select: true,
    link: routes.addnewclub,
  },
  { user: "Total Court", figure: "10,863", up: true, down: false },
];

export const clubOwnersTableData = [
  {
    name: "Imran khan",
    email: "khan@gmail.com",
    phone: "+966865562375",
    courts: "34",
  },
  {
    name: "Imran khan",
    email: "khan@gmail.com",
    phone: "+966865562375",
    courts: "34",
  },
  {
    name: "Imran khan",
    email: "khan@gmail.com",
    phone: "+966865562375",
    courts: "34",
  },
  {
    name: "Imran khan",
    email: "khan@gmail.com",
    phone: "+966865562375",
    courts: "34",
  },
  {
    name: "Imran khan",
    email: "khan@gmail.com",
    phone: "+966865562375",
    courts: "34",
  },
  {
    name: "Imran khan",
    email: "khan@gmail.com",
    phone: "+966865562375",
    courts: "34",
  },
  {
    name: "Imran khan",
    email: "khan@gmail.com",
    phone: "+966865562375",
    courts: "34",
  },
  {
    name: "Imran khan",
    email: "khan@gmail.com",
    phone: "+966865562375",
    courts: "34",
  },
];

//----------CLUBS TABLE -----//
export const CLUBS_TABLE_HEAD = [
  "ID",
  "Club name",
  "Address",
  "Owner name",
  "Wallet balance",
  "Status",
  "Action",
];

export const CLUBS_TABLE_ROW = [
  {
    id: "101",
    clubName: "Downtown Club",
    address: "Markazi Dist, Riyadh, KSA",
    ownerName: "Najee Abid",
    walletBalance: "SAR 276",
  },
  {
    id: "102",
    clubName: "Eastside Club",
    address: "Markazi Dist, Riyadh, KSA",
    ownerName: "Zayed Akhtar",
    walletBalance: "SAR 276",
  },
];

export const userManagementCardData = [
  {
    user: "Total Users",
    figure: "101,980",
    up: true,
    down: false,
    link: routes.usermanagement,
  },
  {
    user: "New Users",
    figure: "1,287",
    up: false,
    down: true,
    select: true,
    link: routes.addnewuser,
  },
];

export const UserTableData = [
  {
    name: "Aqib javid",
    email: "javid@gmail.com",
    phoneNumber: "+9664234232",
    walletBalance: "SAR 100",
    gender: "Male",
    location: "Jeddah KSA",
    link: routes.userdetails,
  },
  {
    name: "Aasim shah",
    email: "aasim@gmail.com",
    phoneNumber: "+009664234232",
    walletBalance: "SAR 100",
    gender: "Male",
    location: "Riyad KSA",
    link: routes.userdetails,
  },
  {
    name: "Alima Salek",
    email: "salek@gmail.com",
    phoneNumber: "+009664234232",
    walletBalance: "SAR 100",
    gender: "Femal",
    location: "Jeddah KSA",
    link: routes.userdetails,
  },
];

export const bookingHistoryData = [
  {
    bookingId: "001",
    date: "2024-06-15",
    clubName: "Downtown Club",
    courtType: "Tennis 1",
    location: "Jeddah, KSA",
    payment: "SAR 100",
    status: {
      completed: "completed",
    },
  },
  {
    bookingId: "002",
    date: "2024-06-15",
    clubName: "Eastside Club",
    courtType: "Padel tenis",
    location: "Jeddah, KSA",
    payment: "SAR 35",
    status: {
      partiallyPaid: "partially paid",
    },
  },
  {
    bookingId: "003",
    date: "2024-06-15",
    clubName: "Westside Club",
    courtType: "Tennis 2",
    location: "Jeddah, KSA",
    payment: "SAR 45",
    status: {
      completed: "completed",
    },
  },
];

//---------Booking management card data-----------//

export const bookingmanagementCardData = [
  {
    user: "Total Booking",
    figure: "101,980",
    up: true,
    down: false,
    link: "#",
  },
  {
    user: "New Bookings",
    figure: "1,287",
    up: false,
    down: true,
    select: true,
    link: "#",
  },
  {
    user: "Cancelled Bookings",
    figure: "1,287",
    up: false,
    down: true,
    select: true,
    link: "#",
  },
];

//......Booking Management table data.......//

export const TABLE_HEAD = [
  "S no",
  "Name",
  "Club name",
  "Booking date",
  "Status",
  "Location",
  "Action",
];

export const TABLE_ROWS = [
  {
    sno: 1,
    img: "IJ",
    name: "Aqib javid",
    clubName: "Sport Life",
    bookingDate: "2024-07-18 10:00",
    status: "Confirmed",
    location: "Jeddah, KSA",
  },
  {
    sno: 2,
    img: "AS",
    name: "Asim Shah",
    clubName: "Sport Life",
    bookingDate: "2024-07-18 10:00",
    status: "Confirmed",
    location: "Jeddah, KSA",
  },
  {
    sno: 3,
    img: "NA",
    name: "Nabi Ameen",
    clubName: "Sport Life",
    bookingDate: "2024-07-18 10:00",
    status: "Confirmed",
    location: "Jeddah, KSA",
  },
];

// ---------Discont Table Data --------//

export const DISCOUNT_TABLE_HEAD = [
  "S no",
  "Code Title",
  "Discount Type",
  "Discount Value",
  "Validity Period",
  "Status",
  "Action",
];

export const DISCOUNT_TABLE_ROW = [
  {
    title: "SUMMER20",
    type: "Percentage",
    value: "20%",
    period: "2024-07-01 to 2024-07-31",
    status: "Active",
  },
  {
    title: "WINTER10",
    type: "Fixed",
    value: "SAR 10",
    period: "2024-07-01 to 2024-07-31",
    status: "Completed",
  },
  {
    title: "SPRING15",
    type: "Percentage",
    value: "20%",
    period: "2024-07-01 to 2024-07-31",
    status: "Active",
  },
];
