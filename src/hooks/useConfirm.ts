import { useState, useCallback } from "react";

// Guarda a ação pendente (a função a executar quando confirmado)
// e expõe helpers pra abrir/fechar/confirmar sem repetir boilerplate
// em todo componente que precisa de confirmação.
export function useConfirm() {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

  const requestConfirm = useCallback((action: () => void) => {
    setPendingAction(() => action);
    setIsOpen(true);
  }, []);

  const handleConfirm = useCallback(() => {
    pendingAction?.();
    setIsOpen(false);
    setPendingAction(null);
  }, [pendingAction]);

  const handleCancel = useCallback(() => {
    setIsOpen(false);
    setPendingAction(null);
  }, []);

  return {
    isOpen,
    requestConfirm,
    handleConfirm,
    handleCancel,
  };
}
