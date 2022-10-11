// Sessions
export const sessionsKey = (sessionId: string) => `sessions:#${sessionId}`;
 
// Cache
export const pageCacheKey = (id: string) => `pagecache#${id}`

// Users
export const usersKey = (userId: string) => `users:#${userId}`;

// Items
export const itemsKey = (itemId: string) => `items:#${itemId}`;
export const bidHistoryKey = (itemId: string) => `items:history:#${itemId}`;
export const itemsByBidsKey = () => 'items:bids';
export const itemsByViewsKey = () => 'items:views';
export const itemsByPriceKey = () => 'items:price';
export const itemsByEndingAtKey = () => 'items:endingAt';