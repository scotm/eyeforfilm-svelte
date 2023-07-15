export interface Status {
  id: string;
  created_at: Date;
  in_reply_to_id: null;
  in_reply_to_account_id: null;
  sensitive: boolean;
  spoiler_text: string;
  visibility: string;
  language: string;
  uri: string;
  url: string;
  replies_count: number;
  reblogs_count: number;
  favourites_count: number;
  edited_at: null;
  content: string;
  reblog: null;
  application: Application;
  account: Account;
  media_attachments: any[];
  mentions: any[];
  tags: Tag[];
  emojis: any[];
  card: Card;
  poll: null;
}

export interface Account {
  id: string;
  username: string;
  acct: string;
  display_name: string;
  locked: boolean;
  bot: boolean;
  discoverable: boolean;
  group: boolean;
  created_at: Date;
  note: string;
  url: string;
  avatar: string;
  avatar_static: string;
  header: string;
  header_static: string;
  followers_count: number;
  following_count: number;
  statuses_count: number;
  last_status_at: Date;
  noindex: boolean;
  emojis: any[];
  roles: any[];
  fields: Field[];
}

export interface Field {
  name: string;
  value: string;
  verified_at: null;
}

export interface Application {
  name: string;
  website: null;
}

export interface Card {
  url: string;
  title: string;
  description: string;
  type: string;
  author_name: string;
  author_url: string;
  provider_name: string;
  provider_url: string;
  html: string;
  width: number;
  height: number;
  image: null;
  embed_url: string;
  blurhash: null;
}

export interface Tag {
  name: string;
  url: string;
}
