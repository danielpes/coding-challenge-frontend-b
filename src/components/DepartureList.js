import React from 'react';
import DepartureItem from './DepartureItem';
import '../styles/DepartureList.css';

import { translate } from 'react-i18next';
import i18n from '../i18n';

const DepartureList = props => {

  const { t } = props;

  const sortedDepartures = props.departures.sort((dep1, dep2) => (
    dep1.departureDate > dep2.departureDate ? 1 : 0
  ));

  const items = sortedDepartures.map(departure => (
    <DepartureItem
      key={departure.id}
      departureDate={departure.departureDate}
      arrivalDate={departure.arrivalDate}
      origin={departure.origin}
      destination={departure.destination}
      price={departure.price}
      currency={departure.currency}
    />
  ));

  const emptyList = (
    <div className="notification">
      <p>{ t('msg.info_no_departures')}</p>
    </div>
  );

  return (
    items.length === 0 ? emptyList : (
      <div className="DepartureList">
        {items}
      </div>
    )
  );
};

translate.setI18n(i18n);
export default translate()(DepartureList);
