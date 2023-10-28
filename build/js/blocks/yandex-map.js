/* -------------------------------------------------------------------------
   begin Yandex Map
 * ------------------------------------------------------------------------- */

export default function yandexMapInit() {
  const restaurantMapBlock = document.getElementById('restaurant-map');
  const x = restaurantMapBlock.getAttribute('data-x');
  const y = restaurantMapBlock.getAttribute('data-y');

  ymaps.ready(() => {
    const restaurantMap = new ymaps.Map(restaurantMapBlock, {
      center: [x, y],
      zoom: 13,
      controls: [],
    });

    const restaurantMapPlacemark = new ymaps.Placemark(
      [x, y],
      {},
      { preset: 'islands#redDotIcon', iconColor: '#e8500e' },
    );

    restaurantMap.geoObjects.add(restaurantMapPlacemark);
  });
}

/* -------------------------------------------------------------------------
   end Yandex Map
 * ------------------------------------------------------------------------- */
