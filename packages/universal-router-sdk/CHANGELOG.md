# @tankswap/universal-router-sdk

## 1.4.14

### Patch Changes

- @tankswap/smart-router@7.5.2

## 1.4.13

### Patch Changes

- Updated dependencies [1de662b]
  - @tankswap/infinity-sdk@1.0.5
  - @tankswap/smart-router@7.5.1

## 1.4.12

### Patch Changes

- Updated dependencies [cd589e1]
- Updated dependencies [1f6c9ec]
  - @tankswap/smart-router@7.5.0
  - @tankswap/chains@0.6.0
  - @tankswap/infinity-sdk@1.0.4
  - @tankswap/sdk@5.8.16
  - @tankswap/v3-sdk@3.9.5
  - @tankswap/permit2-sdk@1.1.5

## 1.4.11

### Patch Changes

- Updated dependencies [979f5e0]
  - @tankswap/smart-router@7.4.0
  - @tankswap/chains@0.5.3
  - @tankswap/infinity-sdk@1.0.3
  - @tankswap/permit2-sdk@1.1.4
  - @tankswap/sdk@5.8.15
  - @tankswap/v3-sdk@3.9.4

## 1.4.10

### Patch Changes

- Updated dependencies [ea1da46]
  - @tankswap/smart-router@7.3.0
  - @tankswap/infinity-sdk@1.0.2
  - @tankswap/v3-sdk@3.9.3

## 1.4.9

### Patch Changes

- 8fe32db: Update Base Address

## 1.4.8

### Patch Changes

- 174f538: Handle WrapEth when give user changes

## 1.4.7

### Patch Changes

- e6c8008: Update Wrap Output Behavior
  - @tankswap/infinity-sdk@1.0.2
  - @tankswap/smart-router@7.2.5
  - @tankswap/v3-sdk@3.9.3

## 1.4.6

### Patch Changes

- 0895014: Allow Contract Call without perm2 from unwrap
- Updated dependencies [7270ffa]
- Updated dependencies [2f165c8]
  - @tankswap/smart-router@7.2.5
  - @tankswap/infinity-sdk@1.0.2
  - @tankswap/v3-sdk@3.9.3

## 1.4.5

### Patch Changes

- Updated dependencies [5b4135c]
  - @tankswap/infinity-sdk@1.0.2
  - @tankswap/smart-router@7.2.4

## 1.4.4

### Patch Changes

- Updated dependencies [36fdc2a]
  - @tankswap/smart-router@7.2.3

## 1.4.3

### Patch Changes

- 87f089f: Bump version for update deps in @tankswap/utils
  - @tankswap/infinity-sdk@1.0.1
  - @tankswap/smart-router@7.2.2
  - @tankswap/v3-sdk@3.9.3

## 1.4.2

### Patch Changes

- 9cc7613: Add unit test for option payerIsUser
- Updated dependencies [1718057]
  - @tankswap/smart-router@7.2.2
  - @tankswap/infinity-sdk@1.0.1
  - @tankswap/v3-sdk@3.9.3

## 1.4.1

### Patch Changes

- Updated dependencies [10acda5]
- Updated dependencies [3de0443]
  - @tankswap/infinity-sdk@1.0.1
  - @tankswap/chains@0.5.2
  - @tankswap/smart-router@7.2.1
  - @tankswap/permit2-sdk@1.1.3
  - @tankswap/sdk@5.8.14
  - @tankswap/v3-sdk@3.9.3

## 1.4.0

### Minor Changes

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

### Patch Changes

- Updated dependencies [cb44715]
  - @tankswap/infinity-sdk@1.0.0
  - @tankswap/smart-router@7.2.0
  - @tankswap/v3-sdk@3.9.2
  - @tankswap/sdk@5.8.13
  - @tankswap/permit2-sdk@1.1.2

## 1.3.2

### Patch Changes

- Updated dependencies [5f264c5]
- Updated dependencies [0436fec]
  - @tankswap/chains@0.5.1
  - @tankswap/permit2-sdk@1.1.1
  - @tankswap/smart-router@7.1.3
  - @tankswap/sdk@5.8.12
  - @tankswap/v3-sdk@3.9.1

