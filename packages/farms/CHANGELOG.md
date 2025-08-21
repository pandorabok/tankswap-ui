# @tankswap/farms

## 1.2.12

### Patch Changes

- Updated dependencies [5b6d71a]
  - @tankswap/tokens@0.7.8
  - @tankswap/stable-swap-sdk@2.0.9
  - @tankswap/price-api-sdk@11.0.2

## 1.2.11

### Patch Changes

- @tankswap/price-api-sdk@11.0.1

## 1.2.10

### Patch Changes

- Updated dependencies [cd589e1]
  - @tankswap/price-api-sdk@11.0.0
  - @tankswap/swap-sdk-core@1.5.0
  - @tankswap/chains@0.6.0
  - @tankswap/stable-swap-sdk@2.0.8
  - @tankswap/sdk@5.8.16
  - @tankswap/token-lists@0.0.16
  - @tankswap/utils@8.0.0
  - @tankswap/v3-sdk@3.9.5
  - @tankswap/tokens@0.7.7

## 1.2.9

### Patch Changes

- Updated dependencies [979f5e0]
  - @tankswap/chains@0.5.3
  - @tankswap/price-api-sdk@10.0.0
  - @tankswap/stable-swap-sdk@2.0.7
  - @tankswap/sdk@5.8.15
  - @tankswap/tokens@0.7.6
  - @tankswap/utils@7.0.1
  - @tankswap/v3-sdk@3.9.4
  - @tankswap/token-lists@0.0.15

## 1.2.8

### Patch Changes

- @tankswap/utils@7.0.0
- @tankswap/price-api-sdk@9.0.0
- @tankswap/stable-swap-sdk@2.0.6
- @tankswap/token-lists@0.0.15
- @tankswap/tokens@0.7.5
- @tankswap/v3-sdk@3.9.3

## 1.2.7

### Patch Changes

- 0bc1b53: Remove lodash deps for @tankswap/farms to support edge api env.
- Updated dependencies [0bc1b53]
  - @tankswap/utils@6.1.5
  - @tankswap/stable-swap-sdk@2.0.6
  - @tankswap/token-lists@0.0.15
  - @tankswap/tokens@0.7.5
  - @tankswap/v3-sdk@3.9.3

## 1.2.6

### Patch Changes

- Updated dependencies [7270ffa]
- Updated dependencies [2f165c8]
  - @tankswap/utils@6.1.4
  - @tankswap/tokens@0.7.5
  - @tankswap/price-api-sdk@8.0.5
  - @tankswap/stable-swap-sdk@2.0.6
  - @tankswap/token-lists@0.0.15
  - @tankswap/v3-sdk@3.9.3

## 1.2.5

### Patch Changes

- @tankswap/price-api-sdk@8.0.4

## 1.2.4

### Patch Changes

- @tankswap/price-api-sdk@8.0.3

## 1.2.3

### Patch Changes

- Updated dependencies [87f089f]
  - @tankswap/utils@6.1.3
  - @tankswap/stable-swap-sdk@2.0.5
  - @tankswap/token-lists@0.0.15
  - @tankswap/tokens@0.7.4
  - @tankswap/v3-sdk@3.9.3

## 1.2.2

### Patch Changes

- Updated dependencies [1718057]
  - @tankswap/utils@6.1.2
  - @tankswap/price-api-sdk@8.0.2
  - @tankswap/stable-swap-sdk@2.0.5
  - @tankswap/token-lists@0.0.15
  - @tankswap/tokens@0.7.4
  - @tankswap/v3-sdk@3.9.3

## 1.2.1

### Patch Changes

- Updated dependencies [3de0443]
  - @tankswap/chains@0.5.2
  - @tankswap/price-api-sdk@8.0.1
  - @tankswap/stable-swap-sdk@2.0.5
  - @tankswap/sdk@5.8.14
  - @tankswap/tokens@0.7.4
  - @tankswap/utils@6.1.1
  - @tankswap/v3-sdk@3.9.3
  - @tankswap/token-lists@0.0.15

