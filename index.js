exports.nGon = ( center, numberOfSides, radius, start = 0, asPath = true, counterclockwise = false ) => {
    const pathFromVertices = vertices => vertices.reduce( ( path, vertex, index ) => !index ? `${ path } ${ vertex } ` : `${ path } L${ vertex } `, "M" ) + "Z";
    const centerAng = 2 * Math.PI / Math.round( numberOfSides );
    let startAngle = Math.PI / 2 - ( start % 2 ? 0 : centerAng / 2 );
    let vertices = [ ...Array( numberOfSides ).keys() ].map( index => {
        const ang = startAngle + ( index * centerAng );
        return [
            Math.round( center[ 0 ] + radius * Math.cos( ang ) ),
            Math.round( center[ 1 ] - radius * Math.sin( ang ) )
        ];
    } );
    if ( counterclockwise ) vertices = [ vertices[ 0 ], ...vertices.slice( 1 ).reverse() ];
    return asPath ? pathFromVertices( vertices ) : vertices;
};
