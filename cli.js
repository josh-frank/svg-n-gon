"use strict";

const { nGon } = require( "." );

const generateNGon = args => {
  const [ centerX, centerY, numberOfSides, radius, startAngle ] = args.map( arg => parseInt( arg ) );
  try { return nGon( [ centerX, centerY ], numberOfSides, radius, startAngle, true, false ) }
  catch ( error ) { return error; }
}

/* eslint no-process-exit: 0 */
/* eslint global-require: 0 */

if ( require.main === module ) {
  let sliceN = 1;
  if ( process.argv.indexOf( module.filename ) > -1 || require( "path" ).basename( process.argv[ 1 ] ) === "parse-paths-from-svg" ) sliceN = 2;
  const args = process.argv.slice( sliceN, process.argv.length );
  if ( args.length < 4 ) {
    console.error( "You must pass at least 4 integers as arguments:\n\t\t--center-x --center-y --sides --radius\noptional:\t--start-angle" );
    process.exit( 1 );
  }
  console.log( generateNGon( args ) );
}