## 1.2.0

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
  - @tankswap/swap-sdk-core@1.4.0
  - @tankswap/utils@6.1.0
  - @tankswap/v3-sdk@3.9.2
  - @tankswap/price-api-sdk@8.0.0
  - @tankswap/sdk@5.8.13
  - @tankswap/tokens@0.7.3
  - @tankswap/stable-swap-sdk@2.0.4
  - @tankswap/token-lists@0.0.15

## 1.1.3

### Patch Changes

- Updated dependencies [5f264c5]
- Updated dependencies [0436fec]
  - @tankswap/chains@0.5.1
  - @tankswap/price-api-sdk@7.0.3
  - @tankswap/stable-swap-sdk@2.0.3
  - @tankswap/sdk@5.8.12
  - @tankswap/tokens@0.7.2
  - @tankswap/utils@6.0.11
  - @tankswap/v3-sdk@3.9.1
  - @tankswap/token-lists@0.0.14

## 1.1.2

### Patch Changes

- Updated dependencies [9fa225f]
  - @tankswap/tokens@0.7.1
  - @tankswap/price-api-sdk@7.0.2
  - @tankswap/stable-swap-sdk@2.0.2

## 1.1.1

### Patch Changes

- @tankswap/price-api-sdk@7.0.1

## 1.1.0

### Minor Changes

- 6a6acdb: support monad testnet

### Patch Changes

- Updated dependencies [6a6acdb]
- Updated dependencies [77db844]
  - @tankswap/chains@0.5.0
  - @tankswap/tokens@0.7.0
  - @tankswap/v3-sdk@3.9.0
  - @tankswap/price-api-sdk@7.0.0
  - @tankswap/stable-swap-sdk@2.0.1
  - @tankswap/sdk@5.8.11
  - @tankswap/utils@6.0.10
  - @tankswap/token-lists@0.0.14

## 1.0.84

### Patch Changes

- @tankswap/price-api-sdk@6.0.2

## 1.0.83

### Patch Changes

- @tankswap/price-api-sdk@6.0.1

## 1.0.82

### Patch Changes

- 36f8955: Update packages
- Updated dependencies [36f8955]
  - @tankswap/stable-swap-sdk@2.0.0
  - @tankswap/sdk@5.8.10
  - @tankswap/price-api-sdk@6.0.0
  - @tankswap/tokens@0.6.29
  - @tankswap/utils@6.0.9
  - @tankswap/v3-sdk@3.8.13

## 1.0.81

### Patch Changes

- @tankswap/price-api-sdk@5.0.1

## 1.0.80

### Patch Changes

- Updated dependencies [176eb10]
- Updated dependencies [176eb10]
- Updated dependencies [176eb10]
- Updated dependencies [176eb10]
  - @tankswap/swap-sdk-core@1.3.0
  - @tankswap/price-api-sdk@5.0.0
  - @tankswap/stable-swap-sdk@1.1.4
  - @tankswap/sdk@5.8.9
  - @tankswap/token-lists@0.0.14
  - @tankswap/utils@6.0.9
  - @tankswap/v3-sdk@3.8.12
  - @tankswap/tokens@0.6.28

## 1.0.79

### Patch Changes

- @tankswap/price-api-sdk@4.0.3

## 1.0.78

### Patch Changes

- @tankswap/price-api-sdk@4.0.2

## 1.0.77

### Patch Changes

- Updated dependencies [8218dbf]
  - @tankswap/tokens@0.6.27
  - @tankswap/stable-swap-sdk@1.1.3
  - @tankswap/price-api-sdk@4.0.1

## 1.0.76

### Patch Changes

- 72fb1db: Listed new tokens & farms & gauges config
- Updated dependencies [f3e8a77]
- Updated dependencies [72fb1db]
  - @tankswap/token-lists@0.0.13
  - @tankswap/tokens@0.6.26
  - @tankswap/stable-swap-sdk@1.1.2
  - @tankswap/price-api-sdk@4.0.0

