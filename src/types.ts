/**
 * A resource that has `.toString()` with a tabbable output support. Which
 * allows to chain the output of multiple objects in a tree-like structure.
 */
export interface Printable {
  /**
   * Returns a human-readable tabbed string representation of the object as a
   * tree.
   *
   * @param tab String to use for indentation.
   */
  toString(tab?: string): string;
}
