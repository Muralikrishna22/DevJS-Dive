# Event Delegation in JavaScript

## Definition:
Event delegation is a technique where a single event listener is added to a parent element to manage events triggered by its child elements. Instead of adding individual listeners to each child, the event bubbles up from the child to the parent, and the parent handles the event.

## Code & Explanation:
```html
<ul id="parentList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  const parent = document.getElementById('parentList');

  parent.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      alert(event.target.innerText);
    }
  });
</script>
```

### Explanation:
1. We add an event listener to the parent `<ul>` (parentList).
2. When a user clicks on any `<li>`, the event bubbles up to the `<ul>`.
3. Inside the event handler, `event.target` refers to the actual clicked child `<li>`. The `if` condition checks whether the clicked element is an `<li>`.

## Use Cases:
- **Efficient handling of dynamic elements**: Useful when dealing with a dynamic list (e.g., adding or removing items) as there's no need to reassign listeners.
- **Performance improvement**: Reduces the number of event listeners, especially in lists with many child elements.
- **Managing large DOM trees**: Great for managing click events in tables, lists, or grids where the number of elements may be large.
