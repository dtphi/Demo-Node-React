/**
 * 
 * Client1 =====encrypt=====> Server1 =============> Server2 =====decrypt====> Client2
 * 
 * e2e: encrypt at client send and decrypt at client receive ( not decrypt at the between server)
 */

/**
 * keySystem: common key at server.
 * keySecretClient1: key secret of client1
 * keySecretClient2: key secret of client2
 * 
 * keyPublicClient1: key public of client1; keyPublicClient1 = keySecretClient1 + keySystem
 * keyPublicClient2: key public of client2; keyPublicClient2 = keySecretClient2 + keySystem
 * 
 * Create key common for client1 and client2. so that client1 and client2 there are key common as same key.
 * 
 * keyCommonClient1 = keySecretClient1 + keyPublicClient2
 * keyCommonClient2 = keySecretClient2 + keyPublicClient1
 * 
 * Result:
 * keyCommonClient1 === keyCommonClient2
 * 
 * client1 and client2 using keyCommonClient to decrypt messages.
 * keySystem can change once a per month to security.
 */

const keySystem = 10
const keySecretClient1 = 20
const keySecretClient2 = 30

// Client get key system on the server to create public key at client.
const keyPublicClient1 = keySecretClient1 + keySystem
const keyPublicClient2 = keySecretClient2 + keySystem

// Decrypt message using secret key and public key at each client.
const keyCommonClient1 = keySecretClient1 + keyPublicClient2
const keyCommonClient2 = keySecretClient2 + keyPublicClient1

console.log(`Key Secret Client1 to decrypt message : ${keyCommonClient1}`)
console.log(`Key Secret Client2 to decrypt message : ${keyCommonClient2}`)

console.log('>>>>>>> Create key common successfully: ', keyCommonClient1 === keyCommonClient2)
