---
title: "TypeScript Tips and Tricks for Better Code"
description: "Practical TypeScript techniques to write more maintainable and type-safe code in your projects."
pubDate: 2024-09-20T09:15:00Z
tags: ["typescript", "javascript", "programming"]
draft: false
---

# TypeScript Tips and Tricks for Better Code

TypeScript has become the standard for building robust JavaScript applications. Here are some tips to level up your TypeScript skills.

## Type Inference is Your Friend

Let TypeScript infer types when possible:

```typescript
// Good - TypeScript infers the type
const numbers = [1, 2, 3, 4, 5];

// Unnecessary - type is obvious
const numbers: number[] = [1, 2, 3, 4, 5];
```

## Use Union Types Effectively

Union types are powerful for handling multiple possibilities:

```typescript
type Status = 'loading' | 'success' | 'error';

function handleStatus(status: Status) {
  switch (status) {
    case 'loading':
      return 'Loading...';
    case 'success':
      return 'Success!';
    case 'error':
      return 'Error occurred';
  }
}
```

## Utility Types Save Time

TypeScript includes built-in utility types:

- `Partial<T>` - Makes all properties optional
- `Required<T>` - Makes all properties required
- `Pick<T, K>` - Select specific properties
- `Omit<T, K>` - Exclude specific properties

Example:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Only need id and name
type UserPreview = Pick<User, 'id' | 'name'>;

// Everything except age
type UserWithoutAge = Omit<User, 'age'>;
```

## Const Assertions

Use `as const` for literal types:

```typescript
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
} as const;

// config.apiUrl is type 'https://api.example.com'
// not just 'string'
```

## Generic Constraints

Constrain generics for better type safety:

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: 'Alice', age: 30 };
const name = getProperty(user, 'name'); // Works
// const invalid = getProperty(user, 'invalid'); // Error!
```

## Discriminated Unions

Create type-safe state machines:

```typescript
type LoadingState = { status: 'loading' };
type SuccessState = { status: 'success'; data: string };
type ErrorState = { status: 'error'; error: Error };

type State = LoadingState | SuccessState | ErrorState;

function handleState(state: State) {
  switch (state.status) {
    case 'loading':
      // TypeScript knows state is LoadingState
      return 'Loading...';
    case 'success':
      // TypeScript knows state is SuccessState
      return state.data;
    case 'error':
      // TypeScript knows state is ErrorState
      return state.error.message;
  }
}
```

## Conclusion

These TypeScript patterns will help you write more maintainable code. The key is to leverage the type system to catch errors at compile time rather than runtime.

Happy coding!
