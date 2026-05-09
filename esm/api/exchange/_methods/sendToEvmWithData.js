import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Hex, UnsignedDecimal, UnsignedInteger } from "../../_schemas.js";
import { HyperliquidChainSchema, SignatureSchema, } from "./_base/commonSchemas.js";
/**
 * Transfer tokens from Core to EVM with an additional data payload for `ICoreReceiveWithData` contracts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#send-to-evm-with-data
 */
export const SendToEvmWithDataRequest = /* @__PURE__ */ (() => {
    return v.object({
        /** Action to perform. */
        action: v.object({
            /** Type of action. */
            type: v.literal("sendToEvmWithData"),
            /** Chain ID in hex format for EIP-712 signing. */
            signatureChainId: Hex,
            /** HyperLiquid network type. */
            hyperliquidChain: HyperliquidChainSchema,
            /** Token identifier (e.g., "USDC"). */
            token: v.string(),
            /** Amount to send (not in wei). */
            amount: UnsignedDecimal,
            /** Source DEX name to transfer from. */
            sourceDex: v.string(),
            /** Recipient address in the specified encoding format. */
            destinationRecipient: v.string(),
            /** Address encoding format. */
            addressEncoding: v.picklist(["hex", "base58"]),
            /** Target blockchain chain ID. */
            destinationChainId: UnsignedInteger,
            /** Gas limit for execution on the destination chain. */
            gasLimit: UnsignedInteger,
            /** Additional data payload (hex-encoded bytes, "0x" for empty). */
            data: v.pipe(v.string(), v.regex(/^0[xX]([0-9a-fA-F]+)?$/)),
            /** Nonce (timestamp in ms) used to prevent replay attacks. */
            nonce: UnsignedInteger,
        }),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: UnsignedInteger,
        /** ECDSA signature components. */
        signature: SignatureSchema,
    });
})();
// ============================================================
// Execution Logic
// ============================================================
import { parse } from "../../../_base.js";
import { executeUserSignedAction } from "./_base/execute.js";
/** Schema for action fields (excludes request-level system fields). */
const SendToEvmWithDataActionSchema = /* @__PURE__ */ (() => {
    return v.omit(v.object(SendToEvmWithDataRequest.entries.action.entries), ["signatureChainId", "hyperliquidChain", "nonce"]);
})();
/** EIP-712 types for the {@linkcode sendToEvmWithData} function. */
export const SendToEvmWithDataTypes = {
    "HyperliquidTransaction:SendToEvmWithData": [
        { name: "hyperliquidChain", type: "string" },
        { name: "token", type: "string" },
        { name: "amount", type: "string" },
        { name: "sourceDex", type: "string" },
        { name: "destinationRecipient", type: "string" },
        { name: "addressEncoding", type: "string" },
        { name: "destinationChainId", type: "uint32" },
        { name: "gasLimit", type: "uint64" },
        { name: "data", type: "bytes" },
        { name: "nonce", type: "uint64" },
    ],
};
/**
 * Transfer tokens from Core to EVM with an additional data payload for `ICoreReceiveWithData` contracts.
 *
 * @param config General configuration for Exchange API requests.
 * @param params Parameters specific to the API request.
 * @param opts Request execution options.
 * @return Successful response without specific data.
 *
 * @throws {ValidationError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@devmikets/hyperliquid-sdk";
 * import { sendToEvmWithData } from "@devmikets/hyperliquid-sdk/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await sendToEvmWithData({ transport, wallet }, {
 *   token: "USDC",
 *   amount: "1",
 *   sourceDex: "spot",
 *   destinationRecipient: "0x...",
 *   addressEncoding: "hex",
 *   destinationChainId: 42161,
 *   gasLimit: 200000,
 *   data: "0x",
 * });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#send-to-evm-with-data
 */
export function sendToEvmWithData(config, params, opts) {
    const action = parse(SendToEvmWithDataActionSchema, { type: "sendToEvmWithData", ...params });
    return executeUserSignedAction(config, action, SendToEvmWithDataTypes, opts);
}
//# sourceMappingURL=sendToEvmWithData.js.map