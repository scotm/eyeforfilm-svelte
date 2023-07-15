export type Menu = {
  title: string;
  url?: string;
  links: Link[];
  bottomLinks?: Link[];
};

export type Link = {
  title: string;
  url: string;
  description: string;
  icon?: string;
};