## 1.0.75

### Patch Changes

- Updated dependencies [75c16bc]
  - @tankswap/stable-swap-sdk@1.1.1
  - @tankswap/price-api-sdk@3.0.2

## 1.0.74

### Patch Changes

- 6d4ecf0: List farm, pool, gauges
- Updated dependencies [206fc8d]
- Updated dependencies [6d4ecf0]
  - @tankswap/stable-swap-sdk@1.1.0
  - @tankswap/tokens@0.6.25
  - @tankswap/price-api-sdk@3.0.1

## 1.0.73

### Patch Changes

- Updated dependencies [103dd63]
- Updated dependencies [c6e9e02]
  - @tankswap/tokens@0.6.24
  - @tankswap/price-api-sdk@3.0.0

## 1.0.72

### Patch Changes

- Updated dependencies [f551e5e]
  - @tankswap/swap-sdk-core@1.2.0
  - @tankswap/price-api-sdk@2.0.0
  - @tankswap/sdk@5.8.8
  - @tankswap/token-lists@0.0.12
  - @tankswap/utils@6.0.9
  - @tankswap/v3-sdk@3.8.11
  - @tankswap/tokens@0.6.23

## 1.0.71

### Patch Changes

- Updated dependencies [911d107]
  - @tankswap/v3-sdk@3.8.10
  - @tankswap/price-api-sdk@1.2.18

## 1.0.70

### Patch Changes

- Updated dependencies [fe96bb1]
  - @tankswap/v3-sdk@3.8.9
  - @tankswap/price-api-sdk@1.2.17

## 1.0.69

### Patch Changes

- 4628ab7: Add Subsquid (SQD) token and SQD-ETH farm on Arbitrum
- Updated dependencies [4628ab7]
- Updated dependencies [8f573cf]
  - @tankswap/tokens@0.6.22
  - @tankswap/price-api-sdk@1.2.16

## 1.0.68

### Patch Changes

- @tankswap/price-api-sdk@1.2.15

## 1.0.67

### Patch Changes

- Updated dependencies [9a16780]
  - @tankswap/chains@0.4.6
  - @tankswap/price-api-sdk@1.2.14
  - @tankswap/sdk@5.8.7
  - @tankswap/tokens@0.6.21
  - @tankswap/utils@6.0.9
  - @tankswap/v3-sdk@3.8.8
  - @tankswap/token-lists@0.0.11

## 1.0.66

### Patch Changes

- Updated dependencies [b9c91d1]
- Updated dependencies [5fa28e0]
- Updated dependencies [95cfa0c]
  - @tankswap/chains@0.4.5
  - @tankswap/tokens@0.6.20
  - @tankswap/price-api-sdk@1.2.13
  - @tankswap/sdk@5.8.6
  - @tankswap/utils@6.0.8
  - @tankswap/v3-sdk@3.8.7
  - @tankswap/token-lists@0.0.11

## 1.0.65

### Patch Changes

- edc3f30: Upgrade viem and wagmi
- Updated dependencies [edc3f30]
  - @tankswap/sdk@5.8.5
  - @tankswap/v3-sdk@3.8.6
  - @tankswap/utils@6.0.7
  - @tankswap/price-api-sdk@1.2.12
  - @tankswap/tokens@0.6.19
  - @tankswap/token-lists@0.0.11

## 1.0.64

### Patch Changes

- Updated dependencies [edf4640]
  - @tankswap/chains@0.4.4
  - @tankswap/price-api-sdk@1.2.11
  - @tankswap/sdk@5.8.4
  - @tankswap/tokens@0.6.18
  - @tankswap/utils@6.0.6
  - @tankswap/v3-sdk@3.8.5
  - @tankswap/token-lists@0.0.11

## 1.0.63

### Patch Changes

