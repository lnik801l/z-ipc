import type { Adapter } from "@/core/adapter"
import { defineAdapter } from "@/core/adapter"

export function createDebugLogAdapter<TMessage>(
	adapter: Adapter<TMessage>,
	name: string,
) {
	return defineAdapter<TMessage>({
		publish: (message) => {
			console.log(`[${name}] publish`, message)
			adapter.publish(message)
		},
		subscribe: (listener) => {
			console.log(`[${name}] subscribe`, listener)
			return adapter.subscribe(listener)
		},
		unsubscribe: (listener) => {
			console.log(`[${name}] unsubscribe`, listener)
			return adapter.unsubscribe(listener)
		},
	})
}