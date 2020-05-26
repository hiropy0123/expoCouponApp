# config file


app.json
```json
{
  "expo": {
    "name": "CouponApp",
    "slug": "CouponApp",
    "platforms": ["ios", "android"],
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "bundleIdentifier": "",
      "buildNumber": "1.0.0",
      "config": {
        "googleSignIn": {
          "reservedClientId": ""
        }
      },
      "googleServicesFile": "./configs/GoogleService-Info.plist",
      "supportsTablet": false
    },
    "android": {
      "package": "",
      "versionCode": 1,
      "googleServicesFile": "./configs/google-services.json"
    }
  }
}
```



app.config.ts
```ts
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