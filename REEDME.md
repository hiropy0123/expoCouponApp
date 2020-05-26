# config file


```app.config.ts
import { ExpoConfig, ConfigContext } from '@expo/config';

// https://docs.expo.io/workflow/configuration/
export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'CouponApp',
  extra: {
    newsApiKey: 'API Key here!',
  },
});

```