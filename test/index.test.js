import assert from 'assert';
import { types, errors } from '../src';

describe('feathers-errors', () => {
  it('is CommonJS compatible', () => {
    assert.equal(typeof require('../lib'), 'object');
  });

  describe('error types', () => {
    it('Bad Request', () => {
      assert.notEqual(typeof errors.BadRequest, 'undefined', 'has BadRequest');
    });

    it('Not Authenticated', () => {
      assert.notEqual(typeof errors.NotAuthenticated, 'undefined', 'has NotAuthenticated');
    });

    it('Payment Error', () => {
      assert.notEqual(typeof errors.PaymentError, 'undefined', 'has PaymentError');
    });

    it('Forbidden', () => {
      assert.notEqual(typeof errors.Forbidden, 'undefined', 'has Forbidden');
    });

    it('Not Found', () => {
      assert.notEqual(typeof errors.NotFound, 'undefined', 'has NotFound');
    });

    it('Method Not Allowed', () => {
      assert.notEqual(typeof errors.MethodNotAllowed, 'undefined', 'has MethodNotAllowed');
    });

    it('Not Acceptable', () => {
      assert.notEqual(typeof errors.NotAcceptable, 'undefined', 'has NotAcceptable');
    });

    it('Timeout', () => {
      assert.notEqual(typeof errors.Timeout, 'undefined', 'has Timeout');
    });

    it('Conflict', () => {
      assert.notEqual(typeof errors.Conflict, 'undefined', 'has Conflict');
    });

    it('Unprocessable', () => {
      assert.notEqual(typeof errors.Unprocessable, 'undefined', 'has Unprocessable');
    });

    it('General Error', () => {
      assert.notEqual(typeof errors.GeneralError, 'undefined', 'has GeneralError');
    });

    it('Not Implemented', () => {
      assert.notEqual(typeof errors.NotImplemented, 'undefined', 'has NotImplemented');
    });

    it('Unavailable', () => {
      assert.notEqual(typeof errors.Unavailable, 'undefined', 'has Unavailable');
    });
  });

  it('exposes errors via types for backwards compatibility', () => {
    assert.notEqual(typeof types.BadRequest, 'undefined', 'has BadRequest');
  });

  describe('successful error creation', () => {
    it('default error', () => {
      var error = new errors.GeneralError();
      assert.equal(error.code, 500);
      assert.equal(error.message, 'Error');
      assert.equal(error.className, 'general-error');
    });

    it('with custom message', () => {
      var error = new errors.BadRequest('Invalid Password');
      assert.equal(error.code, 400);
      assert.equal(error.message, 'Invalid Password');
    });

    it('with error object', () => {
      var error = new errors.BadRequest(new Error('Invalid Password'));
      assert.equal(error.code, 400);
      assert.equal(error.message, 'Invalid Password');
    });

    it('with multiple errors', () => {
      var data = {
        email: 'Email Taken',
        password: 'Invalid Password'
      };

      var error = new errors.BadRequest(data);
      assert.equal(error.code, 400);
      assert.equal(error.message, 'Error');
      assert.equal(error.errors, data);
    });
  });
});