## 1.3.1

### Patch Changes

- Updated dependencies [9fa225f]
  - @tankswap/smart-router@7.1.2

## 1.3.0

### Minor Changes

- 5bcf3e0: Add payerIsUser option to erc20 swap calldata encoding

## 1.2.0

### Minor Changes

- 5d6c6e0: Add payerIsUser option

## 1.1.1

### Patch Changes

- @tankswap/smart-router@7.1.1

## 1.1.0

### Minor Changes

- 6a6acdb: support monad testnet

### Patch Changes

- Updated dependencies [6a6acdb]
  - @tankswap/chains@0.5.0
  - @tankswap/permit2-sdk@1.1.0
  - @tankswap/smart-router@7.1.0
  - @tankswap/v3-sdk@3.9.0
  - @tankswap/sdk@5.8.11

## 1.0.42

### Patch Changes

- Updated dependencies [8578d8f]
  - @tankswap/smart-router@7.0.2

## 1.0.41

### Patch Changes

- Updated dependencies [4181a79]
  - @tankswap/smart-router@7.0.1

## 1.0.40

### Patch Changes

- Updated dependencies [36f8955]
  - @tankswap/smart-router@7.0.0
  - @tankswap/sdk@5.8.10
  - @tankswap/permit2-sdk@1.0.12
  - @tankswap/v3-sdk@3.8.13

## 1.0.39

### Patch Changes

- @tankswap/smart-router@6.2.1

## 1.0.38

### Patch Changes

- Updated dependencies [176eb10]
- Updated dependencies [176eb10]
  - @tankswap/smart-router@6.2.0
  - @tankswap/sdk@5.8.9
  - @tankswap/v3-sdk@3.8.12
  - @tankswap/permit2-sdk@1.0.11

## 1.0.37

### Patch Changes

- @tankswap/smart-router@6.1.6

## 1.0.36

### Patch Changes

- Updated dependencies [3e83a9c]
  - @tankswap/smart-router@6.1.5

## 1.0.35

### Patch Changes

- @tankswap/smart-router@6.1.4

## 1.0.34

### Patch Changes

- @tankswap/smart-router@6.1.3

## 1.0.33

### Patch Changes

- @tankswap/smart-router@6.1.2

## 1.0.32

### Patch Changes

- Updated dependencies [618ad06]
  - @tankswap/smart-router@6.1.1

## 1.0.31

### Patch Changes

- Updated dependencies [b1d1eaf]
  - @tankswap/smart-router@6.1.0

## 1.0.30

### Patch Changes

- @tankswap/smart-router@6.0.17
- @tankswap/sdk@5.8.8
- @tankswap/v3-sdk@3.8.11
- @tankswap/permit2-sdk@1.0.10

## 1.0.29

### Patch Changes

- Updated dependencies [911d107]
  - @tankswap/v3-sdk@3.8.10
  - @tankswap/smart-router@6.0.16

## 1.0.28

### Patch Changes

- Updated dependencies [fe96bb1]
  - @tankswap/v3-sdk@3.8.9
  - @tankswap/smart-router@6.0.15

## 1.0.27

### Patch Changes

- @tankswap/smart-router@6.0.14

## 1.0.26

### Patch Changes

- Updated dependencies [9a16780]
  - @tankswap/chains@0.4.6
  - @tankswap/permit2-sdk@1.0.9
  - @tankswap/smart-router@6.0.13
  - @tankswap/sdk@5.8.7
  - @tankswap/v3-sdk@3.8.8

## 1.0.25

### Patch Changes

- Updated dependencies [b9c91d1]
  - @tankswap/chains@0.4.5
  - @tankswap/permit2-sdk@1.0.8
  - @tankswap/smart-router@6.0.12
  - @tankswap/sdk@5.8.6
  - @tankswap/v3-sdk@3.8.7

## 1.0.24

### Patch Changes

- edc3f30: Upgrade viem and wagmi
- Updated dependencies [edc3f30]
  - @tankswap/smart-router@6.0.11
  - @tankswap/permit2-sdk@1.0.7
  - @tankswap/sdk@5.8.5
  - @tankswap/v3-sdk@3.8.6

