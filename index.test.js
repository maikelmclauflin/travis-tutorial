import { test } from 'ava'
import identifier from './'
import {
  isFunction,
  isObject,
  isString,
  isNumber
} from 'lodash'

test('its a function', t => {
  t.true(isFunction(identifier))
})
test('returns a promise', async t => {
  t.plan(3)
  const result = identifier()
  t.true(result instanceof Promise)
  const hash = await result
  t.true(isObject(hash))
  const { secret } = hash
  t.true(isString(secret))
})
const { env } = process
const { SECRET } = env
test('loads ignored env', t => {
  t.true(isNumber(+SECRET))
})