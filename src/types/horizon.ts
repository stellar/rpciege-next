export type Account = {
  id: string;
  sequence: string;
  balances: Balance[];
};

export type Balance = {
  balance: string;
  limit: string;
  sponsor: string;
  asset_type: string;
  asset_code: string;
  asset_issuer: string;
};

export type ClaimableBalance = {
  id: string;
  asset: string;
  amount: string;
  sponsor: string;
};

export type HorizonResponse<T> = {
  _links: {
    self: {
      href: string;
    };
    next: {
      href: string;
    };
    prev: {
      href: string;
    };
  };
  _embedded: {
    records: T[];
  };
};
