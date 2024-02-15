import List from "./List.jsx";

function App() {

  const employee = [{ id: 1, name: 'tyler', age: 29 },
  { id: 2, name: 'steven', age: 33 },
  { id: 3, name: 'molly', age: 24 },
  { id: 4, name: 'noah', age: 30 },
  { id: 5, name: 'oliver', age: 33 }]

  const boss = [{ id: 6, name: 'jake', age: 56 },
  { id: 7, name: 'mike', age: 71 },
  { id: 8, name: 'nora', age: 54 }]

  return (<>
    {employee.length > 0 && <List items={employee} category="Employee"></List>}
    {boss.length > 0 && <List items={boss} category="Boss"></List>}
  </>)
}

export default App