// const toRadians = degrees => Math.PI * degrees / 180;

const pathFromVertices = vertices => vertices.reduce( ( path, vertex, index ) => !index ? `${ path } ${ vertex } ` : `${ path } L${ vertex } `, "M" ) + "Z";

const nGonVertices = ( center, numberOfSides, radius, start = 0, counterclockwise = false ) => {
    const centerAng = 2 * Math.PI / Math.round( numberOfSides );
    let startAngle = Math.PI / 2 - ( start % 2 ? 0 : centerAng / 2 );
    const vertices = [ ...Array( numberOfSides ).keys() ].map( index => {
        const ang = startAngle + ( index * centerAng );
        return [
            Math.round( center[ 0 ] + radius * Math.cos( ang ) ),
            Math.round( center[ 1 ] - radius * Math.sin( ang ) )
        ];
    } );
    return counterclockwise ? vertices : [ vertices[ 0 ], ...vertices.slice( 1 ).reverse() ];
};

const hexagonVertices = nGonVertices( [ 500, 500 ], 12, 500, 15 );

console.log( hexagonVertices );
console.log( pathFromVertices( hexagonVertices ) );