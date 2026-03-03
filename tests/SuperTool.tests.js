/* global beforeEach afterEach */
import { describe, it } from 'mocha'
import { expect } from 'chai'
import { SuperTool } from '../lib/index.js'

describe('SuperTool', function () {
  let tool

  beforeEach(function () {
    tool = new SuperTool()
  })

  afterEach(function () {
    tool = null
  })

})