- 755bb18: New FURY Token. 2 BSC Farms. 3 zkSync Farms. New Gauges.
- 502d961: Add MNT and mETH tokens with their farms and gauges on Ethereum
- Updated dependencies [b57fd91]
- Updated dependencies [e99c216]
- Updated dependencies [755bb18]
- Updated dependencies [502d961]
  - @tankswap/tokens@0.6.17
  - @tankswap/sdk@5.8.3
  - @tankswap/price-api-sdk@1.2.10
  - @tankswap/utils@6.0.5
  - @tankswap/v3-sdk@3.8.4

## 1.0.62

### Patch Changes

- Updated dependencies [b20f210]
- Updated dependencies [9bef4cd]
  - @tankswap/tokens@0.6.16
  - @tankswap/price-api-sdk@1.2.9

## 1.0.61

### Patch Changes

- Updated dependencies [0f4281c]
- Updated dependencies [63a63d8]
  - @tankswap/chains@0.4.3
  - @tankswap/price-api-sdk@1.2.8
  - @tankswap/sdk@5.8.2
  - @tankswap/tokens@0.6.15
  - @tankswap/utils@6.0.5
  - @tankswap/v3-sdk@3.8.3
  - @tankswap/token-lists@0.0.11

## 1.0.60

### Patch Changes

- Updated dependencies [a29edf6]
  - @tankswap/v3-sdk@3.8.2
  - @tankswap/price-api-sdk@1.2.7

## 1.0.59

### Patch Changes

- Updated dependencies [c1f1288]
  - @tankswap/price-api-sdk@1.2.6

## 1.0.58

### Patch Changes

- Updated dependencies [e8c58b7]
  - @tankswap/tokens@0.6.14
  - @tankswap/price-api-sdk@1.2.5

## 1.0.57

### Patch Changes

- @tankswap/price-api-sdk@1.2.4

## 1.0.56

### Patch Changes

- @tankswap/price-api-sdk@1.2.3

## 1.0.55

### Patch Changes

- Updated dependencies [b4a1d82]
  - @tankswap/tokens@0.6.13
  - @tankswap/price-api-sdk@1.2.2

## 1.0.54

### Patch Changes

- 72c834c: Upgrade viem and wagmi v2
- Updated dependencies [72c834c]
- Updated dependencies [d4283e5]
  - @tankswap/sdk@5.8.1
  - @tankswap/chains@0.4.2
  - @tankswap/v3-sdk@3.8.1
  - @tankswap/utils@6.0.4
  - @tankswap/price-api-sdk@1.2.1
  - @tankswap/tokens@0.6.12
  - @tankswap/token-lists@0.0.11

## 1.0.53

### Patch Changes

- Updated dependencies [03bd2a9]
  - @tankswap/price-api-sdk@1.2.0

## 1.0.52

### Patch Changes

- @tankswap/price-api-sdk@1.1.1

## 1.0.51

### Patch Changes

- Updated dependencies [94fdd2a]
  - @tankswap/price-api-sdk@1.1.0

## 1.0.50

### Patch Changes

- Updated dependencies [4a296c0]
  - @tankswap/price-api-sdk@1.0.1

## 1.0.49

### Patch Changes

- dd5b38f: Introduce price api sdk
- Updated dependencies [dd5b38f]
  - @tankswap/price-api-sdk@1.0.0

## 1.0.48

### Patch Changes

- Updated dependencies [30ef48c]
  - @tankswap/tokens@0.6.11

## 1.0.47

### Patch Changes

- Updated dependencies [67ca3d6]
  - @tankswap/v3-sdk@3.8.0

## 1.0.46

### Patch Changes

- d7586b8: Update farms, pools, gauges, tokens
- Updated dependencies [d7586b8]
  - @tankswap/tokens@0.6.10

## 1.0.45

### Patch Changes

- e26505f: List new pool, farm, token and gauges
- Updated dependencies [e26505f]
  - @tankswap/tokens@0.6.9

## 1.0.44

### Patch Changes

- Updated dependencies [928b9a8]
  - @tankswap/tokens@0.6.8

