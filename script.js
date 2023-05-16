//your code here
  const divs = document.querySelectorAll('.image');

    let draggedItem = null;

    divs.forEach(div => {
      div.addEventListener('dragstart', () => {
        draggedItem = div;
        div.classList.add('selected');
      });

      div.addEventListener('dragend', () => {
        draggedItem = null;
        div.classList.remove('selected');
      });

      div.addEventListener('dragover', e => {
        e.preventDefault();
      });

      div.addEventListener('dragenter', e => {
        e.preventDefault();
        div.classList.add('selected');
      });

      div.addEventListener('dragleave', () => {
        div.classList.remove('selected');
      });

      div.addEventListener('drop', () => {
        if (draggedItem && draggedItem !== div) {
          const tempHTML = div.innerHTML;
          const tempClass = div.className;
          div.innerHTML = draggedItem.innerHTML;
          div.className = draggedItem.className;
          draggedItem.innerHTML = tempHTML;
          draggedItem.className = tempClass;
        }
        div.classList.remove('selected');
      });
    });
 