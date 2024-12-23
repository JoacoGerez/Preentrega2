import Item from './Item';

function ItemList({ items }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {items.map(item => <Item item={item} key={item.id} />)}
    </div>
  );
}

export default ItemList;