## 1.0.43

### Patch Changes

- Updated dependencies [acc454d]
  - @tankswap/v3-sdk@3.7.13

## 1.0.42

### Patch Changes

- Updated dependencies [610a24a]
  - @tankswap/sdk@5.8.0
  - @tankswap/swap-sdk-core@1.1.0
  - @tankswap/v3-sdk@3.7.12
  - @tankswap/tokens@0.6.7
  - @tankswap/utils@6.0.3
  - @tankswap/token-lists@0.0.11

## 1.0.41

### Patch Changes

- Updated dependencies [c269d43]
  - @tankswap/swap-sdk-core@1.0.1
  - @tankswap/sdk@5.7.7
  - @tankswap/token-lists@0.0.10
  - @tankswap/utils@6.0.2
  - @tankswap/v3-sdk@3.7.11
  - @tankswap/tokens@0.6.6

## 1.0.40

### Patch Changes

- Updated dependencies [6157db8]
  - @tankswap/tokens@0.6.5

## 1.0.39

### Patch Changes

- Updated dependencies [82f61f9]
  - @tankswap/tokens@0.6.4

## 1.0.38

### Patch Changes

- Updated dependencies [b8f0acb]
  - @tankswap/v3-sdk@3.7.10

## 1.0.37

### Patch Changes

- Updated dependencies [a8ffc15]
  - @tankswap/tokens@0.6.3
  - @tankswap/v3-sdk@3.7.9

## 1.0.36

### Patch Changes

- Updated dependencies [91969f80f]
  - @tankswap/sdk@5.7.6
  - @tankswap/chains@0.4.1
  - @tankswap/tokens@0.6.2
  - @tankswap/v3-sdk@3.7.8
  - @tankswap/utils@6.0.1
  - @tankswap/token-lists@0.0.9

## 1.0.35

### Patch Changes

- Updated dependencies [a270af13a]
  - @tankswap/v3-sdk@3.7.7

## 1.0.34

### Patch Changes

- Updated dependencies [48ac84692]
  - @tankswap/tokens@0.6.1
  - @tankswap/v3-sdk@3.7.6

## 1.0.33

### Patch Changes

- Updated dependencies [205c08713]
  - @tankswap/tokens@0.6.0
  - @tankswap/v3-sdk@3.7.5

## 1.0.32

### Patch Changes

- Updated dependencies [ec7e469ca]
  - @tankswap/utils@6.0.0
  - @tankswap/token-lists@0.0.9
  - @tankswap/tokens@0.5.8
  - @tankswap/v3-sdk@3.7.4

## 1.0.31

### Patch Changes

- Updated dependencies [8fcd67c85]
  - @tankswap/chains@0.4.0
  - @tankswap/sdk@5.7.5
  - @tankswap/tokens@0.5.8
  - @tankswap/utils@5.0.8
  - @tankswap/v3-sdk@3.7.4
  - @tankswap/token-lists@0.0.9

## 1.0.30

### Patch Changes

- Updated dependencies [49730e609]
  - @tankswap/chains@0.3.1
  - @tankswap/sdk@5.7.4
  - @tankswap/tokens@0.5.7
  - @tankswap/v3-sdk@3.7.3

## 1.0.29

### Patch Changes

- e39632abf: export the bcake contract abi and address from farm v3

## 1.0.28

### Patch Changes

- 2ec03f1b2: chore: Bump up gauges
- Updated dependencies [2ec03f1b2]
  - @tankswap/sdk@5.7.3
  - @tankswap/v3-sdk@3.7.2
  - @tankswap/tokens@0.5.6

## 1.0.27

### Patch Changes

- Updated dependencies [2bb70e602]
  - @tankswap/tokens@0.5.5
  - @tankswap/v3-sdk@3.7.1

## 1.0.26

### Patch Changes

- Updated dependencies [cd5c4d0ce]
  - @tankswap/v3-sdk@3.7.0

## 1.0.25

### Patch Changes

