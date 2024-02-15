import PropTypes from 'prop-types'

function List(props) {

  const category = props.category

  const itemList = props.items;

  const company = itemList.map(item => <li key={item.id}>{item.name}: &nbsp;<b>{item.age} years old</b></li>)

  return (<>
    <h3 className="list-category">{category}</h3><ol className="list-items">{company}</ol>
  </>)
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number,
      name: PropTypes.string,
      age: PropTypes.number
    }))
}

List.defaultProps = {
  category: "Category",
  items: []
}

export default List