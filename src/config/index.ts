export const IS_DEV = process.env.NEXT_PUBLIC_APP_ENV !== 'production';
export const STELLAR_NETWORK = IS_DEV ? 'TESTNET' : 'PUBLIC';
