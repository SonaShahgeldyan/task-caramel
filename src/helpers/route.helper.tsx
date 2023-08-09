export type RouteParam = number | string | undefined;
export const RoutesConstants = {
  login: () => "/login/",
  register: () => "/register/",
  home: () => "/",
  reports: () => "/reports/",
  websites: () => "/websites/",
  website: (id: RouteParam) => `/website/${id}/`,
};
