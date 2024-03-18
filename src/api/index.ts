import { IS_DEV } from '@/config';

export const horizon = {
  TESTNET: 'https://horizon-testnet.stellar.org',
  PUBLIC: 'https://horizon.stellar.org',
};

export const HORIZON_API = IS_DEV ? horizon.TESTNET : horizon.PUBLIC;

export const api = Object.freeze({
  RPCIEGE: ' https://api.rpciege.com',
  DISCORD: 'https://discord.com/api',
});

const RATE_LIMIT_ERROR_MESSAGE = 'Rate Limited! Please try again later.';

export async function handleResponse(response: Response) {
  const { headers, ok } = response;
  const contentType = headers.get('content-type');

  const content = contentType
    ? contentType.includes('json')
      ? response.json()
      : response.text()
    : {
        status: response.status,
        message: response.status === 429 ? RATE_LIMIT_ERROR_MESSAGE : response.statusText,
      };

  if (ok) return content;
  else throw await content;
}
