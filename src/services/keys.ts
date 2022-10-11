// Sessions
export const sessionKey = (sessionId: string) => `sessions:#${sessionId}`;
 
// Cache
export const pageCacheKey = (id: string) => `pagecache#${id}`

// Users
export const usersKey = (userId: string) => `users:#${userId}`;