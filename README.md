# svg-n-gon

A dumb simple tool to generate simple versatile SVG paths/vertices of regular polygons. Useful for situations where `transform()` is not ideal or for defining evenly-spaced stopping points around a circular path.

## Use

```
const nGon = require( "svg-n-gon" );

nGon( <center>, <numberOfSides>, <radius>, <startAngle>, <asPath>, <counterClockwise> );
```

## API

<table>
  <thead>
    <tr>
      <th>props</th>
      <th>type</th>
      <th>description</th>
      <th>default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>center</code></td>
      <td>[ number, number ]</td>
      <td>Must be a valid SVG cartesian coordinate in the form of <code>[ x, y ]</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>numberOfSides</code></td>
      <td>integer</td>
      <td>Must be greater than 3</td>
      <td></td>
    </tr>
    <tr>
      <td><code>radius</code></td>
      <td>number</td>
      <td>Distance from center to each vertex</td>
      <td></td>
    </tr>
    <tr>
      <td><code>startAngle</code></td>
      <td>number</td>
      <td>Rotates the nGon</td>
      <td></td>
    </tr>
    <tr>
      <td><code>asPath</code></td>
      <td rowspan="2">boolean</td>
      <td>Returns an SVG path string when <code>true</code> and an array of SVG coordinates otherwise</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>counterClockwise</code></td>
      <td>When <code>true</code>, <code>nGonVertices[ 1 ]</code> corresponds to the vertex immediately to the left of the top (starting) vertex - otherwise it corresponds to the vertex immediately to the right of the starting vertex (and so on)</td>
      <td><code>true</code></td>
    </tr>
    <tr>