- Updated dependencies [be74f8b0d]
  - @tankswap/v3-sdk@3.6.0

## 1.0.24

### Patch Changes

- @tankswap/utils@5.0.7
- @tankswap/token-lists@0.0.9
- @tankswap/tokens@0.5.4
- @tankswap/v3-sdk@3.5.4

## 1.0.23

### Patch Changes

- Updated dependencies [c236a3ee4]
  - @tankswap/chains@0.3.0
  - @tankswap/sdk@5.7.2
  - @tankswap/tokens@0.5.4
  - @tankswap/v3-sdk@3.5.4

## 1.0.22

### Patch Changes

- Updated dependencies [d994c3335]
  - @tankswap/token-lists@0.0.9
  - @tankswap/utils@5.0.6
  - @tankswap/tokens@0.5.3
  - @tankswap/v3-sdk@3.5.3

## 1.0.21

### Patch Changes

- 2ceb8e9ff: Dependencies update

## 1.0.20

### Patch Changes

- ed3146c93: Add chain names
- Updated dependencies [ed3146c93]
  - @tankswap/chains@0.2.0
  - @tankswap/sdk@5.7.1
  - @tankswap/tokens@0.5.2
  - @tankswap/v3-sdk@3.5.2

## 1.0.19

### Patch Changes

- Updated dependencies [8e3ac5427]
  - @tankswap/sdk@5.7.0
  - @tankswap/tokens@0.5.1
  - @tankswap/v3-sdk@3.5.1

## 1.0.18

### Patch Changes

- Updated dependencies [435a90ac2]
  - @tankswap/sdk@5.6.0
  - @tankswap/chains@0.1.0
  - @tankswap/tokens@0.5.0
  - @tankswap/v3-sdk@3.5.0

## 1.0.17

### Patch Changes

- 1831356d9: refactor: Move ChainsId usage from Sdk to Chains package
- Updated dependencies [1831356d9]
  - @tankswap/sdk@5.5.0
  - @tankswap/tokens@0.4.4
  - @tankswap/v3-sdk@3.4.4

## 1.0.16

### Patch Changes

- 2d7e1b3e2: Upgraded viem
- Updated dependencies [2d7e1b3e2]
  - @tankswap/sdk@5.4.2
  - @tankswap/v3-sdk@3.4.3
  - @tankswap/utils@5.0.5
  - @tankswap/tokens@0.4.3
  - @tankswap/token-lists@0.0.8

## 1.0.15

### Patch Changes

- 51b77c787: Fix utils deps: `@tankswap/utils` now should not dependent on sdk and awgmi
- Updated dependencies [51b77c787]
  - @tankswap/tokens@0.4.2
  - @tankswap/utils@5.0.4
  - @tankswap/v3-sdk@3.4.2
  - @tankswap/token-lists@0.0.8

## 1.0.14

### Patch Changes

- @tankswap/utils@5.0.3
- @tankswap/token-lists@0.0.8
- @tankswap/tokens@0.4.1
- @tankswap/v3-sdk@3.4.1

## 1.0.13

### Patch Changes

- Updated dependencies [a784ca6ed]
  - @tankswap/utils@5.0.2
  - @tankswap/token-lists@0.0.8
  - @tankswap/tokens@0.4.1
  - @tankswap/v3-sdk@3.4.1

## 1.0.12

### Patch Changes

- Updated dependencies [7a0c21e72]
  - @tankswap/sdk@5.4.1
  - @tankswap/tokens@0.4.1
  - @tankswap/utils@5.0.1
  - @tankswap/v3-sdk@3.4.1
  - @tankswap/token-lists@0.0.8

## 1.0.11

### Patch Changes

- Updated dependencies [868f4d11f]
  - @tankswap/sdk@5.4.0
  - @tankswap/tokens@0.4.0
  - @tankswap/v3-sdk@3.4.0
  - @tankswap/utils@5.0.0
  - @tankswap/token-lists@0.0.8

## 1.0.10

