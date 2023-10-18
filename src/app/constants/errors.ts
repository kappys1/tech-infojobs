// Factories
export const createErrorFactory = function (name: string) {
  return class BusinessError extends Error {
    constructor(message: string, extras?: unknown) {
      super(message)
      if (arguments.length >= 2 && extras) {
        Object.assign(this, extras)
      }
      this.name = name
    }
  }
}

// Errors
export const CredentialsInvalidError = createErrorFactory(
  'CredentialsInvalidError'
)

export type BusinessErrorType = InstanceType<typeof CredentialsInvalidError>

export type BusinessErrorNameType = 'CredentialsInvalidError'
