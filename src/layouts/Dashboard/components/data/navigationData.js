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
    url: `/home`,
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
    name: "User Manage",
    icon: PeopleAlt,
    url: `/usermanage`,
  },
  {
    name: "Email Account",
    icon: Email,
    url: `/email`,
  },
];