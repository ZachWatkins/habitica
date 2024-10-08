/* eslint-disable camelcase */

import {
  generateUser,
  translate as t,
} from '../../../../../helpers/api-integration/v3';
import shared from '../../../../../../website/common/script';
import { apiError } from '../../../../../../website/server/libs/apiError';

const { content } = shared;

describe('POST /user/buy/:key', () => {
  let user;
  let clock;

  beforeEach(async () => {
    user = await generateUser({
      'stats.gp': 400,
    });
  });

  afterEach(() => {
    if (clock) {
      clock.restore();
    }
  });

  // More tests in common code unit tests

  it('returns an error if the item is not found', async () => {
    await expect(user.post('/user/buy/notExisting'))
      .to.eventually.be.rejected.and.eql({
        code: 404,
        error: 'NotFound',
        message: apiError('itemNotFound', { key: 'notExisting' }),
      });
  });

  it('buys a potion', async () => {
    await user.updateOne({
      'stats.gp': 400,
      'stats.hp': 40,
    });

    const { potion } = content;
    const res = await user.post('/user/buy/potion');
    await user.sync();

    expect(user.stats.hp).to.equal(50);
    expect(res.data).to.eql(user.stats);
    expect(res.message).to.equal(t('messageBought', { itemText: potion.text() }));
  });

  it('returns an error if user tries to buy a potion with full health', async () => {
    await user.updateOne({
      'stats.gp': 40,
      'stats.hp': 50,
    });

    await expect(user.post('/user/buy/potion'))
      .to.eventually.be.rejected.and.eql({
        code: 401,
        error: 'NotAuthorized',
        message: t('messageHealthAlreadyMax'),
      });
  });

  it('buys a piece of gear', async () => {
    const key = 'armor_warrior_1';

    await user.post(`/user/buy/${key}`);
    await user.sync();

    expect(user.items.gear.owned.armor_warrior_1).to.eql(true);
  });

  it('buys a special spell', async () => {
    clock = sinon.useFakeTimers(new Date('2024-10-31T00:00:00Z'));
    const key = 'spookySparkles';
    const item = content.special[key];

    await user.updateOne({ 'stats.gp': 250 });
    const res = await user.post(`/user/buy/${key}`);
    await user.sync();

    expect(res.data).to.eql({
      items: JSON.parse(JSON.stringify(user.items)), // otherwise dates can't be compared
      stats: user.stats,
    });
    expect(res.message).to.equal(t('messageBought', {
      itemText: item.text(),
    }));
  });

  it('allows for bulk purchases', async () => {
    await user.updateOne({
      'stats.gp': 400,
      'stats.hp': 20,
    });

    const { potion } = content;
    const res = await user.post('/user/buy/potion', { quantity: 2 });
    await user.sync();

    expect(user.stats.hp).to.equal(50);
    expect(res.data).to.eql(user.stats);
    expect(res.message).to.equal(t('messageBought', { itemText: potion.text() }));
  });
});
