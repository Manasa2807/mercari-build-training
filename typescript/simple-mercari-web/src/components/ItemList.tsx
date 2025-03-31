import { useEffect, useState } from 'react';
import { Item, fetchItems } from '~/api';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:9000';
const PLACEHOLDER_IMAGE = import.meta.env.VITE_FRONTEND_URL + '/logo192.png';

interface Prop {
  reload: boolean;
  onLoadCompleted: () => void;
}

export const ItemList = ({ reload, onLoadCompleted }: Prop) => {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    const fetchData = () => {
      fetchItems()
        .then((data) => {
          console.debug('GET success:', data);
          setItems(data.items);
          onLoadCompleted();
        })
        .catch((error) => {
          console.error('GET error:', error);
        });
    };

    if (reload) {
      fetchData();
    }
  }, [reload, onLoadCompleted]);

  return (
    <div className="ItemListContainer">
      {items?.map((item) => {
        return (
          <div key={item.id} className="ItemList">
            <img
              src={item.image_name ? `${BACKEND_URL}/images/${item.image_name}` : PLACEHOLDER_IMAGE}
              alt="Item Image"
              className="ItemImage"
            />

            <div className="ItemDetails">
              <p>
                <span className="ItemName">Name: {item.name}</span>
                <br />
                <span className="ItemCategory">Category: {item.category}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
);
};
