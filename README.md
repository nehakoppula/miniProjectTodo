In this project, let's build a **Simple Todos** app by certain concepts of ReactJS as of class components and state. We can build this app using component life cycle also but useState under React Hook and State Hook will make things easier.

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

Certain dependecies missed can be downloaded using below commands:
npm install uuid
npm install react-icons

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
  ![image](https://github.com/nehakoppula/miniProjectTodo/assets/144526067/38ee98ac-ba13-45bf-b72f-08ec58ad08ae)

<br/>

The app must have the following functionalities

- Initially, the list of given todos should be displayed with a delete button for each todo
- When **Delete** button of a todo is clicked, then the respective todo should be deleted
- The `SimpleTodos` will be empty initially. The page should contain input element which takes todo as input. The todo element should be stored in a list with unique id with below given format.

  |  Key  | Data Type |
  | :---: | :-------: |
  |  id   |  Number   |
  | title |  String   |

- Each todo should be added as the user mentions.
- Each todo should be displayed as list items. The list item should hold the property of deleting, editing and marking the todo as completed.
- The deletion is done with onclick of 'delete' button and editing can be done with onclick of icon. Onclick of edit button gives a prompt such that you can edit the todo.
  Once save is clicked the todo is updated on the page.
- So as to mark complete a todo you can mark by oncliking the todo such that the color of the todo item changes representing the completion, the action toggles.

</details>


<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/SimpleTodo/index.js`
- `src/components/SimpleTodo/index.css`
- `src/components/TodoItem/index.js`
- `src/components/TodoItem/index.css`
</details>

### Quick Tips

<details>
<summary>Click to view</summary>
You can use the below `outline` CSS property for buttons and input elements to remove the highlighting when the elements are clicked

  ```
    outline: none;
  ```

</details>

### Resources

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #ffc2a0; width: 150px; padding: 10px; color: black">Hex: #ffe4f3</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #ff8542; width: 150px; padding: 10px; color: white">Hex: #f67280</div>
<div style="background-color: #000000; width: 150px; padding: 10px; color: white">Hex: #000000</div>
<div style="background-color: #ff0b37; width: 150px; padding: 10px; color: white">Hex: #ff0b37</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

