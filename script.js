const items = document.querySelectorAll('.item');

    items.forEach(item => {
      item.addEventListener('dragstart', dragStart);
      item.addEventListener('dragend', dragEnd);
    });

    function dragStart(event) {
      event.target.classList.add('dragging');
    }

    function dragEnd(event) {
      event.target.classList.remove('dragging');
    }

    function allowDrop(event) {
      event.preventDefault();
    }

    function drop(event) {
      event.preventDefault();
      const draggedItem = document.querySelector('.dragging');
      const container = event.target;
      container.appendChild(draggedItem);
      document.getElementById('successMessage').style.display = 'block';
    }
    function resetContainers() {
        const container1 = document.getElementById('container1');
        const container2 = document.getElementById('container2');
        const successMessage = document.getElementById('successMessage');
  
        container2.innerHTML = '<h2>Container 2</h2>';
        successMessage.style.display = 'none';
  
        items.forEach(item => {
          container1.appendChild(item);
        });
      }