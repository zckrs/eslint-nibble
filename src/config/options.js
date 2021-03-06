/**
 * @fileoverview Options configuration for optionator.
 * @author Ian VanSchooten
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import optionator from 'optionator';

//------------------------------------------------------------------------------
// Initialization and Public Interface
//------------------------------------------------------------------------------


export default optionator({
  prepend: 'usage: eslint-nibble [file.js] [dir]',
  options: [{
    heading: 'Options'
  }, {
    option     : 'help',
    alias      : 'h',
    type       : 'Boolean',
    description: 'Show help'
  }, {
    option     : 'version',
    alias      : 'v',
    type       : 'Boolean',
    description: 'Outputs the version number'
  }]
});
