interface ErrorToastProps {
  message: string | null
  onDismiss: () => void
}

export const ErrorToast = ({ message, onDismiss }: ErrorToastProps) => {
  if (!message) return null

  return (
    <div className="error-toast">
      <span>{message}</span>
      <button className="error-dismiss" onClick={onDismiss}>
        ×
      </button>
    </div>
  )
}

