import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function that combines clsx and tailwind-merge
 *
 * This function takes any number of class values (strings, objects, arrays)
 * and merges them together, resolving any Tailwind CSS conflicts.
 *
 * @param inputs - Class values to be merged
 * @returns A string of merged class names
 *
 * @example
 * ```ts
 * // Basic usage
 * cn('text-red-500', 'bg-blue-500');
 *
 * // With conditional classes
 * cn('text-red-500', isActive && 'bg-blue-500');
 *
 * // With object syntax
 * cn('text-red-500', { 'bg-blue-500': isActive });
 *
 * // Resolving conflicts (last one wins)
 * cn('text-red-500', 'text-blue-500'); // => 'text-blue-500'
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
