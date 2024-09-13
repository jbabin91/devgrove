import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  client: {
    NEXT_PUBLIC_DOCSEARCH_API_KEY: z.string(),
    NEXT_PUBLIC_DOCSEARCH_APP_ID: z.string(),
    NEXT_PUBLIC_DOCSEARCH_INDEX_NAME: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_DOCSEARCH_API_KEY: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY,
    NEXT_PUBLIC_DOCSEARCH_APP_ID: process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID,
    NEXT_PUBLIC_DOCSEARCH_INDEX_NAME:
      process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME,
  },
  server: {},
});
