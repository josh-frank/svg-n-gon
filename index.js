exports.nGon = ( center, numberOfSides, radius, start = 0, asPath = true, counterclockwise = false ) => {
    if ( !center || !numberOfSides || !radius || numberOfSides < 3 ) throw new Error( "Malformed arguments" );
    const pathFromVertices = vertices => vertices.reduce( ( path, vertex, index ) => !index ? `${ path } ${ vertex } ` : `${ path } L${ vertex } `, "M" ) + "Z";
    const centerAng = 2 * Math.PI / Math.round( numberOfSides );
    let startAngle = Math.PI / 2 - ( start % 2 ? 0 : centerAng / 2 );
    let vertices = [ ...Array( numberOfSides ).keys() ].map( index => {
        const ang = startAngle + ( index * centerAng );
        return center.map( ( coordinate, index ) => Math.round( coordinate ) + ( index ? -radius * Math.sin( ang ) : radius * Math.cos( ang ) ) );
        // return [
        //     Math.round( center[ 0 ] + radius * Math.cos( ang ) ),
        //     Math.round( center[ 1 ] - radius * Math.sin( ang ) )
        // ];
    } );
    if ( counterclockwise ) vertices = [ vertices[ 0 ], ...vertices.slice( 1 ).reverse() ];
    return asPath ? pathFromVertices( vertices ) : vertices;
};
