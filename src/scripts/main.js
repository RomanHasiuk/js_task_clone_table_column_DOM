'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');
const tfoot = table.querySelector('tfoot');

function cloneAndAppendSecondColumn() {
  const secondHeader = thead.querySelectorAll('th')[1];
  const clonedHeader = secondHeader.cloneNode(true);
  const lastHeader = thead.querySelector('tr').lastElementChild;

  lastHeader.before(clonedHeader);

  tbody.querySelectorAll('tr').forEach((row) => {
    const secondCell = row.children[1];
    const clonedCell = secondCell.cloneNode(true);
    const lastCell = row.lastElementChild;

    lastCell.before(clonedCell);
  });

  const secondFooter = tfoot.querySelectorAll('th')[1];
  const clonedFooter = secondFooter.cloneNode(true);
  const lastFooter = tfoot.querySelector('tr').lastElementChild;

  lastFooter.before(clonedFooter);
}

cloneAndAppendSecondColumn();
