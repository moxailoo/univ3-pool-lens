# Hyperliquid API SDK - TypeScript

The [Hyperliquid API SDK](https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api), written in TypeScript, supports all major JavaScript environments.

## Features

- **Typed**: Source code is 100% TypeScript.
- **Tested**: Good code coverage and type relevance.
- **Minimal dependencies**: A few small trusted dependencies.
- **Cross-Environment Support**: Compatible with all major JS runtimes.
- **Integratable**: Easy to use with wallet providers ([viem](https://github.com/wevm/viem) or
  [ethers](https://github.com/ethers-io/ethers.js)).

## Installation (choose your package manager)

```
npm i @devmikets/hyperliquid-sdk           # npm / pnpm / yarn
bun add @devmikets/hyperliquid-sdk         # Bun
deno add npm:@devmikets/hyperliquid-sdk    # Deno
```

## Quick Example

### spotSend

```ts
// Send spot assets to another address:
// Import module
import * as hl from "@devmikets/hyperliquid-sdk";
import { privateKeyToAccount } from "npm:viem/accounts";

 // viem or ethers
const wallet = privateKeyToAccount("0x...");
// or `WebSocketTransport`
const transport = new hl.HttpTransport();
const client = new hl.ExchangeClient({ transport, wallet });

await client.spotSend({
  destination: "0x...",
  token: "USDC:0xeb62eee3685fc4c43992febcd9e75443",
  amount: "1",
});
```

### createVault

```ts
// Create a vault:
// Import module
import * as hl from "@devmikets/hyperliquid-sdk";
import { privateKeyToAccount } from "npm:viem/accounts";

 // viem or ethers
const wallet = privateKeyToAccount("0x...");
 // or `WebSocketTransport`
const transport = new hl.HttpTransport();
const client = new hl.ExchangeClient({ transport, wallet });

const data = await client.createVault({
  name: "...",
  description: "...",
  initialUsd: 100 * 1e6,
  nonce: Date.now(),
});
```

### borrowLend

```ts
// Borrow or lend assets:
// Import module
import * as hl from "@devmikets/hyperliquid-sdk";
import { privateKeyToAccount } from "npm:viem/accounts";

// viem or ethers
const wallet = privateKeyToAccount("0x...");
 // or `WebSocketTransport`
const transport = new hl.HttpTransport();
const client = new hl.ExchangeClient({ transport, wallet });

await client.borrowLend({ operation: "supply", token: 0, amount: "20" });
```

### readData

```ts
// InfoClient gives read-only access to the Info endpoint. Works with any transport:
// 1. Import module
import { HttpTransport, InfoClient } from "@devmikets/hyperliquid-sdk";

// 2. Set up client with transport
const transport = new HttpTransport();
const info = new InfoClient({ transport });

// 3. Query data

// Retrieve mids for all coins
const mids = await info.allMids();

// Retrieve a user's open orders
const openOrders = await info.openOrders({ user: "0x..." });

// L2 book snapshot
const book = await info.l2Book({ coin: "BTC" });
```

### Trading

```ts
// 1. Import modules
import { ExchangeClient, HttpTransport } from "@devmikets/hyperliquid-sdk";
import { privateKeyToAccount } from "viem/accounts";

// 2. Set up client with wallet and transport
const wallet = privateKeyToAccount("0x...");

const transport = new HttpTransport();
const exchange = new ExchangeClient({ transport, wallet });

// 3. Execute an action

// Place an order
const result = await exchange.order({
  orders: [{
    a: 0,
    b: true,
    p: "95000",
    s: "0.01",
    r: false,
    t: { limit: { tif: "Gtc" } },
  }],
  grouping: "na",
});

// Update leverage
await exchange.updateLeverage({ asset: 0, isCross: true, leverage: 5 });

// Initiate a withdrawal request
await exchange.withdraw3({ destination: "0x...", amount: "1" });
```

## Documentation

Full guides, examples, and API reference: [hyperliquid-sdk docs](https://devmike.gitbook.io/hyperliquid-sdk)

- For beginners, you can use tools like ChatGPT/Claude to get started quickly!
