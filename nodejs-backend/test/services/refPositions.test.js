const assert = require('assert');
const app = require('../../src/app');

describe('\'refPositions\' service', () => {
  it('registered the service', () => {
    const service = app.service('refPositions');

    assert.ok(service, 'Registered the service (refPositions)');
  });
});
