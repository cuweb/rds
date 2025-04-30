declare class Dropdown {
    private parentElement;
    private dropdowns;
    constructor(filterElement: HTMLElement);
    dropdownsClick(): void;
    /**
     * Handles the click events for a dropdown element, enabling toggle functionality
     * for the dropdown menu and ensuring proper behavior when clicking outside the dropdown.
     *
     * @param dropdown - The dropdown HTMLElement that contains the toggle button and menu.
     *
     * Functionality:
     * - Adds a click event listener to the toggle button inside the dropdown to show or hide the menu.
     * - Adds a click event listener to the document to hide the menu when clicking outside the dropdown.
     * - Prevents event propagation when clicking inside the dropdown menu to avoid unintended behavior.
     */
    dropdownsClickHandler(dropdown: HTMLElement): void;
    /**
     * Adjusts the alignment of a dropdown menu to ensure it stays within the viewport boundaries.
     *
     * This method checks the position of the dropdown menu relative to the viewport and adjusts
     * its `left` and `right` styles to prevent it from overflowing beyond the edges of the container.
     *
     * @param menu - The HTML element representing the dropdown menu to be aligned.
     */
    alignDropdowns(menu: HTMLElement): void;
    /**
     * Closes all dropdown menus within the component by iterating through the list of dropdown elements.
     *
     * - Hides the dropdown menu by adding the `hidden` class to its element.
     * - Resets the dropdown arrow button by removing the `rotate-180` class.
     *
     * This method ensures that all dropdowns are in their closed state.
     */
    closeAllDropdowns(): void;
    /**
     * Cleans up resources and performs necessary teardown operations for the filter panel.
     * Specifically, it ensures that all dropdowns associated with the filter panel are closed.
     */
    destroy(): void;
}
export default Dropdown;
