import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from "react-router";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => setItems(res.products));

    fetch('https://dummyjson.com/products/category/' + categoryId)
      .then(res => res.json())
      .then(res => setItems(res.products));
  }, [categoryId]);

  return (
    <ItemList items={items} />
  );
}

export default ItemListContainer;
