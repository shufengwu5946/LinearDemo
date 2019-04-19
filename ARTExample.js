/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

"use strict";

const React = require("react");
const { ART, Platform, View } = require("react-native");

const { Surface, Path, Group, Shape,LinearGradient } = ART;

const scale = Platform.isTV ? 4 : 1;

export default class ARTExample extends React.Component {
  render() {
    const pathRect = new Path()
      .moveTo(scale * 0, scale * 0)
      .lineTo(scale * 0, scale * 110)
      .lineTo(scale * 110, scale * 110)
      .lineTo(scale * 110, scale * 0)
      .close();

    const pathCircle0 = new Path()
      .moveTo(scale * 30, scale * 5)
      .arc(scale * 0, scale * 50, scale * 25)
      .arc(scale * 0, -scale * 50, scale * 25)
      .close();

    const pathCircle1 = new Path()
      .moveTo(scale * 30, scale * 55)
      .arc(scale * 0, scale * 50, scale * 25)
      .arc(scale * 0, -scale * 50, scale * 25)
      .close();

    const pathCircle2 = new Path()
      .moveTo(scale * 55, scale * 30)
      .arc(scale * 50, scale * 0, scale * 25)
      .arc(-scale * 50, scale * 0, scale * 25)
      .close();

    const pathCircle3 = new Path()
      .moveTo(scale * 55, scale * 80)
      .arc(scale * 50, scale * 0, scale * 25)
      .arc(-scale * 50, scale * 0, scale * 25)
      .close();

    var linearGradient = new LinearGradient(
      {
        ".1": "gray", // blue in 1% position
        "1": "black" // opacity white in 100% position
      },
      "0",
      "0",
      "110",
      "110"
    );

    return (
      <View>
        <Surface width={scale * 200} height={scale * 200}>
          <Group>
            {/* <Shape
              d={pathRect}
              stroke="#000080"
              fill="#000080"
              strokeWidth={scale}
            />
            <Shape
              d={pathCircle0}
              stroke="#FF0000"
              fill="#FF0000"
              strokeWidth={scale}
            />
            <Shape
              d={pathCircle1}
              stroke="#00FF00"
              fill="#00FF00"
              strokeWidth={scale}
            />
            <Shape
              d={pathCircle2}
              stroke="#00FFFF"
              fill="#00FFFF"
              strokeWidth={scale}
            />
            <Shape
              d={pathCircle3}
              stroke="#FFFFFF"
              fill="#FFFFFF"
              strokeWidth={scale}
            /> */}
            <Shape d={pathRect} fill={linearGradient} />
            
          </Group>
          
        </Surface>
      </View>
    );
  }
}