### Patch Changes

- Updated dependencies [d0f9b28a9]
  - @tankswap/tokens@0.3.1
  - @tankswap/utils@4.0.1
  - @tankswap/v3-sdk@3.3.1
  - @tankswap/token-lists@0.0.8

## 1.0.9

### Patch Changes

- Updated dependencies [5e15c611e]
  - @tankswap/sdk@5.3.0
  - @tankswap/tokens@0.3.0
  - @tankswap/v3-sdk@3.3.0
  - @tankswap/utils@4.0.0
  - @tankswap/token-lists@0.0.8

## 1.0.8

### Patch Changes

- @tankswap/utils@3.0.3
- @tankswap/token-lists@0.0.8
- @tankswap/tokens@0.2.3
- @tankswap/v3-sdk@3.2.3

## 1.0.7

### Patch Changes

- b61dcaf37: Adapt farms prices for v3 farms

## 1.0.6

### Patch Changes

- Updated dependencies [e0a681bc6]
  - @tankswap/tokens@0.2.2
  - @tankswap/utils@3.0.2
  - @tankswap/v3-sdk@3.2.2
  - @tankswap/token-lists@0.0.8

## 1.0.5

### Patch Changes

- Updated dependencies [3ba496cb1]
  - @tankswap/sdk@5.2.1
  - @tankswap/tokens@0.2.1
  - @tankswap/utils@3.0.1
  - @tankswap/v3-sdk@3.2.1
  - @tankswap/token-lists@0.0.8

## 1.0.4

### Patch Changes

- Updated dependencies [77fc3406a]
  - @tankswap/sdk@5.2.0
  - @tankswap/tokens@0.2.0
  - @tankswap/v3-sdk@3.2.0
  - @tankswap/utils@3.0.0
  - @tankswap/token-lists@0.0.8

## 1.0.3

### Patch Changes

- Updated dependencies [500adb4f8]
  - @tankswap/tokens@0.1.6
  - @tankswap/utils@2.0.3
  - @tankswap/v3-sdk@3.1.1
  - @tankswap/token-lists@0.0.8

## 1.0.2

### Patch Changes

- Updated dependencies [f9fda4ebe]
  - @tankswap/sdk@5.1.0
  - @tankswap/v3-sdk@3.1.0
  - @tankswap/tokens@0.1.5
  - @tankswap/utils@2.0.2
  - @tankswap/token-lists@0.0.8

## 1.0.1

### Patch Changes

- Updated dependencies [e31475e6b]
  - @tankswap/token-lists@0.0.8
  - @tankswap/utils@2.0.1
  - @tankswap/tokens@0.1.4
  - @tankswap/v3-sdk@3.0.1

## 1.0.0

### Major Changes

- 938aa75f5: Migrate ethers to viem

### Patch Changes

- Updated dependencies [e8a1a97a3]
- Updated dependencies [938aa75f5]
  - @tankswap/v3-sdk@3.0.0
  - @tankswap/sdk@5.0.0
  - @tankswap/utils@2.0.0
  - @tankswap/tokens@0.1.3
  - @tankswap/token-lists@0.0.7

## 0.1.1

### Patch Changes

- Updated dependencies [b5dbd2921]
  - @tankswap/sdk@4.0.0
  - @tankswap/swap-sdk-core@1.0.0
  - @tankswap/v3-sdk@2.0.0
  - @tankswap/utils@1.0.0
  - @tankswap/multicall@2.0.0
  - @tankswap/tokens@0.1.2
  - @tankswap/token-lists@0.0.7

## 0.1.0

### Minor Changes

- 65fbb250a: Bump version

### Patch Changes

- Updated dependencies [65fbb250a]
- Updated dependencies [65fbb250a]
  - @tankswap/v3-sdk@1.0.0
  - @tankswap/multicall@1.0.0
  - @tankswap/sdk@3.2.0
  - @tankswap/swap-sdk-core@0.1.0
  - @tankswap/tokens@0.1.0
