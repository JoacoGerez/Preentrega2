import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  return (
    <div>
      <img src={item?.thumbnail} alt={item?.title} />
      <h1>{item?.title}</h1>
      <p>{item?.description}</p>
      <h3>{item?.price}</h3>
      <ItemCount />
    </div>
  );
}

export default ItemDetail;
