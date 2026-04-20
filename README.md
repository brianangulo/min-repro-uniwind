# Minimum Reproduction: Uniwind + Expo Tree Shaking Build Failure

This is a minimal reproduction of a build failure when using **uniwind** with Expo's experimental tree shaking on Android.

## The Issue

When building an Android app with Expo's tree shaking enabled (`EXPO_UNSTABLE_METRO_OPTIMIZE_GRAPH=1` and `EXPO_UNSTABLE_TREE_SHAKING=1`), the Hermes bytecode compilation fails because an ESM `import` statement from uniwind survives into the final bundle:

```
'import' statement requires module mode
import { Uniwind } from 'uniwind';
```

## Versions

| Package | Version |
| --- | --- |
| expo | ^55.0.0 |
| react-native | 0.83.2 |
| react | 19.2.0 |
| tailwindcss | ^4.2.0 |
| uniwind | ^1.3.2 |

## Reproduce Locally

```bash
bun install
EXPO_UNSTABLE_METRO_OPTIMIZE_GRAPH=1 EXPO_UNSTABLE_TREE_SHAKING=1 npx expo export --platform android
```

## Reproduce via EAS Build

The `preview` and `production` profiles in `eas.json` have the tree shaking env vars set:

```bash
eas build --platform android --profile preview
```

## Expected Behavior

The build should complete successfully -- uniwind's ESM exports should be transformed to CJS-compatible format during the Metro bundling step before Hermes compilation.

## Actual Behavior

Hermes compilation fails because it encounters a raw ESM `import` statement that was not transformed.
