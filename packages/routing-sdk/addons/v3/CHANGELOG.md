# @tankswap/routing-sdk-addon-v3

## 5.0.2

### Patch Changes

- Updated dependencies [cd589e1]
  - @tankswap/swap-sdk-core@1.5.0
  - @tankswap/chains@0.6.0
  - @tankswap/routing-sdk@0.5.2
  - @tankswap/v3-sdk@3.9.5

## 5.0.1

### Patch Changes

- Updated dependencies [979f5e0]
  - @tankswap/chains@0.5.3
  - @tankswap/routing-sdk@0.5.1
  - @tankswap/v3-sdk@3.9.4

## 5.0.0

### Patch Changes

- Updated dependencies [ea1da46]
  - @tankswap/routing-sdk@0.5.0
  - @tankswap/v3-sdk@3.9.3

## 4.0.1

### Patch Changes

- Updated dependencies [3de0443]
  - @tankswap/chains@0.5.2
  - @tankswap/routing-sdk@0.4.1
  - @tankswap/v3-sdk@3.9.3

## 4.0.0

### Patch Changes

- cb44715: [Major Updates]
  **@tankswap/routing-sdk-addon-infinity**
  **@tankswap/routing-sdk-addon-quoter**
  **@tankswap/infinity-sdk**

  3 packages added for support infinity(CL & Bin) pools and dynamic hooks path finding and liquidity management.

  [Minor Updates]
  **@tankswap/universal-router-sdk**: This update implements Infinity CL/BIN route planning, merges and restructures code for stable, V2, V3, and Infinity pools, refactors commands into a RoutePlanner, and removes legacy ABIs. It adds new decode logic for universal calldata, reorganizes input token permits, and updates addresses in constants, improving flexibility and reducing complexity.

  **@tankswap/widgets-internal** : Add Infinity modules, "PriceRangeChartWithPeriodAndLiquidity," new "ProtocolMenu," "PoolTypeFilter," and "Tips," and remove "PoolTagFilter," "PoolTypeMenu." We update "FeatureStack" (folding/info icons), "FeeTierTooltip," "NetworkFilter," "TokenFilter," "TokenOverview," and ROI logic. We also revise Infinity liquidity features with new chart components and hooks.

  **@tankswap/swap-sdk-core**: Reduce rounding errors and improve quote accuracy, with refined type definitions ensuring a smoother developer experience.

  **@tankswap/smart-router**: Refactored some references to Infinity and introduced InfinityRouter with Infinity CL and BIN pools. Removed V4 code, updated on-chain quote providers, route encoders, logging, and aggregator logic. Enhanced route handling performance and ensured compatibility with Infinity SDK for improved quoting.

  **@tankswap/routing-sdk**: Add Infinity CL and Bin pool support to the routing SDK. Introduce new constants, math utilities, and route encoding for Infinity mixed routes. Integrate Infinity quoter logic, including bin and CL quote calls, gas cost estimation, and logging improvements for better debugging.

  **@tankswap/farms**: Added InfinityBIN and InfinityCLAMM protocols, introduced BSC testnet support, updated fetch logic to handle zeroAddress with Native tokens, and included new V4 farm format in utilities. Also updated test exports, chain arrays, and support lists to incorporate these changes and ensure robust universal farm configuration.

  **@tankswap/uikit**
  '@tankswap/utils': Added forwardRef support to Breadcrumbs, new Button variant "textPrimary60," a noButtonMargin prop in ButtonMenu, children rendering in CopyButton, itemKey in DropdownMenu, new icons (CurveGraph, CurvedChart, HookFeature, SpotGraph), updated color tokens and styles, refined useModal logic.

  [Patch Updates]

  Added support for infinity by introducing internal types and updating unit tests to improve code maintainability and logging accuracy.

- Updated dependencies [cb44715]
  - @tankswap/swap-sdk-core@1.4.0
  - @tankswap/routing-sdk@0.4.0
  - @tankswap/v3-sdk@3.9.2

## 3.0.1

### Patch Changes

- Updated dependencies [5f264c5]
- Updated dependencies [0436fec]
  - @tankswap/chains@0.5.1
  - @tankswap/routing-sdk@0.3.1
  - @tankswap/v3-sdk@3.9.1

## 3.0.0

### Patch Changes

- Updated dependencies [6a6acdb]
  - @tankswap/chains@0.5.0
  - @tankswap/routing-sdk@0.3.0
  - @tankswap/v3-sdk@3.9.0

## 2.0.3

### Patch Changes

- @tankswap/v3-sdk@3.8.13

## 2.0.2

### Patch Changes

- Updated dependencies [176eb10]
- Updated dependencies [176eb10]
- Updated dependencies [ffa96b3]
  - @tankswap/swap-sdk-core@1.3.0
  - @tankswap/routing-sdk@0.2.2
  - @tankswap/v3-sdk@3.8.12

## 2.0.1

### Patch Changes

- Updated dependencies [f2818f6]
  - @tankswap/routing-sdk@0.2.1

## 2.0.0

### Minor Changes

- 618ad06: Introduce routing sdk quoter addon

### Patch Changes

- Updated dependencies [618ad06]
  - @tankswap/routing-sdk@0.2.0

## 1.0.0

### Minor Changes

- b1d1eaf: Introduce routing sdk addons

### Patch Changes

- Updated dependencies [b1d1eaf]
  - @tankswap/routing-sdk@0.1.0
