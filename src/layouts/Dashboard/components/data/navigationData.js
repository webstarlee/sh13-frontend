import {
  Dashboard,
  PeopleAlt,
  ImportContacts,
  Email
} from "@mui/icons-material";

export const mainNavigation = [
  {
    name: "Dashboard",
    icon: Dashboard,
    url: `/dashboard`,
  },
  {
    name: "Posts",
    icon: ImportContacts,
    url: `/posts`,
    navigationData: [
      {
        name: "All Posts",
        icon: false,
        url: `/posts/all`,
      },
      {
        name: "Editor",
        icon: false,
        url: `/posts/editor`,
      },
    ],
  },
  {
    name: "Users",
    icon: PeopleAlt,
    url: `/users`,
  },
  {
    name: "Email Account",
    icon: Email,
    url: `/email`,
  },
];