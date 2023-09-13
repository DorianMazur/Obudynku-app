function isBrowser() {
  return Boolean(typeof window !== "undefined" && (window as any).__env);
}

export function env(key = "") {
  if (!key.length) {
    throw new Error("No env key provided");
  }

  if (isBrowser()) {
    if (key in (window as any).__env) return (window as any).__env[key];
  }

  return process.env[key];
}
