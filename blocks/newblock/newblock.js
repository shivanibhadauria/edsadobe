document.addEventListener("DOMContentLoaded", () => {
  // Select the outer container
  const section = document.querySelector(".section.newblock-container");
  if (!section) return;

  // Add a class to the section container
  section.classList.add("styled-section");

  // Select the wrapper
  const wrapper = section.querySelector(".newblock-wrapper");
  if (wrapper) {
    wrapper.classList.add("styled-wrapper");
  }

  // Select the block
  const block = wrapper.querySelector(".newblock.block");
  if (block) {
    block.classList.add("styled-block");
  }

  // Iterate over the rows (children of the block)
  [...block.children].forEach((row, rowIndex) => {
    row.classList.add("styled-row");

    // Iterate over the columns in the row
    [...row.children].forEach((col, colIndex) => {
      if (colIndex === 0) {
        col.classList.add("styled-title");
      } else {
        col.classList.add("styled-content");
      }
    });
  });
});
