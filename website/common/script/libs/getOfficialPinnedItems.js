import toArray from 'lodash/toArray';
import content from '../content/index';
import seasonalShopConfig from './shops-seasonal.config';

const { officialPinnedItems } = content;

const flatGearArray = toArray(content.gear.flat);

export default function getOfficialPinnedItems (user) {
  const officialItemsArray = [...officialPinnedItems];
  const { pinnedSets } = seasonalShopConfig();
  if (pinnedSets && Boolean(user) && user.stats.class) {
    const setToAdd = pinnedSets[user.stats.class];

    // pinnedSets == current seasonal class set are always gold purchaseable

    flatGearArray
      .filter(gear => user.items.gear.owned[gear.key] === undefined && gear.set === setToAdd)
      .forEach(gear => {
        officialItemsArray.push({
          type: 'marketGear',
          path: `gear.flat.${gear.key}`,
        });
      });
  }

  return officialItemsArray;
}