## 1.0.23

### Patch Changes

- Updated dependencies [edf4640]
  - @tankswap/chains@0.4.4
  - @tankswap/permit2-sdk@1.0.6
  - @tankswap/smart-router@6.0.10
  - @tankswap/sdk@5.8.4
  - @tankswap/v3-sdk@3.8.5

## 1.0.22

### Patch Changes

- Updated dependencies [e99c216]
  - @tankswap/sdk@5.8.3
  - @tankswap/smart-router@6.0.9
  - @tankswap/permit2-sdk@1.0.5
  - @tankswap/v3-sdk@3.8.4

## 1.0.21

### Patch Changes

- @tankswap/smart-router@6.0.8

## 1.0.20

### Patch Changes

- Updated dependencies [0f4281c]
- Updated dependencies [63a63d8]
  - @tankswap/chains@0.4.3
  - @tankswap/permit2-sdk@1.0.4
  - @tankswap/smart-router@6.0.7
  - @tankswap/sdk@5.8.2
  - @tankswap/v3-sdk@3.8.3

## 1.0.19

### Patch Changes

- Updated dependencies [a29edf6]
  - @tankswap/v3-sdk@3.8.2
  - @tankswap/smart-router@6.0.6

## 1.0.18

### Patch Changes

- @tankswap/smart-router@6.0.5

## 1.0.17

### Patch Changes

- @tankswap/smart-router@6.0.4

## 1.0.16

### Patch Changes

- @tankswap/smart-router@6.0.3

## 1.0.15

### Patch Changes

- 72c834c: Upgrade viem and wagmi v2
- Updated dependencies [72c834c]
- Updated dependencies [d4283e5]
  - @tankswap/smart-router@6.0.2
  - @tankswap/permit2-sdk@1.0.3
  - @tankswap/sdk@5.8.1
  - @tankswap/chains@0.4.2
  - @tankswap/v3-sdk@3.8.1

## 1.0.14

### Patch Changes

- Updated dependencies [1aaed60]
  - @tankswap/smart-router@6.0.1

## 1.0.13

### Patch Changes

- Updated dependencies [1d74cbb]
  - @tankswap/smart-router@6.0.0

## 1.0.12

### Patch Changes

- Updated dependencies [4e88d8f]
  - @tankswap/smart-router@5.1.8

## 1.0.11

### Patch Changes

- @tankswap/smart-router@5.1.7

## 1.0.10

### Patch Changes

- Updated dependencies [67ca3d6]
  - @tankswap/v3-sdk@3.8.0
  - @tankswap/smart-router@5.1.6

## 1.0.9

### Patch Changes

- d807074: Remove smart router evm sub path
- Updated dependencies [ab7f9fb]
- Updated dependencies [d807074]
  - @tankswap/smart-router@5.1.5

## 1.0.8

### Patch Changes

- @tankswap/smart-router@5.1.4

## 1.0.7

### Patch Changes

- @tankswap/smart-router@5.1.3

## 1.0.6

### Patch Changes

- Updated dependencies [526586d]
  - @tankswap/smart-router@5.1.2

## 1.0.5

### Patch Changes

- Updated dependencies [e6e8751]
  - @tankswap/smart-router@5.1.1

## 1.0.4

### Patch Changes

- Updated dependencies [31ec81b]
  - @tankswap/permit2-sdk@1.0.2

## 1.0.3

### Patch Changes

- Updated dependencies [3b76a26]
  - @tankswap/smart-router@5.1.0

## 1.0.2

### Patch Changes

- @tankswap/smart-router@5.0.4

## 1.0.1

### Patch Changes

- acc454d: Remove binance extension wallet connector @tankswap/wagmi
  release new pkg @tankswap/universal-router-sdk & @tankswap/permit2-sdk
- Updated dependencies [acc454d]
  - @tankswap/smart-router@5.0.3
  - @tankswap/permit2-sdk@1.0.1
  - @tankswap/v3-sdk@3.7.13
