export type TomlCurrency = {
  code: string;
  issuer: string;
  image: string;
  tag?: string;
};

export type TomlResponse = {
  CURRENCIES: TomlCurrency[];
};
