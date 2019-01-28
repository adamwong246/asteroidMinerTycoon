// "films" refer to scripted sequences.
// Acts are made of Scenes which are in turn made of Shots

import React, { ReactElement } from "react";

function flatten(arr) {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}

// an Act groups a list of Scenese
export class Act extends React.Component<
  { exitTo: string; scenes: any[] },
  { frameNdx: number; reel: any[] }
> {
  constructor(props) {
    super(props);

    // console.log("reel");
    // console.log(JSON.stringify(reel, null, 2));
    this.state = {
      frameNdx: 0,
      reel: props.scenes.map(scene => {
        const squashedScene = scene.shots.reduce((shots, shot, ndx, ry) => {
          let duplicate = shots.slice(0);
          duplicate.push(shot);
          return duplicate;
        }, []);

        console.log(`squashedScene: ${JSON.stringify(squashedScene)}`);

        return squashedScene;
      })
    };
    this.tick();
  }

  tick() {
    console.log(`tick: frameNdx is now ${this.state.frameNdx}`);
    console.log(
      `frame: ${JSON.stringify(this.state.reel[this.state.frameNdx])}`
    );
    setTimeout(
      function() {
        let tempState = this.state;
        tempState.frameNdx = tempState.frameNdx + 1;

        if (tempState.frameNdx < this.state.reel.length) {
          this.setState(tempState);
          this.tick();
        }
      }.bind(this),
      // this.state.reel[this.state.frameNdx].hold
      1000
    );
  }

  render() {
    return (
      <div>
        {/* {JSON.stringify(this.state.reel[this.state.frameNdx])} */}
        {this.state.reel[this.state.frameNdx].map(f => f.widget)}
      </div>
    );
  }
}

// Scenes compose Acts and the screen is "cleared" between each.
// Each Schene is composed of Shots
export class Scene {
  shots: Shot[];
}

// Shots compose Scenes but the screen is not cleared between, they are simply appended to the stage
export class Shot {
  // the element to show
  widget: ReactElement<any>;

  // psuedo-type it slowly as if loading
  speed: `FAST` | `SLOW`;

  // wait for an amount of time
  hold: number;
}
