import { useState, useEffect } from "react";

// Funciona como useState, mas persiste o valor no localStorage
// automaticamente. Serve pra preferências simples de UI que devem
// sobreviver entre navegações/recarregamentos, sem precisar de uma
// store global pra isso.
export function useLocalStorageState<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    if (stored === null) return defaultValue;

    try {
      return JSON.parse(stored) as T;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
