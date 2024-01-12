import React, { useState } from 'react';

export const ProductContext = React.createContext(null);

function DataContextComponents({ children }) {
  const [user, setUser] = useState({
    "products": [
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                "https://w0.peakpx.com/wallpaper/362/98/HD-wallpaper-samsung-galaxy-a9-smartphones-2018-mobile-phones-close-up-samsung.jpg",
                "https://images.hindustantimes.com/img/2021/06/08/550x309/IMG_5223_1623145084295_1623145098953.jpg",
                "https://w0.peakpx.com/wallpaper/56/740/HD-wallpaper-huawei-honor-20-mobile-phones-2019-smartphones-close-up-huawei.jpg",
                "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71EI12-pjzL.jpg",
                "https://m.media-amazon.com/images/I/61ugw5YLl-L.jpg"
            ]
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            "images": [
                "https://s.alicdn.com/@sc04/kf/H4e9eb6a136ed4d279606254c52f875cfB.jpg_300x300.jpg",
                "https://images.hindustantimes.com/img/2021/06/08/550x309/IMG_5223_1623145084295_1623145098953.jpg",
                "https://w0.peakpx.com/wallpaper/56/740/HD-wallpaper-huawei-honor-20-mobile-phones-2019-smartphones-close-up-huawei.jpg",
                "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71EI12-pjzL.jpg",
                "https://m.media-amazon.com/images/I/61ugw5YLl-L.jpg"
            ]
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
            "images": [
                "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2019/08/Xiaomi-Redmi-K20-Review-with-pros-and-cons-india-4.jpg?resize=1920%2C1280&ssl=1",
                "https://images.hindustantimes.com/img/2021/06/08/550x309/IMG_5223_1623145084295_1623145098953.jpg",
                "https://w0.peakpx.com/wallpaper/56/740/HD-wallpaper-huawei-honor-20-mobile-phones-2019-smartphones-close-up-huawei.jpg",
                "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71EI12-pjzL.jpg",
                "https://m.media-amazon.com/images/I/61ugw5YLl-L.jpg"
            ]
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
            "images": [
                "https://cdn.screenguards.co.in/media/catalog/product/cache/11/image/9df78eab33525d08d6e5fb8d27136e95/-/1/-104410110624p.jpg",
                "https://images.hindustantimes.com/img/2021/06/08/550x309/IMG_5223_1623145084295_1623145098953.jpg",
                "https://w0.peakpx.com/wallpaper/56/740/HD-wallpaper-huawei-honor-20-mobile-phones-2019-smartphones-close-up-huawei.jpg",
                "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71EI12-pjzL.jpg",
                "https://m.media-amazon.com/images/I/61ugw5YLl-L.jpg"
            ]
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
            "images": [
                "https://cdn.screenguards.co.in/media/catalog/product/cache/11/image/9df78eab33525d08d6e5fb8d27136e95/1/0/104410110759p.jpg",
                "https://images.hindustantimes.com/img/2021/06/08/550x309/IMG_5223_1623145084295_1623145098953.jpg",
                "https://w0.peakpx.com/wallpaper/56/740/HD-wallpaper-huawei-honor-20-mobile-phones-2019-smartphones-close-up-huawei.jpg",
                "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71EI12-pjzL.jpg",
                "https://m.media-amazon.com/images/I/61ugw5YLl-L.jpg"
            ]
        }
    ]
  });

  return (
    <ProductContext.Provider value={{ user, setUser }}>
      {children}
    </ProductContext.Provider>
  );
}

export default DataContextComponents;
